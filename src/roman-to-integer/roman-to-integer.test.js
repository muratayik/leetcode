import { romanToInt } from "./roman-to-integer";

describe("roman-to-integer", () => {
  it("III => 3", () => {
    expect(romanToInt("III")).toBe(3);
  });

  it("LVIII => 58", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  it("MCMXCIV => 1994", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  it("LXX => 70", () => {
    expect(romanToInt("LXX")).toBe(70);
  });

  it("LXXIX => 79", () => {
    expect(romanToInt("LXXIX")).toBe(79);
  });

  it("DCCLXXXIX => 789", () => {
    expect(romanToInt("DCCLXXXIX")).toBe(789);
  });

  it("DCXXI => 621", () => {
    expect(romanToInt("DCXXI")).toBe(621);
  });

  it("MDCXCV => 1695", () => {
    expect(romanToInt("MDCXCV")).toBe(1695);
  });
});
