const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // Validate the input
    if (
      !input ||
      typeof shift !== "number" ||
      shift < -25 ||
      shift > 25 ||
      shift === 0
    ) {
      return false;
    }

    // Perform the Caesar cipher
    let result = "";
    for (let i = 0; i < input.length; i++) {
      const currentChar = input[i];

      if (currentChar === " ") {
        // Preserve spaces
        result += " ";
      } else if (/[a-z]/i.test(currentChar)) {
        // Process alphabetic characters
        const isUpperCase = currentChar === currentChar.toUpperCase();
        const charCode = currentChar.toLowerCase().charCodeAt(0);

        let newIndex;
        if (encode) {
          // Shift to the right (Caesar cipher)
          newIndex = ((((charCode - 97 + shift) % 26) + 26) % 26) + 97;
        } else {
          // Shift to the left (decoding in the opposite direction)
          newIndex = ((((charCode - 97 - shift + 26) % 26) + 26) % 26) + 97;
        }

        const newChar = String.fromCharCode(newIndex);
        result += newChar.toLowerCase();
      } else {
        result += currentChar;
      }
    }

    return result.toLowerCase();
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
