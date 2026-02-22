/**
 * Export Utilities
 *
 * Converts an array of objects into a CSV file and triggers a browser download.
 * Uses native browser APIs — no external dependencies required.
 * The resulting `.csv` file opens directly in Microsoft Excel, Google Sheets, etc.
 */

/**
 * Exports an array of objects as a CSV file download.
 *
 * @param data      Array of flat objects (each object = one row)
 * @param fileName  Name of the downloaded file (without extension)
 * @param columns   Optional map of `{ key: "Column Header" }` to control
 *                  which fields appear and their display names. If omitted,
 *                  all keys from the first row are used.
 *
 * @example
 * ```ts
 * exportToCSV(volunteers, "volunteers_export", {
 *   firstName: "First Name",
 *   lastName: "Last Name",
 *   email: "Email",
 * });
 * ```
 */
export function exportToCSV<T extends Record<string, unknown>>(
    data: T[],
    fileName: string,
    columns?: Record<string, string>
): void {
    if (data.length === 0) {
        alert("No data to export.");
        return;
    }

    // Determine which keys to include and their headers
    const keys = columns ? Object.keys(columns) : Object.keys(data[0]);
    const headers = columns
        ? keys.map((k) => columns[k])
        : keys;

    // Helper: escape a CSV cell value
    const escapeCell = (value: unknown): string => {
        if (value === null || value === undefined) return "";
        const str = String(value);
        // Wrap in quotes if it contains comma, quote, or newline
        if (str.includes(",") || str.includes('"') || str.includes("\n")) {
            return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
    };

    // Build CSV content
    const csvRows: string[] = [];

    // Header row
    csvRows.push(headers.map(escapeCell).join(","));

    // Data rows
    for (const row of data) {
        const values = keys.map((key) => {
            const val = row[key];
            // Convert Firestore Timestamps to readable dates
            if (val && typeof val === "object" && "toDate" in val) {
                return escapeCell((val as { toDate: () => Date }).toDate().toLocaleString());
            }
            return escapeCell(val);
        });
        csvRows.push(values.join(","));
    }

    const csvContent = csvRows.join("\n");
    const blob = new Blob(["\uFEFF" + csvContent], {
        type: "text/csv;charset=utf-8;",
    });

    // Trigger download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
