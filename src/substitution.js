// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
    //helper function to check that the alphabet parameter is valid
    function isValidAlphabet(alphabet) {
      // Check if the alphabet has the correct length
      if (alphabet.length !== 26) {
        return false;
      }

      // Check if all characters in the alphabet are unique
      //set is a collection of unique values in JS. It is intialized with the value of the alphabet parameter
      const uniqueCharacters = new Set(alphabet);

      return uniqueCharacters.size === 26;
    }

    // Check if the alphabet is valid
    if (!isValidAlphabet(alphabet)) {
      return false;
    }

    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const normalizedInput = input.toLowerCase();
    let result = "";

    for (let i = 0; i < normalizedInput.length; i++) {
      const currentChar = normalizedInput[i];

      if (currentChar === " ") {
        // Preserve spaces
        result += " ";
      } else {
        //The indexOf method returns the index of the first occurrence of a specified value within the string.
        //If the value is not found, it returns -1.
        const index = originalAlphabet.indexOf(currentChar);
        const substitutionChar = encode
          ? alphabet[index]
          : originalAlphabet[alphabet.indexOf(currentChar)]; //This is the inverse of the encoding mapping.

        result += substitutionChar;
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
