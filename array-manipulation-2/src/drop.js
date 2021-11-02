/* exported drop */
// define a function named "drop" which takes two parameters "array" and "count"
// define a new variable named "values" which will contain an empty array literal
// create a for loop that will start at the array index based on the count parameter and check each element
// add in elements from "array" parameter to the "values array"
// return values array

function drop(array, count) {
  var values = [];
  if (array.length > 0) {
    for (var i = count; i < array.length; i++) {
      values.push(array[i]);
    }
  }
  return values;
}
