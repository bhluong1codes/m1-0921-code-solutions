/* exported reverseWord */
function reverseWord(word) {
  var newString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}

// define a function named "reverseWord" with takes a single parameter "word"
// define a new variable "newString" and set it to an empty string
// loop through the parameter "word" in reverse and add in the value of each character to the newString variable
// return the value of "newString" variable
