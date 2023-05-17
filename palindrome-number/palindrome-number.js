export const isPalindrome = (x) => {
  if (x < 0) return false;

  if (x < 10) return true;

  if (x < 100) return x % 11 === 0;

  const numberAsString = x.toString();

  let indexFromStart = 0;
  let indexFromEnd = numberAsString.length - 1;

  while (indexFromStart < indexFromEnd) {
    if (numberAsString[indexFromStart] !== numberAsString[indexFromEnd]) {
      return false;
    }

    indexFromStart++;
    indexFromEnd--;
  }

  return true;
};
