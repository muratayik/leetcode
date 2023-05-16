// https://leetcode.com/problems/two-sum/

export const twoSum = (nums, target) => {
  const numMap = new Map();

  let numToSearch;
  for (let i = 0; i < nums.length; i++) {
    numToSearch = target - nums[i];
    if (numMap.has(nums[i])) {
      return [numMap.get(nums[i]), i];
    } else {
      numMap.set(numToSearch, i);
    }
  }

  return null;
};
