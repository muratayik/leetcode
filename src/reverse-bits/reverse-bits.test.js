import { reverseBits } from "./reverse-bits";

describe("reverse-bits", () => {
  it("00000010100101000001111010011100 => 964176192 ", () => {
    expect(reverseBits(parseInt("00000010100101000001111010011100", 2))).toBe(
      964176192
    );
  });

  it("11111111111111111111111111111101 => 3221225471  ", () => {
    expect(reverseBits(parseInt("11111111111111111111111111111101", 2))).toBe(
      3221225471
    );
  });
});
