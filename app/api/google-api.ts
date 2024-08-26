'use server';
import { google } from "googleapis";

export async function handler(req, res) {
    if (req.method === 'POST') {
      let userInput = res; 
        const glAuth = await google.auth.getClient({
              projectId: process.env.PROJECT_ID,
              credentials: {
                  "type": process.env.SERVICE_ACCOUNT,
                  "project_id": process.env.PROJECT_ID,
                  "private_key_id": process.env.PRIVATE_KEY_ID,
                  "private_key": process.env.PRIVATE_KEY,
                  "client_email": process.env.CLIENT_ID,
                  "universe_domain": "googleapis.com"
              },
              scopes: ["https://www.googleapis.com/auth/spreadsheets"],
          });
      
          const glSheets = google.sheets({ version: "v4", auth: glAuth });
      
          await glSheets.spreadsheets.values.append({
              auth: glAuth,
              spreadsheetId: process.env.SHEET_ID,
              range: "RANGE",
              valueInputOption: "USER_ENTERED",
              requestBody: {
                  values: [
                      [
                          userInput,
                      ]
                  ]
              }
          })
      
      
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }

