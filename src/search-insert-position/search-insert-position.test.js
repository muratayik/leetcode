import { searchInsert } from "./search-insert-position";

describe("search-insert-position", () => {
  it("[1,3,5,6], 5 => 2", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
  });

  it("[1,3,5,6], 2 => 1", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
  });

  it("[1,3,5,6], 7 => 4", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
  });

  it("[1,3,5,6], 6 => 3", () => {
    expect(searchInsert([1, 3, 5, 6], 6)).toBe(3);
  });

  it("[1,3,5,6], 0 => 0", () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toBe(0);
  });
});
