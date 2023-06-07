export const addBinary = (a, b) => {
  let index_a = a.length - 1;
  let index_b = b.length - 1;
  let carryOver = 0;
  const arrResult = [];

  while (index_a >= 0 && index_b >= 0) {
    const temp = +a[index_a] + +b[index_b] + carryOver;
    arrResult.push(temp % 2);
    carryOver = temp > 1 ? 1 : 0;

    index_a--;
    index_b--;
  }

  if (index_a < 0) {
    while (index_b >= 0) {
      const temp = +b[index_b] + carryOver;
      arrResult.push(temp % 2);
      carryOver = temp > 1 ? 1 : 0;
      index_b--;
    }
  } else {
    while (index_a >= 0) {
      const temp = +a[index_a] + carryOver;
      arrResult.push(temp % 2);
      carryOver = temp > 1 ? 1 : 0;
      index_a--;
    }
  }

  if (carryOver) {
    arrResult.push(carryOver);
  }

  return arrResult.reverse().join("");
};
