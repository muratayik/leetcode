import { hammingWeight } from "./number-of-1-bits";

describe("number-of-1-bits", () => {
  it("11 => 3", () => {
    expect(hammingWeight(11)).toBe(3);
  });

  it("128 => 1", () => {
    expect(hammingWeight(128)).toBe(1);
  });

  it("4294967293 => 31", () => {
    expect(hammingWeight(4294967293)).toBe(31);
  });
});
