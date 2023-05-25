import { removeDuplicates } from "./remove-duplicates-from-sorted-array";

describe("remove-duplicates-from-sorted-array", () => {
  it("[1,1,2] => 2, [1,2,_]", () => {
    const nums = [1, 1, 2];
    const expectedNums = [1, 2];
    expect(removeDuplicates(nums)).toBe(2);
    for (let i = 0; i < expectedNums.length; i++) {
      expect(expectedNums[i]).toBe(nums[i]);
    }
  });

  it("[0,0,1,1,1,2,2,3,3,4] => 5, [0,1,2,3,4,_,_,_,_,_]", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const expectedNums = [0, 1, 2, 3, 4];
    expect(removeDuplicates(nums)).toBe(5);
    for (let i = 0; i < expectedNums.length; i++) {
      expect(expectedNums[i]).toBe(nums[i]);
    }
  });

  it("[0,1,2,3,4,5,5,5,6,6,6,7,8,9] => 10, [0,1,2,3,4,5,6,7,8,9]", () => {
    const nums = [0, 1, 2, 3, 4, 5, 5, 5, 6, 6, 6, 7, 8, 9];
    const expectedNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(removeDuplicates(nums)).toBe(10);
    for (let i = 0; i < expectedNums.length; i++) {
      expect(expectedNums[i]).toBe(nums[i]);
    }
  });
});
