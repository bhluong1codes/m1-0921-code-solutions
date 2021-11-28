/* exported flatten */
// define a function called flatten which takes one parameter of "array";
// define a variable called newArr and set it equal to an empty array literal
// for loop through the array from parameter "array"
// if array at index i is an array, then loop through through array and push it to the newArr
// push all other array items from array from parameter to newArr
// return the the newArr array

function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArr.push(array[i]);
    } else {
      for (var index = 0; index < array[i].length; index++) {
        newArr.push(array[i][index]);
      }
    }
  }
  return newArr;
}
