function createDocPagesArray(userInput) {
  // Check for multiple pages entered
  const regex = RegExp(",");
  if (regex.test(userInput)) {
    userInput = userInput.replace(/\s/g, ""); // Remove Whitespace
    const userInputToArray = userInput.split(",");

    return userInputToArray;
  } else {
    // single page entered
    const userInputToArray = [userInput];

    return userInputToArray; // User input is now an array.
  }
}
