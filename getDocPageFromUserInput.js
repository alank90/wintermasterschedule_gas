// Function retrieves text input from user and calls the
// createDocPagesArray() function. Function then calls main function
// syncSStoDoc().
function getDocPageFromUserInput() {
  // Function analyzes User input for page to sync
  let ui = DocumentApp.getUi();

  let result = ui.prompt(
    "Sync Google Spread Sheet with Google Doc",
    "Please enter comma separated page(s) to Sync (e.g. 1,3,4) :",
    ui.ButtonSet.OK_CANCEL
  );

  // Process the user's response.
  let userInput = result.getResponseText();

  // if multiple pages input, create an array from user input so we can
  // iterate thru pages and sync Doc to SS one page at a time.
  let docPagesToSync = createDocPagesArray(userInput);

  syncSStoDoc(docPagesToSync);
}
