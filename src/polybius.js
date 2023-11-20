const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const alphabet = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };
    // create a grid to match number pairs to letters, used for decoding
    const grid = Object.fromEntries(
      Object.entries(alphabet).map(([letter, coords]) => [coords, letter])
    );
    //create variable to set string to lower case and removes any characters that are not letters
    const normalizeInput = (str) => str.toLowerCase(); //.replace(/[^a-z ]/g, "");

    if (encode) {
      // Encoding logic
      const normalizedInput = normalizeInput(input);
      return normalizedInput
        .split("")
        .map((char) => (char === " " ? " " : alphabet[char]))
        .join("");
    } else {
      // Decoding logic
      const inputWithoutSpaces = input.replace(/ /g, "42"); //using a regular expression pattern to search for pattern within the /, g is used as a global operator

      // Check if the number of characters (excluding spaces) is odd
      if (inputWithoutSpaces.length % 2 !== 0) {
        return false;
      }

      const chunks = inputWithoutSpaces.match(/.{1,2}/g);
      return chunks
        .map((chunk, index) => {
          if (chunk === "42" && input.match(/ /g)) {
            // If there are spaces in the original input, treat "42" as a space.
            return " ";
          } else if (chunk === "42") {
            //otherwise it is an i or j
            return index % 2 === 0 ? "j" : "i"; //modulo operator % used to calculate the even or odd position of the character, calculates remainder similar to division
          } else {
            return grid[chunk]; // Use the grid object to find the corresponding chunk value.
          }
        })
        .join(""); //join result into a single string
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
