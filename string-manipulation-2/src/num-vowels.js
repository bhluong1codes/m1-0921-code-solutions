/* exported numVowels */
function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i].toLowerCase()) >= 0) {
      counter++;
    }
  }
  return counter;
}
