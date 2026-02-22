/**
 * Form Submission Service
 *
 * Provides typed APIs for submitting data from the public-facing forms:
 *   • Volunteer Registration  → `volunteers` collection
 *   • NGO / Partner Registration → `ngo_registrations` collection
 *
 * File uploads (photos, Aadhar copies, resumes, NGO documents) are stored in
 * Firebase Storage under structured paths and their download URLs are saved
 * alongside the text fields in Firestore.
 *
 * Each document also gets `createdAt` (server timestamp) and `status` fields
 * so the admin dashboard can track and manage submissions.
 */

import {
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    serverTimestamp,
    Timestamp,
} from "firebase/firestore";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import { db, storage } from "./firebase";

/* ───────────────────────────── Types ──────────────────────────────── */

/** Shape of a Volunteer form submission stored in Firestore */
export interface VolunteerSubmission {
    id?: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    whatsappNumber: string;
    maritalStatus: string;
    languages: string;
    email: string;
    dob: string;
    bloodGroup: string;
    address: string;
    location: string;
    country: string;
    pincode: string;
    state: string;
    city: string;
    aadharNumber: string;
    educationType: string;
    specialization: string;
    skill: string;
    certification: string;
    organization: string;
    title: string;
    yearsOfExperience: string;
    hasVolunteerExperience: string;
    volunteerYearsOfExperience: string;
    areaOfInterest: string;
    emergencyName: string;
    emergencyNumber: string;
    // URLs after upload
    photoUrl?: string;
    aadharCopyUrl?: string;
    resumeUrl?: string;
    // Metadata
    status: "pending" | "reviewed" | "approved" | "rejected";
    createdAt?: Timestamp;
}

/** Shape of an NGO registration stored in Firestore */
export interface NGOSubmission {
    id?: string;
    organizationName: string;
    registrationNumber: string;
    registrationDate: string;
    yearOfEstablishment: string;
    panTaxId: string;
    tax12aUrn: string;
    tax80gUrn: string;
    csrRegNumber: string;
    registeredAddress: string;
    state: string;
    city: string;
    contactNumber: string;
    officialEmail: string;
    contactPersonNumber: string;
    whatsappNumber: string;
    contactPersonEmail: string;
    website: string;
    socialMediaLink: string;
    missionVision: string;
    areasOfOperation: string;
    activeVolunteers: string;
    bankAccountNo: string;
    bankIFSC: string;
    bankName: string;
    // URL after upload
    documentsUrl?: string;
    // Metadata
    status: "pending" | "reviewed" | "approved" | "rejected";
    createdAt?: Timestamp;
}

/* ──────────────────────── File Upload Helper ─────────────────────── */

/**
 * Uploads a single file to Firebase Storage and returns the download URL.
 *
 * @param file      The File object to upload
 * @param folder    Storage path prefix, e.g. `"volunteers/photos"`
 * @returns         The publicly-accessible download URL
 */
async function uploadFile(file: File, folder: string): Promise<string> {
    const timestamp = Date.now();
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const storageRef = ref(storage, `${folder}/${timestamp}_${safeName}`);
    const snapshot = await uploadBytes(storageRef, file);
    return getDownloadURL(snapshot.ref);
}

/* ────────────────────── Submission Functions ─────────────────────── */

/**
 * Submits a Volunteer registration.
 * Uploads any attached files first, then writes all fields + URLs to Firestore.
 */
export async function submitVolunteerForm(
    data: Record<string, unknown>,
    photo: File | null,
    aadharCopy: File | null,
    resume: File | null
): Promise<string> {
    // Upload files in parallel if present
    const [photoUrl, aadharCopyUrl, resumeUrl] = await Promise.all([
        photo ? uploadFile(photo, "volunteers/photos") : Promise.resolve(""),
        aadharCopy ? uploadFile(aadharCopy, "volunteers/aadhar") : Promise.resolve(""),
        resume ? uploadFile(resume, "volunteers/resumes") : Promise.resolve(""),
    ]);

    // Build the document (strip File objects, add URLs + metadata)
    const { photo: _p, aadharCopy: _a, resume: _r, ...textFields } = data;
    const doc = {
        ...textFields,
        photoUrl,
        aadharCopyUrl,
        resumeUrl,
        status: "pending",
        createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "volunteers"), doc);
    return docRef.id;
}

/**
 * Submits an NGO / Partner registration.
 * Uploads the supporting document first, then writes to Firestore.
 */
export async function submitNGORegistration(
    data: Record<string, unknown>,
    documents: File | null
): Promise<string> {
    const documentsUrl = documents
        ? await uploadFile(documents, "ngo_registrations/documents")
        : "";

    const { documents: _d, ...textFields } = data;
    const doc = {
        ...textFields,
        documentsUrl,
        status: "pending",
        createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "ngo_registrations"), doc);
    return docRef.id;
}

/* ──────────────────── Data Retrieval (Admin) ─────────────────────── */

/**
 * Fetches all documents from a Firestore collection, ordered by `createdAt` descending.
 */
async function fetchCollection<T extends { id?: string }>(
    collectionName: string
): Promise<T[]> {
    const q = query(
        collection(db, collectionName),
        orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })) as T[];
}

/** Fetches all volunteer submissions */
export async function getVolunteerSubmissions(): Promise<VolunteerSubmission[]> {
    return fetchCollection<VolunteerSubmission>("volunteers");
}

/** Fetches all NGO registration submissions */
export async function getNGOSubmissions(): Promise<NGOSubmission[]> {
    return fetchCollection<NGOSubmission>("ngo_registrations");
}

