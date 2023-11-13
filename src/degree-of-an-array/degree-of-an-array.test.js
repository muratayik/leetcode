import { findShortestSubArray } from "./degree-of-an-array";

describe("degree-of-an-array", () => {
  it("[1,2,2,3,1] => 2", () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1])).toBe(2);
  });

  it("[1,2,2,3,1,4,2] => 6", () => {
    expect(findShortestSubArray([1, 2, 2, 3, 1, 4, 2])).toBe(6);
  });
});
