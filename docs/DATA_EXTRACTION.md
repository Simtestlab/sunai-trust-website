# Data Extraction Guide

This document explains how to extract form submission data from the SUNAI Trust website.

---

## 1. Using the Admin Dashboard (Recommended)

The website includes a built-in admin dashboard at `/admin` that provides:

- **View submissions** from all three forms (Volunteers, NGO Registrations, Contact Messages)
- **Search** across all fields
- **Pagination** for large datasets
- **Detail view** for individual submissions (click the 👁 eye icon)
- **CSV export** for use in Microsoft Excel, Google Sheets, etc.

### How to Export

1. Navigate to `https://your-domain.com/admin`
2. Select the tab for the data you want (Volunteers, NGO / Partners, or Contact Messages)
3. Optionally use the search bar to filter results
4. Click **Export CSV** — a `.csv` file will download automatically
5. Open the file in Excel or Google Sheets

### Exported File Format

| Tab | File Name | Columns |
|---|---|---|
| Volunteers | `volunteers_export_YYYY-MM-DD.csv` | 31 columns (all fields + URLs + status) |
| NGO / Partners | `ngo_registrations_export_YYYY-MM-DD.csv` | 27 columns (all fields + URLs + status) |
| Contact Messages | `contact_submissions_export_YYYY-MM-DD.csv` | 6 columns (name, email, phone, subject, message, status) |

---

## 2. Using the Firebase Console

You can also access data directly from the Firebase Console:

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Navigate to **Firestore Database**
4. Click on the collection you want:
   - `volunteers`
   - `ngo_registrations`
   - `contact_submissions`
5. Use **Export** from the hamburger menu (⋮) to export data

### Firebase Export Options

- **Export to BigQuery** — For advanced analytics and SQL queries
- **Export to Cloud Storage** — Creates JSON backup files
- **Manual copy** — Click individual documents to view/copy data

---

## 3. Programmatic Access

### Using the Form Service API

The codebase provides typed fetch functions in `src/lib/formService.ts`:

```typescript
import {
  getVolunteerSubmissions,
  getNGOSubmissions,
  getContactSubmissions,
} from "@/lib/formService";

// Fetch all volunteer submissions (ordered by createdAt desc)
const volunteers = await getVolunteerSubmissions();

// Fetch all NGO registrations
const ngoRegistrations = await getNGOSubmissions();

// Fetch all contact messages
const contacts = await getContactSubmissions();
```

### Using the Export Utility

```typescript
import { exportToCSV } from "@/lib/exportUtils";

// Export with custom column mapping
exportToCSV(volunteers, "my_export", {
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  phoneNumber: "Phone",
  city: "City",
  status: "Status",
});
```

---

## 4. File Attachments

Uploaded files (photos, ID copies, resumes, documents) are stored in **Firebase Storage** and referenced via download URLs in Firestore documents.

### Accessing Uploaded Files

- **From Admin Dashboard**: Click "View File →" link in the detail modal
- **From Firestore**: Copy the `photoUrl`, `aadharCopyUrl`, `resumeUrl`, or `documentsUrl` field value
- **From Firebase Console**: Navigate to **Storage** → browse the folder structure:
  - `volunteers/photos/`
  - `volunteers/aadhar/`
  - `volunteers/resumes/`
  - `ngo_registrations/documents/`

### File Naming Convention

All uploaded files are stored with the pattern:
```
{folder}/{timestamp}_{sanitized_filename}
```

Example: `volunteers/photos/1708614240000_profile_photo.jpg`

---

## 5. Data Status Workflow

### Volunteer & NGO Registrations

```
pending → reviewed → approved
                   ↘ rejected
```

### Contact Messages

```
unread → read → replied
```

> **Note**: Status updates are currently manual (directly in Firebase Console).
> Future enhancement: Add status update buttons in the Admin Dashboard.

---

## 6. Backup Strategy

### Recommended Schedule

| Frequency | Method | Retention |
|---|---|---|
| Daily | Firebase automatic backups | 7 days |
| Weekly | CSV export from Admin Dashboard | Keep on Google Drive |
| Monthly | Full Firestore export to Cloud Storage | Keep for 1 year |

### Setting Up Automatic Backups

1. In Firebase Console → **Firestore** → **Backups**
2. Enable daily backups
3. Set retention period to 7 days
4. For long-term, use `gcloud firestore export` command:

```bash
gcloud firestore export gs://your-bucket/backups/$(date +%Y%m%d)
```
