import { climbStairs } from "./climbing-stairs";

describe("climbing-stairs", () => {
  it("2 => 2", () => {
    expect(climbStairs(2)).toBe(2);
  });

  it("3 => 3", () => {
    expect(climbStairs(3)).toBe(3);
  });

  it("4 => 5", () => {
    expect(climbStairs(4)).toBe(5);
  });
});
