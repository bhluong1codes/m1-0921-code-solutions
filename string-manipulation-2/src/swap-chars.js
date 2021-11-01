/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var values = '';
  for (var i = 0; i < string.length; i++) {
    if (firstIndex === i) {
      values += string[secondIndex];
    } else if (secondIndex === i) {
      values += string[firstIndex];
    } else {
      values += string[i];
    }
  }
  return values;
}
