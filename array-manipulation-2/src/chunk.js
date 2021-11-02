/* exported chunk */
function chunk(array, size) {
  var values = [];
  if (array.length > 0) {
    for (var i = 0; i < array.length; i += size) {
      var chunk = array.slice(i, i + size);
      values.push(chunk);
    }
  }
  return values;
}
