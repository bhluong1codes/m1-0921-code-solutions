/* exported getKeys */
function getKeys(object) {
  var arr = [];
  for (var property in object) {
    arr.push(property);
  }
  return arr;
}

// define a function named getKeys which takes a single parameter "object"
// define a variable "arr" which contains an empty array literal
// create a for in loop to check each property of the object parameter
// add the value of the current property stored in object parameter to arr array
// return the arr array
