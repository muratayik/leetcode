import { containsDuplicate } from "./contains-duplicate";

describe("contains-duplicate", () => {
  it("[1,2,3,1] > true", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
  });

  it("[1,2,3,4] > false", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
  });

  it("[1,1,1,3,3,4,3,2,4,2] > true", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
  });
});
