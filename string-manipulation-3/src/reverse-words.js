/* exported reverseWords */
function reverseWords(string) {
  var newArray = [];
  var newString = '';
  var stringArray = string.split(' ');
  for (var i = 0; i < stringArray.length; i++) {
    var reverseString = stringArray[i].split('').reverse('').join('');
    newArray.push(reverseString);
    newString = newArray.join(' ');
  }
  return newString;
}
