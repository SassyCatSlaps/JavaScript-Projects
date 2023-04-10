//Data attribute assignment
function displayType(charLoc) {
    var bbChar = charLoc.getAttribute("data-bb-character");
    alert(bbChar + " can be found at " + charLoc.innerHTML + ".");
}
