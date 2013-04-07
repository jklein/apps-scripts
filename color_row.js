function colorRow(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0]; // Get the first sheet

  var dataRange = sheet.getRange("E2:E27"), // This is hardcoded range that I care about on my sheet
      dateOffset = (6*28*24*60*60*1000), // Three months
      contactedDate, limitDate, thisCell;

  dataRange.activate(); // Provides a visual indicator of which rows are being inspected

  for (var i = 1; i <= dataRange.getNumRows(); i++) {
    thisCell = dataRange.getCell(i, 1);
    thisCell.activate(); // Select each row as we go through them so you can see what is happening

    contactedDate = new Date(thisCell.getValue());

    limitDate = new Date();
    limitDate.setTime(limitDate.getTime() - dateOffset);

    if (contactedDate.getTime() < limitDate.getTime()) {
      thisCell.setBackgroundRGB(255, 0, 0); // Red
      thisCell.setFontColor("white");
    } else {
      thisCell.setBackgroundRGB(255, 255, 255); // White
      thisCell.setFontColor("black");
    }
  }
}

// This simply runs the function when the sheet opens
function onOpen() {
  colorRow();
}