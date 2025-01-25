function doPost(e) {
    try {
      // Parse incoming data
      const data = JSON.parse(e.postData.contents);
      Logger.log("Received Data: " + JSON.stringify(data));
  
      // Google Sheets and Google Drive interaction
      const sheetId = "SheetID"; 
      const sheet = SpreadsheetApp.openById(sheetId).getSheetByName("Sheet1");
      const folderId = "DriveID"; 
      const folder = DriveApp.getFolderById(folderId);
      
      const fileData = Utilities.base64Decode(data.fileContent);
      const blob = Utilities.newBlob(fileData, "application/pdf", data.fileName);
      const file = folder.createFile(blob);
      
      const driveUrl = file.getUrl();
      Logger.log("Drive URL: " + driveUrl);
  
      // Append data to Google Sheets
      sheet.appendRow([data.name, data.email, data.phone, data.message, driveUrl, new Date().toLocaleString()]);
  
      // Email 1: Thank You Email to the User
      var userSubject = "Subject to thankyou mail";
      var userBody = `
        <html>
          <body>
            <p>Dear ${data.name},</p>
            <p>Best regards,</p>
          </body>
        </html>
      `;
  
      MailApp.sendEmail({
        to: data.email,
        subject: userSubject,
        htmlBody: userBody
      });
  
      // Email 2: Notification Email to the Owner
      var ownerSubject = "Notification Email to the Owner";
      var ownerBody = `
        <html>
          <body>
            <p>Hello,</p>
            <p>New message has been received.</p>
            <ul>
              <li><strong>Name:</strong> ${data.name}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Phone:</strong> ${data.phone}</li>
              <li><strong>Cover Letter:</strong> ${data.message}</li>
              <li><strong>Cover Letter Link:</strong> ${driveUrl}</li>
            </ul>
            <p>Regards, <br />Tajulkhan/p>
          </body>
        </html>
      `;
  
      MailApp.sendEmail({
        to: "tajulbasheer@gmail.com",
        subject: ownerSubject,
        htmlBody: ownerBody
      });
  
      // Return a success response in JSON format
      return ContentService.createTextOutput(
        JSON.stringify({ success: true })
      ).setMimeType(ContentService.MimeType.JSON);
  
    } catch (error) {
      Logger.log("Error occurred: " + error.message);
      return ContentService.createTextOutput(
        JSON.stringify({ success: false, error: error.message })
      ).setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  function doGet(e) {
    // Handle preflight (OPTIONS) requests and return CORS headers
    return ContentService.createTextOutput("")
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  