export const removeDuplicates = (nums) => {
  let numberOfUniques = 0;

  let currentIndex = 0;
  const maxNumberInArray = nums[nums.length - 1];

  while (currentIndex < nums.length) {
    if (nums[currentIndex] === maxNumberInArray) {
      numberOfUniques++;
      return numberOfUniques;
    } else if (nums[currentIndex] !== nums[currentIndex + 1]) {
      numberOfUniques++;
      currentIndex++;
    } else {
      for (let j = currentIndex + 1; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1];
      }
    }
  }

  return numberOfUniques;
};
