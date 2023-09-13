export const generate = (numRows) => {
  const result = [];

  result.push([1]);
  if (numRows === 1) return result;

  result.push([1, 1]);
  if (numRows === 2) return result;

  result.push([1, 2, 1]);
  if (numRows === 3) return result;

  for (let i = 3; i < numRows; i++) {
    result.push(Array(i + 1));
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        result[i][j] = 1;
      } else {
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
  }

  return result;
};
