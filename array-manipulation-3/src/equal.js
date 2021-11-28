/* exported equal */

// define a function named equal which takes two parameters, first and second
// if length of first parameter array is not equal to the length of the second parameter array. return false.
// create a for loop that loops through the first array and second array at index i
// if first array at index i doesn't not equal second array at index i then return false
// return the value true
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
}
