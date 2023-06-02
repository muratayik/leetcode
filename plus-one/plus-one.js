export const plusOne = (digits) => {
  const result = [];

  let carryOver = 1;
  let newSum = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    newSum = digits[i] + carryOver;
    if (newSum < 10) {
      result.push(newSum);
      carryOver = 0;
    } else {
      result.push(0);
      carryOver = 1;
    }
  }

  if (carryOver) {
    result.push(1);
  }

  return result.reverse();
};
