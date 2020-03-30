// Function run on Doc opening to create menu item.

// ====================================================================== //
// ================ UI Dialog JS ======================================== //
// ====================================================================== //

function onOpen() {
  DocumentApp.getUi()
    .createMenu("Sync with SS")
    .addItem("Sync Data Now", "getDocPageFromUserInput")
    .addItem("Sync Styles Now", "getDocPageFromInputForStylings")
    .addToUi();
}

// ======================= End UI Dialog JS ================================ //
