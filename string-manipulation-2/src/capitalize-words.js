/* exported capitalizeWords */
function capitalizeWords(string) {
  var splitString = string.split(' ');
  var newString = '';
  for (var i = 0; i < splitString.length; i++) {
    newString += splitString[i][0].toUpperCase() + splitString[i].slice(1).toLowerCase() + ' ';
  }
  return newString.trim();
}
