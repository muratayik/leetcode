import { findMaxAverage } from "./maximum-average-subarray-i";

describe("maximum-average-subarray-i", () => {
  it("nums = [1,12,-5,-6,50,3], k = 4 => 12.75000", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });

  it("nums = [5], k = 2 => 5", () => {
    expect(findMaxAverage([5], 1)).toBe(5);
  });

  it("nums = [1,12,-5,-6,50,4], k = 3 => 16", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 4], 3)).toBe(16);
  });
});
