# Firestore Database Schema

This document describes the Firestore collections used by the SUNAI Trust website for storing form submissions.

---

## Collections Overview

| Collection | Purpose | Source Page |
|---|---|---|
| `volunteers` | Volunteer registration submissions | `/volunteer` |
| `ngo_registrations` | NGO / Partner registration submissions | `/register/ngo` |
| `contact_submissions` | Contact form messages | `/contact` |

---

## `volunteers` Collection

Each document represents one volunteer registration.

| Field | Type | Required | Description |
|---|---|---|---|
| `firstName` | `string` | ✅ | Volunteer's first name |
| `lastName` | `string` | — | Last name |
| `phoneNumber` | `string` | ✅ | Phone number |
| `whatsappNumber` | `string` | ✅ | WhatsApp number |
| `maritalStatus` | `string` | — | `"YES"` (Married) or `"NO"` (Unmarried) |
| `languages` | `string` | — | Comma-separated languages known |
| `email` | `string` | ✅ | Email address |
| `dob` | `string` | — | Date of birth (YYYY-MM-DD) |
| `bloodGroup` | `string` | — | Blood group (e.g. `"A+"`, `"O-"`) |
| `address` | `string` | ✅ | Full address |
| `location` | `string` | ✅ | Location / area |
| `country` | `string` | ✅ | Country |
| `pincode` | `string` | ✅ | Postal / PIN code |
| `state` | `string` | ✅ | State |
| `city` | `string` | ✅ | City |
| `aadharNumber` | `string` | ✅ | Aadhar / national ID number |
| `educationType` | `string` | — | Qualification level |
| `specialization` | `string` | — | Major / specialization |
| `skill` | `string` | — | Key skill |
| `certification` | `string` | — | Relevant certification |
| `organization` | `string` | — | Current / previous organization |
| `title` | `string` | — | Job title / designation |
| `yearsOfExperience` | `string` | — | Years of professional experience |
| `hasVolunteerExperience` | `string` | — | `"YES"` or `"NO"` |
| `volunteerYearsOfExperience` | `string` | — | Years of volunteering experience |
| `areaOfInterest` | `string` | ✅ | Areas the volunteer is passionate about |
| `emergencyName` | `string` | — | Emergency contact name |
| `emergencyNumber` | `string` | — | Emergency contact phone |
| `photoUrl` | `string` | — | Firebase Storage URL for uploaded photo |
| `aadharCopyUrl` | `string` | — | Firebase Storage URL for ID copy |
| `resumeUrl` | `string` | — | Firebase Storage URL for resume |
| `status` | `string` | auto | `"pending"` \| `"reviewed"` \| `"approved"` \| `"rejected"` |
| `createdAt` | `Timestamp` | auto | Server timestamp of submission |

### Storage Paths

| File Type | Storage Path |
|---|---|
| Photo | `volunteers/photos/{timestamp}_{filename}` |
| Aadhar Copy | `volunteers/aadhar/{timestamp}_{filename}` |
| Resume | `volunteers/resumes/{timestamp}_{filename}` |

---

## `ngo_registrations` Collection

Each document represents one NGO / partner registration.

| Field | Type | Required | Description |
|---|---|---|---|
| `organizationName` | `string` | ✅ | NGO / organization name |
| `registrationNumber` | `string` | — | Registration number |
| `registrationDate` | `string` | — | Registration date (YYYY-MM-DD) |
| `yearOfEstablishment` | `string` | — | Year established (YYYY) |
| `panTaxId` | `string` | — | PAN number |
| `tax12aUrn` | `string` | — | 12A URN |
| `tax80gUrn` | `string` | — | 80G URN |
| `csrRegNumber` | `string` | — | CSR registration number |
| `registeredAddress` | `string` | ✅ | Registered office address |
| `state` | `string` | — | State |
| `city` | `string` | — | City |
| `contactNumber` | `string` | — | Official contact number |
| `officialEmail` | `string` | — | Official email address |
| `contactPersonNumber` | `string` | — | Contact person's phone |
| `whatsappNumber` | `string` | — | WhatsApp number |
| `contactPersonEmail` | `string` | — | Contact person's email |
| `website` | `string` | — | Website URL |
| `socialMediaLink` | `string` | — | Social media link |
| `missionVision` | `string` | — | Mission & vision description |
| `areasOfOperation` | `string` | — | Areas of operation |
| `activeVolunteers` | `string` | — | Number of active volunteers |
| `bankAccountNo` | `string` | — | Bank account number |
| `bankIFSC` | `string` | — | IFSC code |
| `bankName` | `string` | — | Bank name & branch |
| `documentsUrl` | `string` | — | Firebase Storage URL for uploaded documents |
| `status` | `string` | auto | `"pending"` \| `"reviewed"` \| `"approved"` \| `"rejected"` |
| `createdAt` | `Timestamp` | auto | Server timestamp of submission |

### Storage Paths

| File Type | Storage Path |
|---|---|
| Documents | `ngo_registrations/documents/{timestamp}_{filename}` |

---

## `contact_submissions` Collection

Each document represents one contact form message.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | ✅ | Sender's full name |
| `email` | `string` | ✅ | Sender's email |
| `phone` | `string` | — | Sender's phone (optional) |
| `subject` | `string` | ✅ | Message subject |
| `message` | `string` | ✅ | Message body |
| `status` | `string` | auto | `"unread"` \| `"read"` \| `"replied"` |
| `createdAt` | `Timestamp` | auto | Server timestamp of submission |

---

## Firestore Security Rules (Recommended)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Public: anyone can create (submit forms)
    // Only authenticated admins can read / update / delete
    match /volunteers/{docId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    match /ngo_registrations/{docId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }

    match /contact_submissions/{docId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null;
    }
  }
}
```

## Firebase Storage Rules (Recommended)

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Public uploads (form submissions)
    match /volunteers/{allPaths=**} {
      allow write: if true;
      allow read: if request.auth != null;
    }
    match /ngo_registrations/{allPaths=**} {
      allow write: if true;
      allow read: if request.auth != null;
    }
  }
}
```
