// Function run on Doc opening to create menu item.

// ====================================================================== //
// ================ UI Dialog JS ======================================== //
// ====================================================================== //

function onOpen() {
  DocumentApp.getUi() 
      .createMenu('Sync with SS')
      .addItem('Sync Now', 'getDocPageFromUserInput')
      .addToUi();
}


 
// ======================= End UI Dialog JS ================================ //