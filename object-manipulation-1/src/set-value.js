/* exported setValue */
function setValue(object, key, value) {
  var newObject = object[key] = value;
  return newObject;
}
