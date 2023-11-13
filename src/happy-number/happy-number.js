export const isHappy = (n) => {
  const listOfResults = new Set();
  let currentNumber = n;

  while (true) {
    if (currentNumber === 1) return true;

    if (listOfResults.has(currentNumber)) return false;

    listOfResults.add(currentNumber);

    currentNumber = currentNumber
      .toString()
      .split("")
      .reduce((acc, curr) => acc + curr ** 2, 0);
  }
};
