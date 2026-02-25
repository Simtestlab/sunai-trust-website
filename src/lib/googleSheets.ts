/**
 * Google Sheets Sync Service
 *
 * Sends form submission data to a Google Apps Script Web App that
 * writes the rows into a Google Spreadsheet.
 *
 * The Apps Script URL is read from `VITE_GOOGLE_SHEETS_URL` in `.env`.
 */

const SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL as string | undefined;

/**
 * Syncs an array of Firestore documents to a Google Sheet via Apps Script.
 *
 * @param data       Array of flat objects (each = one row)
 * @param sheetName  Name of the sheet/tab to write to
 * @param columns    Map of `{ fieldKey: "Column Header" }` — controls which
 *                   fields are included and their display names
 * @returns          `true` on success
 */
export async function syncToGoogleSheets<T extends Record<string, unknown>>(
    data: T[],
    sheetName: string,
    columns: Record<string, string>
): Promise<boolean> {
    if (!SHEETS_URL) {
        throw new Error(
            "Google Sheets URL is not configured. Set VITE_GOOGLE_SHEETS_URL in .env"
        );
    }

    if (data.length === 0) {
        throw new Error("No data to sync.");
    }

    const keys = Object.keys(columns);
    const headers = keys.map((k) => columns[k]);

    // Build row arrays from the data objects
    const rows = data.map((row) =>
        keys.map((key) => {
            const val = row[key];
            // Convert Firestore Timestamps to readable dates
            if (val && typeof val === "object" && "toDate" in val) {
                return (val as { toDate: () => Date }).toDate().toLocaleString();
            }
            if (val === null || val === undefined) return "";
            return String(val);
        })
    );

    const payload = JSON.stringify({ sheetName, headers, rows });
    console.log("[GoogleSheets] Syncing to sheet:", sheetName, "rows:", rows.length);

    // Use navigator.sendBeacon for fire-and-forget POST.
    // sendBeacon sends a POST with Content-Type text/plain when given a string,
    // which is exactly what the Apps Script expects (e.postData.contents).
    // Unlike fetch, sendBeacon is NOT affected by CORS redirects.
    if (navigator.sendBeacon) {
        const blob = new Blob([payload], { type: "text/plain" });
        const sent = navigator.sendBeacon(SHEETS_URL, blob);
        if (sent) {
            console.log("[GoogleSheets] Beacon sent successfully");
            return true;
        }
        console.warn("[GoogleSheets] sendBeacon returned false, falling back to fetch");
    }

    // Fallback: fetch with no-cors mode
    await fetch(SHEETS_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: payload,
        mode: "no-cors",
    });

    console.log("[GoogleSheets] Fetch (no-cors) sent");
    return true;
}
