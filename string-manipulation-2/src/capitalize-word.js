/* exported capitalizeWord */
// define a function with the name capitalizeWord which takes a single parameter "word";
// define a new a variable "newString" which takes extracts the first character from word and capitalizes it, then concatenates a lower case version of word excluding the first character.
// return the "newString" variable

function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (newWord === 'javascript') {
    newWord = 'JavaScript';
  } else {
    newWord = newWord[0].toUpperCase() + newWord.slice(1);
  }
  return newWord;
}
