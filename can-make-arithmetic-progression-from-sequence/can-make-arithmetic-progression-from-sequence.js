export const canMakeArithmeticProgression = (arr) => {
  if (arr.length === 2) return true;

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  if (min === max) return true;

  const increaseAmount = (max - min) / (arr.length - 1);

  const setOfValues = new Set(arr);

  for (let i = min; i <= max; i += increaseAmount) {
    if (!setOfValues.has(i)) {
      return false;
    }
  }

  return true;
};
