/* exported dropRight */
function dropRight(array, count) {
  var values = [];
  if (array.length > 0) {
    for (var i = 0; i < array.length - count; i++) {
      values.push(array[i]);
    }
  }
  return values;
}
