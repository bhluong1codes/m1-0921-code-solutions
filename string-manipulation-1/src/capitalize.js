/* exported capitalize */
function capitalize(word) {
  var properCase = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return properCase;
}
