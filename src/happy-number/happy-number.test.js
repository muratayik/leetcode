import { isHappy } from "./happy-number";

describe("happy-number", () => {
  it("19 => true", () => {
    expect(isHappy(19)).toBe(true);
  });

  it("2 => false", () => {
    expect(isHappy(2)).toBe(false);
  });
});
