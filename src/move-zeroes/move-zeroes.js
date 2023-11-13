export const moveZeroes = (nums) => {
  let indexOfZero = -1;
  let currentIndex = 0;

  while (currentIndex < nums.length) {
    if (nums[currentIndex] === 0 && indexOfZero < 0) {
      indexOfZero = currentIndex;
    }

    if (nums[currentIndex] !== 0 && indexOfZero >= 0) {
      nums[indexOfZero] = nums[currentIndex];
      nums[currentIndex] = 0;
      currentIndex = indexOfZero;
      indexOfZero = -1;
    }

    currentIndex++;
  }
};
