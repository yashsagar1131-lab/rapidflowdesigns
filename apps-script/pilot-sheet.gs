// Google Apps Script: appends pilot-request submissions to this spreadsheet.
//
// Setup (about 5 minutes):
//  1. Create a Google Sheet (any name, e.g. "RapidFlow pilot requests").
//  2. In the sheet: Extensions > Apps Script. Delete the sample code and paste this file.
//  3. Change SECRET below to a long random string. Keep a copy.
//  4. Deploy > New deployment > type "Web app".
//       Execute as: Me.   Who has access: Anyone.   Deploy, then approve the permissions.
//  5. Copy the web app URL (ends in /exec).
//  6. In Cloudflare Pages > Settings > Variables and Secrets (Production), add:
//       PILOT_SHEET_URL     = the /exec URL
//       PILOT_SHEET_SECRET  = the same string as SECRET below (as a secret)
//     Then redeploy the site once so the variables take effect.
//
// If you edit this script later, use Deploy > Manage deployments > Edit > New version.

const SECRET = 'CHANGE_ME_TO_A_LONG_RANDOM_STRING';
const SHEET_NAME = 'Pilot requests';
const HEADERS = ['Received (IST)', 'Name', 'Work email', 'Company', 'Phone', 'Borrower language', 'Status', 'Notes'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const d = JSON.parse(e.postData.contents);
    if (!d || d.secret !== SECRET) return reply_({ ok: false });

    lock.waitLock(10000);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sh = ss.getSheetByName(SHEET_NAME);
    if (!sh) sh = ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }
    const received = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd MMM yyyy, HH:mm');
    sh.appendRow([
      received,
      safe_(d.name),
      safe_(d.email),
      safe_(d.company),
      safe_(d.phone),
      safe_(d.language),
      'New',
      '',
    ]);
    return reply_({ ok: true });
  } catch (err) {
    return reply_({ ok: false });
  } finally {
    try { lock.releaseLock(); } catch (e2) {}
  }
}

// Stops a value such as "+91 98..." or "=cmd" from being read as a number or formula.
function safe_(v) {
  const s = String(v == null ? '' : v).trim().slice(0, 200);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
