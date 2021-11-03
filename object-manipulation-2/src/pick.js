/* exported pick */
// define a function named "pick" which takes two parameters, "source" and "keys"
// define a variable named obj and set it equal to an empty object literal
// create a for in look for check each property of "source" parameter
// check to see if that property exists in the array with and property of source object is not undefined, if so add that property value from "source" to the obj array
// return the "obj" object

function pick(source, keys) {
  var obj = {};
  for (var property in source) {
    if (keys.indexOf(property) >= 0 && typeof source[property] !== 'undefined') {
      obj[property] = source[property];
    }
  }
  return obj;
}
