/* exported getWords */
function getWords(string) {
  var arr = [];
  if (string !== '') {
    arr = string.split(' ');
  } else {
    arr = [];
  }
  return arr;
}
