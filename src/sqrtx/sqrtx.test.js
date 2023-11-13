import { mySqrt } from "./sqrtx";

describe("sqrtx", () => {
  it("4 => 2", () => {
    expect(mySqrt(4)).toBe(2);
  });

  it("9 => 3", () => {
    expect(mySqrt(9)).toBe(3);
  });

  it("8 => 2", () => {
    expect(mySqrt(8)).toBe(2);
  });

  it("35 => 5", () => {
    expect(mySqrt(35)).toBe(5);
  });

  it("10050 => 100", () => {
    expect(mySqrt(10050)).toBe(100);
  });
});
