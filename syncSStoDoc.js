// To use this script you must update the 'ss' variable to equal the Google Spread Sheet ID for the 
// SS you wish to sync this Container-Bound(Google Docs) to. Also make sure the sheet name is
// "Master Sheet". You may change this option if you like.

function syncSStoDoc(docPagesToSync) {
  // Retrieve SS, Doc and initialize variables
  let body = DocumentApp.getActiveDocument().getBody();
  let tables = body.getTables(); // get all tables in the Document
  let docRow = null;
  let docGetNumOfCells = null;
  let docCellValue = null;
  let ssRow = null;
  let ssCellRange = null;

  // The code below opens a spreadsheet using its ID.
  // Note that the spreadsheet is NOT physically opened on the client side.
  // It is opened on the server only (for modification by the script).
  let ss = SpreadsheetApp.openById(
    "1JvxyZziwAknEqFkKkehjablSGQradKlqJXCE4BgA5ms"
  ).getSheetByName("Master Sheet");

  // Iterate thru each docPage entry and write its contents to the appropriate
  // range of SS rows.
  docPagesToSync.forEach(page => {
    page--; // decrement by 1 because tables[] is indexed at 0
    ssRow = computeStartingSSRowNumber(page); // Compute the starting Row Number for the SS section that corresponds current docPage
    let docGetNumOfRows = tables[page].getNumRows(); // get number of rows in the current DocTable Page
   
    for (i = 0; i < docGetNumOfRows; i++) {
      docRow = tables[page].getRow(i);
      docGetNumOfCells = docRow.getNumCells();

      for (j = 0; j < docGetNumOfCells; j++) {
        docCell = docRow.getCell(j);
        docCellValue = docRow.getCell(j).getText();
        Logger.log("Cell Value is: " + docCellValue);
        
        ssCellRange = ss.getRange(ssRow, j + 1);
        ssCellRange.setValue(docCellValue);
      } // End for loop(j)

      // Increment SS row value
      ssRow++; // Increment SS row number
    } // End for loop(i)
  }); // End forEach(page) array loop
} //  End syncDocToSheet() Function
