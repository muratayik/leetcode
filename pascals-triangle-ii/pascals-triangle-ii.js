export const getRow = (rowIndex) => {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  const generate = (row, currentIndex) => {
    const result = Array(currentIndex + 1);
    for (let i = 0; i <= currentIndex; i++) {
      if (i === 0 || i === currentIndex) {
        result[i] = 1;
      } else {
        result[i] = row[i - 1] + row[i];
      }
    }

    if (currentIndex === rowIndex) {
      return result;
    } else {
      return generate(result, currentIndex + 1);
    }
  };

  return generate([1, 1], 2);
};
