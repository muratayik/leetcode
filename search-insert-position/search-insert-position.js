export const searchInsert = (nums, target) => {
  if (nums.length === 0) return 0;

  if (nums.length === 1) return target <= nums[0] ? 0 : 1;

  for (let i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }

  return nums.length;
};
