/**
 * Configuration for Gmail2GDrive
 * See https://github.com/ahochsteger/gmail2gdrive/blob/master/README.md for a config reference
 */
function getGmail2GDriveConfig() {
  return {
    // Global filter
    "globalFilter": "-in:trash -in:drafts -in:spam",
    // Gmail label for processed threads (will be created, if not existing):
    "processedLabel": "to-gdrive/processed",
    // Sleep time in milli seconds between processed messages:
    "sleepTime": 100,
    // Maximum script runtime in seconds (google scripts will be killed after 5 minutes):
    "maxRuntime": 280,
    // Only process message newer than (leave empty for no restriction; use d, m and y for day, month and year):
    "newerThan": "1d",
    // Timezone for date/time operations:
    "timezone": "PST",
    // Processing rules:
    "rules": [
      { // Store all attachments sent to receipts@renegade.bio to the folder "Scans"
        "filter": "has:attachment to:receipts@renegade.bio",
        "folder": "'Business Admin & Finance/Finance & Accounting/Receipts/Unsorted'-yyyy-MM-dd"
        "filenameTo": "'yyyy_MMdd_'%s'",
        "archive": true
      },
    ]
  };
}
