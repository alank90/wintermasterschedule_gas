// Function takes Google Docs page number the user input
// and computes what the SS row to start update on.

function computeStartingSSRowNumber(pageNumber) {
  let rowNumber = 1;
  if (pageNumber == 0) {
    return rowNumber;
  } else {
    rowNumber = pageNumber * 40 + 1;
    return rowNumber;
  }
} // End computeStartingSSRowNumber() function
