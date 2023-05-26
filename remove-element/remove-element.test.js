import { removeElement } from "./remove-element";

describe("remove-element", () => {
  it("nums = [3,2,2,3], val = 3 => 2, nums = [2,2,_,_]", () => {
    const nums = [3, 2, 2, 3];
    expect(removeElement(nums, 3)).toBe(2);
    expect(nums).toEqual([2, 2]);
  });

  it("nums = [0,1,2,2,3,0,4,2], val = 2 => 5, nums = [0,1,3,0,4,_,_,_]", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    expect(removeElement(nums, 2)).toBe(5);
    expect(nums).toEqual([0, 1, 3, 0, 4]);
  });
});
