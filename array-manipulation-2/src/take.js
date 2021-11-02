/* exported take */
// define a function named "take" which takes two parameters "array" and "count"
// define a new variable named "values" which will contain an empty array literal
// create a for loop that will check each of the elements in "array" parameter and stops running at the max index based on "count parameter"
// add in elements from "array" parameter from the beginning up to the index based on "count parameter";
// return values array;

function take(array, count) {
  var values = [];
  if (array.length > 0) {
    for (var i = 0; i < count; i++) {
      values.push(array[i]);
    }
  }
  return values;
}
