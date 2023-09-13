export const climbStairs = (n) => {
  let small = 0;
  let big = 1;
  let total = 0;

  for (let i = 0; i < n; i++) {
    total = small + big;
    [small, big] = [big, total];
  }

  return total;
};
