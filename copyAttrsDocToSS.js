function copyDocCellAttributes(docPageNumber) {
  let body = DocumentApp.getActiveDocument().getBody();
  let tables = body.getTables(); // get all tables in the Document
  let docRow = null;
  let docGetNumOfCells = null;
  let docCell = null;
  let ssRow = null;
  let ssCellRange = null;

  docPageNumber = 20;
  let ss = SpreadsheetApp.openById(
    "1JvxyZziwAknEqFkKkehjablSGQradKlqJXCE4BgA5ms"
  ).getSheetByName("Master Sheet");

  docPageNumber = docPageNumber - 1; // decrement by 1 because tables[] is indexed at 0
  Logger.log("Current page value is " + docPageNumber);

  ssRow = docPageNumber * 40 + 1; // Compute the starting Row Number for the SS section that corresponds current docPage

  let docGetNumOfRows = tables[docPageNumber].getNumRows(); // get number of rows in the current DocTable Page

  for (i = 0; i < docGetNumOfRows; i++) {
    docRow = tables[docPageNumber].getRow(i);
    docGetNumOfCells = docRow.getNumCells();

    for (j = 0; j < docGetNumOfCells; j++) {
      docCell = docRow.getCell(j);
      // Get docPage cell attributes
      let attrs = docCell.getAttributes();
      Logger.log(attrs[DocumentApp.Attribute.BOLD]);

      ssCellRange = ss.getRange(ssRow, j + 1);
      ssCellRange.setFontWeight(attrs[DocumentApp.Attribute.BOLD]);
    } // End for loop(j)

    // Increment SS row value
    //ssRow++; // Increment SS row number
  } // End for loop(i)
}
