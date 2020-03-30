function copyDocCellAttributesToSS(docPagesToSync) {
  let body = DocumentApp.getActiveDocument().getBody();
  let tables = body.getTables(); // get all tables in the Document
  let docRow = null;
  let docGetNumOfCells = null;
  let docCell = null;
  let ssRow = null;
  let ssCellRange = null;

  // docPageNumber = 1;
  let ss = SpreadsheetApp.openById(
    "1JvxyZziwAknEqFkKkehjablSGQradKlqJXCE4BgA5ms"
  ).getSheetByName("Master Sheet");

  docPagesToSync.forEach(page => {
    page--; // decrement by 1 because tables[] is indexed at 0
    Logger.log("Current page value is " + page);
    ssRow = computeStartingSSRowNumber(page); // Compute the starting Row Number for the SS section that corresponds to current doc table

    let docGetNumOfRows = tables[page].getNumRows(); // get number of rows in the current DocTable page

    for (i = 0; i < docGetNumOfRows; i++) {
      docRow = tables[page].getRow(i);
      docGetNumOfCells = docRow.getNumCells();

      for (j = 0; j < docGetNumOfCells; j++) {
        docCell = docRow.getCell(j);
        Logger.log("Cell Value is: " + docCell.getText());

        // Get docPage cell attributes
        let attrs = docCell.getAttributes();
<<<<<<< HEAD
        
        // Log the paragraph attributes.
        for (var att in attrs) {
          Logger.log(att + ":" + attrs[att]);
         }
        
        
=======

        // Log the paragraph attributes.
        for (var att in attrs) {
          Logger.log(att + ":" + attrs[att]);
        }

>>>>>>> ed3fc90ad5c08a01b9eb2c9490ea1950dfef5f0f
        // Define an object to hold Document ENUM attribute(styles) properties
        // ENUM is an object that holds several of each Doc's elements style properties
        // i.e. DocumentApp.Attribute.BACKGROUND_COLOR
        let docAppsAttributes = {
<<<<<<< HEAD
             bgColor: attrs[DocumentApp.Attribute.BACKGROUND_COLOR],
             fontBold: attrs[DocumentApp.Attribute.BOLD],
             fontColor: attrs[DocumentApp.Attribute.FOREGROUND_COLOR],
             fontFamily: attrs[DocumentApp.Attribute.FONT_FAMILY],
             fontItalic:  attrs[DocumentApp.Attribute.ITALIC],
             fontSize: attrs[DocumentApp.Attribute.FONT_SIZE] || 8,
           }
      
           Logger.log("Font Color is: " + docAppsAttributes.FOREGROUND_COLOR);
           
=======
          bgColor: attrs[DocumentApp.Attribute.BACKGROUND_COLOR],
          fontBold: attrs[DocumentApp.Attribute.BOLD],
          fontColor: attrs[DocumentApp.Attribute.FOREGROUND_COLOR],
          fontFamily: attrs[DocumentApp.Attribute.FONT_FAMILY],
          fontItalic: attrs[DocumentApp.Attribute.ITALIC],
          fontSize: attrs[DocumentApp.Attribute.FONT_SIZE] || 8
        };

        Logger.log("Font Color is: " + docAppsAttributes.FOREGROUND_COLOR);

>>>>>>> ed3fc90ad5c08a01b9eb2c9490ea1950dfef5f0f
        // Transfer the Document ENUM properties to the SS
        ssCellRange = ss.getRange(ssRow, j + 1);
        ssCellRange.setBackground(docAppsAttributes.bgColor);
        ssCellRange.setFontColor(docAppsAttributes.fontColor);
        ssCellRange.setFontFamily(docAppsAttributes.fontFamily);
        docAppsAttributes.fontItalic ? ssCellRange.setFontStyle("italic") : ssCellRange.setFontStyle("normal");
        ssCellRange.setFontSize(docAppsAttributes.fontSize);
        docAppsAttributes.fontBold ? ssCellRange.setFontWeight("bold") : ssCellRange.setFontWeight("normal");
<<<<<<< HEAD
      
=======
>>>>>>> ed3fc90ad5c08a01b9eb2c9490ea1950dfef5f0f
      } // End for loop(j)

      // Increment SS row value
      ssRow++; // Increment SS row number
    } // End for loop(i)
<<<<<<< HEAD
   }); // End forEach(page) array loop

=======
  }); // End forEach(page) array loop
>>>>>>> ed3fc90ad5c08a01b9eb2c9490ea1950dfef5f0f
} // End function copyDocCellAttributesToSS()
