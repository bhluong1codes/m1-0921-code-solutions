/* exported isLowerCased */
/* exported isUpperCased */
function isLowerCased(word) {
  var arr = word.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
