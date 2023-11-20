// Write your tests here!
// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  it("should return false if alphabet is not equal to 26", () => {
    const alphabet = "akduvh";
    const input = "test";
    const actual = substitution(input, alphabet, true);
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should return false if there are duplicate characters in the given alphabet", () => {
    const alphabet = "aabcdefghijklmnopqrstuvwxy";
    const input = "test";
    const actual = substitution(input, alphabet, true);
    const expected = false;
    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters", () => {
    const input = "cOOkie";
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const actual = substitution(input, alphabet, true);
    const expected = "eggaot";
    expect(actual).to.eql(expected);
    console.log(actual);
  });

  it("should translate correctly based on the given input and alphabet", () => {
    const input = "baby";
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const actual = substitution(input, alphabet, true);
    const expected = "wqwn";
    expect(actual).to.eql(expected);
    console.log(actual);
  });

  it("should maintain spaces when decoding", () => {
    const input = "wqwn wgn";
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const actual = substitution(input, alphabet, false);
    const expected = "baby boy";
    expect(actual).to.eql(expected);
    console.log(actual);
  });
  it("should maintain spaces when encoding", () => {
    const input = "baby boy";
    const alphabet = "qwertyuiopasdfghjklzxcvbnm";
    const actual = substitution(input, alphabet, true);
    const expected = "wqwn wgn";
    expect(actual).to.eql(expected);
    console.log(actual);
  });
});
