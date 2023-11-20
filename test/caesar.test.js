const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  it("should shift to the right if given positive number", () => {
    const shift = 9;
    const input = "Big red barn";
    const actual = caesar(input, shift, true);
    const expected = "krp anm kjaw";
    expect(actual).to.eql(expected);
  });

  it("should shift to the left if given negative number", () => {
    const shift = -1;
    const input = "Big red barn";
    const actual = caesar(input, shift, true);
    const expected = "ahf qdc azqm";
    expect(actual).to.eql(expected);
  });

  it("should handle shifts that exceed the alphabet boundaries", () => {
    const shift = -2;
    const input = "Big red barn";
    const actual = caesar(input, shift, true);
    const expected = "zge pcb zypl";
    expect(actual).to.eql(expected);
  });

  it("should return false for invalid shifts", () => {
    const invalidShifts = [0, -100, "text", 123];

    invalidShifts.forEach((shift) => {
      const actual = caesar("test", shift, true);
      expect(actual).to.eql(false);
    });
  });

  it("should return false for null input", () => {
    const input = null;
    const actual = caesar(input, 2, true);
    expect(actual).to.eql(false);
  });
});
