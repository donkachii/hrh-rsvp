const express = require("express");
const { google } = require("googleapis");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const app = express();
const stream = require("stream");
app.use(bodyParser.json());

require("dotenv").config();

// Configure Google Auth using your service account key file and desired scopes
const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/drive",
];
const auth = new google.auth.GoogleAuth({
  keyFile: "ftsheetsintegration.json",
  scopes: SCOPES,
});

const sheets = google.sheets({ version: "v4", auth });
const drive = google.drive({ version: "v3", auth });

// Endpoint to update Google Sheets
app.post("/api/google-sheets", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    isAttending,
    allergies,
    accommodations,
    message,
  } = req.body;
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A2",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            firstName,
            lastName,
            email,
            phone,
            isAttending,
            allergies,
            accommodations,
            message,
          ],
        ],
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error updating sheet:", error);
    res.status(500).send("Error updating sheet");
  }
});

// Endpoint to upload file to Google Drive
app.post("/api/upload-drive", upload.single("file"), async (req, res) => {
  try {
    const response = await drive.files.create({
      resource: {
        name: req.file.originalname,
        mimeType: req.file.mimetype,
        parents: [process.env.GOOGLE_DRIVE_ID],
      },
      media: {
        mimeType: req.file.mimetype,
        body: req.file.stream,
      },
    });
    res.json({ fileId: response.data.id });
  } catch (err) {
    console.error("Error uploading file:", err);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
