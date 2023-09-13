/**
 * @param {number[]} nums
 * @return {number}
 */
export const findShortestSubArray = (nums) => {
  const frequencyAndIndexInfo = {};
  let maxFrequency = 0;
  let minLengthOfSubArray = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    if (!frequencyAndIndexInfo[nums[i]]) {
      frequencyAndIndexInfo[nums[i]] = {
        firstIndex: i,
        lastIndex: i,
        frequency: 1,
      };
    } else {
      frequencyAndIndexInfo[nums[i]].lastIndex = i;
      frequencyAndIndexInfo[nums[i]].frequency++;
    }

    maxFrequency = Math.max(
      maxFrequency,
      frequencyAndIndexInfo[nums[i]].frequency
    );
  }

  if (maxFrequency === 1) {
    return 1;
  }

  Object.values(frequencyAndIndexInfo).forEach(
    ({ firstIndex, lastIndex, frequency }) => {
      if (frequency === maxFrequency) {
        minLengthOfSubArray = Math.min(
          minLengthOfSubArray,
          lastIndex - firstIndex + 1
        );
      }
    }
  );

  return minLengthOfSubArray;
};
