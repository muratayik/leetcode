import { merge } from "./merge-sorted-array";

describe("merge-sorted-array", () => {
  it("nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 => [1,2,2,3,5,6]", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("nums1 = [1], m = 1, nums2 = [], n = 0 => [1]", () => {
    const nums1 = [1];
    const nums2 = [];
    merge(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
  });

  it("nums1 = [0], m = 0, nums2 = [1], n = 1 => [1]", () => {
    const nums1 = [0];
    const nums2 = [1];
    merge(nums1, 0, nums2, 1);
    expect(nums1).toEqual([1]);
  });

  it("nums1 = [-1,0,0,3,3,3,0,0,0], m = 6, nums2 = [1,2,2], n = 3 => [-1,0,0,1,2,2,3,3,3]", () => {
    const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
    const nums2 = [1, 2, 2];
    merge(nums1, 6, nums2, 3);
    expect(nums1).toEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
  });
});
