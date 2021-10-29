/* exported isUpperCased */
function isUpperCased(word) {
  var arr = word.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
