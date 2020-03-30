// Function retrieves text input from user and calls the
// createDocPagesArray() function. Function then calls function
// copyDocCellAttributes(docPageNumber).
function getDocPageFromInputForStylings() {
  // Function analyzes User input for page(s) to sync stylings
  let ui = DocumentApp.getUi();

  let result = ui.prompt(
    "Sync Your Google Docs Page(s) Styles with related Google Spread Sheet",
    "Please enter comma separated page(s) to Sync Styles(e.g. 1,3,4) :",
    ui.ButtonSet.OK_CANCEL
  );

  // Process the user's response.
  let userInput = result.getResponseText();
<<<<<<< HEAD
  
  // if multiple pages input, create an array from user input so we can 
=======

  // if multiple pages input, create an array from user input so we can
>>>>>>> ed3fc90ad5c08a01b9eb2c9490ea1950dfef5f0f
  // iterate thru pages and sync Doc to SS one page at a time.
  let docPagesToSync = createDocPagesArray(userInput);

  copyDocCellAttributesToSS(docPagesToSync);
}
