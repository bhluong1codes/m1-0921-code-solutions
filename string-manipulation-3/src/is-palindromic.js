/* exported isPalindromic */
// define a function named "isPalindromic" and takes 1 parameter "string";
// create a variable "newString" which will split a string with spaces into an array and join them back together with no spaces
// create a for loop for variable "newString" and will compare each character with the character at it's opposite index
// returns true if all characters match and returns false if one or more characters do not match

function isPalindromic(string) {
  var newString = string.split(' ').join('');
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] !== newString[newString.length - i - 1]) {
      return false;
    }
  }
  return true;
}
