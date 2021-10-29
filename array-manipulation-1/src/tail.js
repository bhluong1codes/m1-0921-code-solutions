/* exported tail */
function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// define a function named "tail" which takes a single parameter "array"
// define a variable "arr" which contains an empty string literal
// create a for loop that will check each element in the "array" parameter except for the first element
// add the value of each element stored in the "array" parameter to the "arr" array
// return the arr array
