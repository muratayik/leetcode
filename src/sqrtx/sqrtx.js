export const mySqrt = (x) => {
  if (x === 0) return 0;
  if (x < 4) return 1;

  let delta = 3;
  let multiplier = 2;
  let sum = 1;

  while (sum <= x) {
    sum += delta;
    if (sum === x) {
      return multiplier;
    }

    if (sum > x) {
      return multiplier - 1;
    }

    delta += 2;
    multiplier++;
  }
};
