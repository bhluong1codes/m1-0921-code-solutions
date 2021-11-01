/* exported ransomCase */
function ransomCase(string) {
  var lowerCase = string.toLowerCase();
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      newString += lowerCase[i].toUpperCase();
    } else {
      newString += lowerCase[i];
    }
  }
  return newString;
}
