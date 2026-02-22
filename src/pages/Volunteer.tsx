import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import volunteerImg from "@/assets/volunteer.jpg";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, User, MapPin, GraduationCap, Briefcase, Heart, Phone, FileText } from "lucide-react";

/* ─── form state ──────────────────────────────────── */
const initialState = {
  firstName: "", lastName: "", phoneNumber: "", whatsappNumber: "",
  maritalStatus: "", languages: "", email: "", photo: null as File | null,
  address: "", location: "", country: "", pincode: "", state: "", city: "",
  aadharNumber: "", aadharCopy: null as File | null, dob: "",
  bloodGroup: "",
  educationType: "", specialization: "", skill: "", certification: "",
  organization: "", title: "", yearsOfExperience: "",
  hasVolunteerExperience: "", volunteerYearsOfExperience: "", areaOfInterest: "",
  emergencyName: "", emergencyNumber: "",
  resume: null as File | null,
};

const educationTypes = ["High School", "Diploma", "Bachelor's", "Master's", "PhD", "Other"];
const bloodGroups = ["A+","A-","B+","B-","AB+","AB-","O+","O-","Unknown"];

/* ─── helpers ─────────────────────────────────────── */
/** Reusable section wrapper */
const Section = ({
  step,
  icon: Icon,
  title,
  children,
}: {
  step: number;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
    <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b border-gray-200">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-sm font-bold">
        {step}
      </span>
      <Icon className="w-5 h-5 text-emerald-600" />
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

/* ─── component ───────────────────────────────────── */
const Volunteer = () => {
  const [form, setForm] = useState(initialState);
  const [photoName, setPhotoName] = useState("");
  const [aadharCopyName, setAadharCopyName] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [isDraggingPhoto, setIsDraggingPhoto] = useState(false);
  const [isDraggingAadhar, setIsDraggingAadhar] = useState(false);
  const [isDraggingResume, setIsDraggingResume] = useState(false);
  const [aadharError, setAadharError] = useState("");
  const [resumeError, setResumeError] = useState("");

  const aadharInputRef = useRef<HTMLInputElement | null>(null);
  const resumeInputRef = useRef<HTMLInputElement | null>(null);

  /* handlers — kept exactly the same as before */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      if (files && files[0]) {
        const file = files[0];
        const ext = "." + file.name.split(".").pop()?.toLowerCase();
        if (name === "aadharCopy") {
          if (![".pdf", ".jpg", ".jpeg", ".png"].includes(ext)) { setAadharError("Invalid file type."); return; }
          if (file.size > 3 * 1024 * 1024) { setAadharError("Max 3 MB."); return; }
          setAadharError(""); setForm({ ...form, [name]: file }); setAadharCopyName(file.name);
        } else if (name === "resume") {
          if (![".pdf", ".doc", ".docx"].includes(ext)) { setResumeError("Invalid file type."); return; }
          if (file.size > 5 * 1024 * 1024) { setResumeError("Max 5 MB."); return; }
          setResumeError(""); setForm({ ...form, [name]: file }); setResumeName(file.name);
        } else {
          setForm({ ...form, [name]: file }); if (name === "photo") setPhotoName(file.name);
        }
      }
    } else { setForm({ ...form, [name]: value }); }
  };

  const handleDragOver = (e: React.DragEvent, f: string) => { e.preventDefault(); if (f === "photo") setIsDraggingPhoto(true); if (f === "aadharCopy") setIsDraggingAadhar(true); if (f === "resume") setIsDraggingResume(true); };
  const handleDragLeave = (e: React.DragEvent, f: string) => { e.preventDefault(); if (f === "photo") setIsDraggingPhoto(false); if (f === "aadharCopy") setIsDraggingAadhar(false); if (f === "resume") setIsDraggingResume(false); };
  const handleDrop = (e: React.DragEvent, fieldName: string) => {
    e.preventDefault();
    setIsDraggingPhoto(false); setIsDraggingAadhar(false); setIsDraggingResume(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0]; const ext = "." + file.name.split(".").pop()?.toLowerCase();
      if (fieldName === "aadharCopy") {
        if (![".pdf", ".jpg", ".jpeg", ".png"].includes(ext)) { setAadharError("Invalid file type."); return; }
        if (file.size > 3 * 1024 * 1024) { setAadharError("Max 3 MB."); return; }
        setAadharError(""); setForm({ ...form, [fieldName]: file }); setAadharCopyName(file.name);
      } else if (fieldName === "resume") {
        if (![".pdf", ".doc", ".docx"].includes(ext)) { setResumeError("Invalid file type."); return; }
        if (file.size > 5 * 1024 * 1024) { setResumeError("Max 5 MB."); return; }
        setResumeError(""); setForm({ ...form, [fieldName]: file }); setResumeName(file.name);
      } else { setForm({ ...form, [fieldName]: file }); if (fieldName === "photo") setPhotoName(file.name); }
    }
  };
  const handleSelectChange = (name: string, value: string) => setForm({ ...form, [name]: value });
  const handleReset = () => { setForm(initialState); setPhotoName(""); setAadharCopyName(""); setResumeName(""); };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log(form); alert("Volunteer registration submitted!"); };

  /* ── file drop zone helper ──────────────────────── */
  const FileDropZone = ({
    id, name, accept, dragging, fileName, error, label,
  }: {
    id: string; name: string; accept: string; dragging: boolean; fileName: string; error: string; label: string;
  }) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div
        className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer ${dragging ? "border-emerald-500 bg-emerald-50" : "border-gray-300 hover:border-emerald-400 bg-gray-50/50"}`}
        onDragOver={(e) => handleDragOver(e, name)}
        onDragLeave={(e) => handleDragLeave(e, name)}
        onDrop={(e) => handleDrop(e, name)}
      >
        <label htmlFor={id} className="cursor-pointer block">
          <Upload className={`w-8 h-8 mx-auto mb-2 ${dragging ? "text-emerald-500" : "text-gray-400"}`} />
          <span className="text-sm text-gray-600 block">{dragging ? "Drop file here" : "Drag & drop or click to browse"}</span>
          <input id={id} name={name} type="file" accept={accept} onChange={handleChange} className="hidden" ref={name === "aadharCopy" ? aadharInputRef : name === "resume" ? resumeInputRef : undefined} />
        </label>
        {fileName && (
          <div className="mt-3 px-3 py-2 bg-emerald-50 rounded-lg inline-flex items-center gap-2">
            <Upload className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-emerald-700 font-medium">{fileName}</span>
          </div>
        )}
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
      </div>
    </div>
  );

  /* ─── render ────────────────────────────────────── */
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div
          className="relative bg-cover bg-center py-14 md:py-20"
          style={{ backgroundImage: `url(${volunteerImg})` }}
        >
          <div className="absolute inset-0 bg-emerald-900/60" aria-hidden />
          <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              Volunteer Registration
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-xl mx-auto">
              Join our community of change-makers and help us create a better tomorrow.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="container mx-auto px-4 py-10 max-w-3xl -mt-8 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* 1 — Personal */}
            <Section step={1} icon={User} title="Personal Information">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <Input id="phoneNumber" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="whatsappNumber">WhatsApp Number *</Label>
                  <Input id="whatsappNumber" name="whatsappNumber" value={form.whatsappNumber} onChange={handleChange} required />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div className="space-y-1.5">
                  <Label>Marital Status</Label>
                  <div className="flex gap-5 mt-1">
                    {["YES", "NO"].map((v) => (
                      <label key={v} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="maritalStatus" value={v} checked={form.maritalStatus === v} onChange={handleChange} className="w-4 h-4 accent-emerald-600" />
                        <span className="text-sm text-gray-700">{v === "YES" ? "Married" : "Unmarried"}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="languages">Languages Known</Label>
                  <Input id="languages" name="languages" value={form.languages} onChange={handleChange} placeholder="e.g. Tamil, English, Hindi" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input id="dob" name="dob" type="date" value={form.dob} onChange={handleChange} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="bloodGroup">Blood Group</Label>
                  <Select value={form.bloodGroup} onValueChange={(v) => handleSelectChange("bloodGroup", v)}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      {bloodGroups.map((bg) => (
                        <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-5">
                <FileDropZone id="photo" name="photo" accept=".pdf,.jpg,.jpeg,.png" dragging={isDraggingPhoto} fileName={photoName} error="" label="Photo (PNG / JPG / PDF — max 3 MB) *" />
              </div>
            </Section>

            {/* 2 — Address & ID */}
            <Section step={2} icon={MapPin} title="Address & Identification">
              <div className="space-y-1.5">
                <Label htmlFor="address">Address *</Label>
                <Textarea id="address" name="address" value={form.address} onChange={handleChange} rows={3} required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div className="space-y-1.5">
                  <Label htmlFor="location">Location *</Label>
                  <Input id="location" name="location" value={form.location} onChange={handleChange} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="country">Country *</Label>
                  <Input id="country" name="country" value={form.country} onChange={handleChange} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="state">State *</Label>
                  <Input id="state" name="state" value={form.state} onChange={handleChange} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" name="city" value={form.city} onChange={handleChange} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input id="pincode" name="pincode" value={form.pincode} onChange={handleChange} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="aadharNumber">Aadhar / ID Number *</Label>
                  <Input id="aadharNumber" name="aadharNumber" value={form.aadharNumber} onChange={handleChange} required />
                </div>
              </div>
              <div className="mt-5">
                <FileDropZone id="aadharCopy" name="aadharCopy" accept=".pdf,.jpg,.jpeg,.png" dragging={isDraggingAadhar} fileName={aadharCopyName} error={aadharError} label="Upload ID Copy (PNG / JPG / PDF — max 3 MB)" />
              </div>
            </Section>

            {/* 3 — Education */}
            <Section step={3} icon={GraduationCap} title="Education">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="educationType">Qualification</Label>
                  <Select value={form.educationType} onValueChange={(v) => handleSelectChange("educationType", v)}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      {educationTypes.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="specialization">Specialization / Major</Label>
                  <Input id="specialization" name="specialization" value={form.specialization} onChange={handleChange} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="skill">Key Skill</Label>
                  <Input id="skill" name="skill" value={form.skill} onChange={handleChange} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="certification">Certification</Label>
                  <Input id="certification" name="certification" value={form.certification} onChange={handleChange} />
                </div>
              </div>
            </Section>

            {/* 4 — Work Experience */}
            <Section step={4} icon={Briefcase} title="Work Experience">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" name="organization" value={form.organization} onChange={handleChange} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="title">Title / Designation</Label>
                  <Input id="title" name="title" value={form.title} onChange={handleChange} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="yearsOfExperience">Years of Experience</Label>
                  <Input id="yearsOfExperience" name="yearsOfExperience" value={form.yearsOfExperience} onChange={handleChange} />
                </div>
              </div>
            </Section>

            {/* 5 — Volunteering */}
            <Section step={5} icon={Heart} title="Volunteering Information">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label>Prior Volunteer Experience</Label>
                  <div className="flex gap-5 mt-1">
                    {["YES", "NO"].map((v) => (
                      <label key={v} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="hasVolunteerExperience" value={v} checked={form.hasVolunteerExperience === v} onChange={handleChange} className="w-4 h-4 accent-emerald-600" />
                        <span className="text-sm text-gray-700">{v}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="volunteerYearsOfExperience">Years of Vol. Experience</Label>
                  <Input id="volunteerYearsOfExperience" name="volunteerYearsOfExperience" value={form.volunteerYearsOfExperience} onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-1.5 mt-5">
                <Label htmlFor="areaOfInterest">Area of Interest *</Label>
                <Textarea id="areaOfInterest" name="areaOfInterest" value={form.areaOfInterest} onChange={handleChange} rows={3} required placeholder="Describe the areas you are most passionate about..." />
              </div>
            </Section>

            {/* 6 — Emergency Contact */}
            <Section step={6} icon={Phone} title="Emergency Contact">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="emergencyName">Contact Name</Label>
                  <Input id="emergencyName" name="emergencyName" value={form.emergencyName} onChange={handleChange} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="emergencyNumber">Contact Number</Label>
                  <Input id="emergencyNumber" name="emergencyNumber" value={form.emergencyNumber} onChange={handleChange} />
                </div>
              </div>
            </Section>

            {/* 7 — Resume */}
            <Section step={7} icon={FileText} title="Resume">
              <FileDropZone id="resume" name="resume" accept=".pdf,.doc,.docx" dragging={isDraggingResume} fileName={resumeName} error={resumeError} label="Upload Resume (PDF / DOC / DOCX — max 5 MB)" />
            </Section>

            {/* Actions */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col sm:flex-row justify-end gap-3">
              <Button type="button" variant="outline" onClick={handleReset} className="min-w-[130px] rounded-xl">
                Reset Form
              </Button>
              <Button type="submit" className="min-w-[160px] rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold shadow-md hover:shadow-lg">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
