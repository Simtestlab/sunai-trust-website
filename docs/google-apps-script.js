/**
 * Google Apps Script — Paste this into Extensions → Apps Script
 * in your Google Spreadsheet.
 *
 * It receives POST requests from the SUNAI Trust website and
 * writes volunteer / NGO registration data into the correct sheet tab.
 *
 * SETUP:
 * 1. Open your Google Sheet → Extensions → Apps Script
 * 2. Paste this entire code
 * 3. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the URL and set VITE_GOOGLE_SHEETS_URL in .env
 *
 * IMPORTANT: After editing this script, you must create a NEW deployment
 * version: Deploy → Manage deployments → Edit → New version → Deploy
 */

function doPost(e) {
    try {
        var raw = e.postData ? e.postData.contents : null;

        if (!raw) {
            return ContentService
                .createTextOutput(JSON.stringify({ status: "error", message: "No data received" }))
                .setMimeType(ContentService.MimeType.JSON);
        }

        var data = JSON.parse(raw);
        var sheetName = data.sheetName;
        var headers = data.headers;
        var rows = data.rows;

        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = ss.getSheetByName(sheetName);

        // Create the sheet if it doesn't exist
        if (!sheet) {
            sheet = ss.insertSheet(sheetName);
        }

        // If sheet is empty, write headers first
        if (sheet.getLastRow() === 0) {
            sheet.appendRow(headers);
            sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
        }

        // Append each data row
        for (var i = 0; i < rows.length; i++) {
            sheet.appendRow(rows[i]);
        }

        // Auto-resize columns for readability
        for (var j = 1; j <= headers.length; j++) {
            sheet.autoResizeColumn(j);
        }

        return ContentService
            .createTextOutput(JSON.stringify({ status: "success", rowsAdded: rows.length }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet() {
    return ContentService
        .createTextOutput(JSON.stringify({ status: "ok", message: "SUNAI Sheets API is running" }))
        .setMimeType(ContentService.MimeType.JSON);
}
