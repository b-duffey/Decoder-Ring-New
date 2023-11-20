const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  it("should encode i and j to 42", () => {
    const input = "enjoying";
    const actual = polybius(input, true);
    const expected = "5133424345423322";
    expect(actual).to.eql(expected);
    console.log(actual);
  });

  it("should ignore capital letters", () => {
    const input = "BIg rEd bArn";
    const actual = polybius(input, true);
    const expected = "214222 245141 21112433";
    expect(actual).to.eql(expected);
    console.log(actual);
  });

  it("should decode 42 as i or j", () => {
    const input = "42542142135151";
    const actual = polybius(input, false);
    const expected = "jubilee";
    expect(actual).to.eql(expected);
    console.log(actual);
  });

  it("should maintain spaces when encoding", () => {
    const input = "big red barn";
    const actual = polybius(input, true);
    const expected = "214222 245141 21112433";
    expect(actual).to.eql(expected);
    console.log(actual);
  });

  it("should maintain spaces when decoding", () => {
    const input = "245141 21112433";
    const actual = polybius(input, false);
    const expected = "red barn";
    expect(actual).to.eql(expected);
    console.log(actual);
  });
});
