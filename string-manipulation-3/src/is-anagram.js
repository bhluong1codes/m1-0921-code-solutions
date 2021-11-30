/* exported isAnagram */
// define a function named "isAnagram" which takes 2 parameters "firstString" and "secondString"
// define two variables sortedFirstString and sortedSecondSTring
// sort the firstString and secondString and assign their values to the variables sortedFirstString and sortedSecondString
// remove spaces in sortedFirstString and sortedSecondString
// compare sortedFirstString and sortedSecondString and return true if they're the same or false otherwise.
function isAnagram(firstString, secondString) {
  var sortedFirstString = firstString.split(' ').join('').split('').sort().join('');
  var sortedSecondString = secondString.split(' ').join('').split('').sort().join('');
  if (sortedFirstString === sortedSecondString) {
    return true;
  } else {
    return false;
  }
}

isAnagram('string dwa', 'second');
