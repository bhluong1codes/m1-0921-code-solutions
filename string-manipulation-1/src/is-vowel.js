/* exported isVowel */
function isVowel(char) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(char.toLowerCase()) >= 0) {
    return true;
  } else {
    return false;
  }
}
