export const findMaxAverage = (nums, k) => {
  if (k === 1) {
    return nums.sort().reverse()[0];
  }

  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  if (nums.length === k) {
    return sum / k;
  }

  let maximumTotal = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum + nums[i] - nums[i - k];
    maximumTotal = Math.max(maximumTotal, sum);
  }

  return maximumTotal / k;
};
