/* exported truncate */
// define a function called "truncate" which takes two parameters, length and string
// define a variable "newString" which will contain the string parameter after an index based on the length parameter
// return the value of "newString" variable

function truncate(length, string) {
  var newString = string.slice(0, length) + '...';
  return newString;
}
