/* exported takeRight */
function takeRight(array, count) {
  var values = [];
  if (array.length > 0) {
    for (var i = array.length - count; i < array.length; i++) {
      values.push(array[i]);
    }
  }
  return values;
}
