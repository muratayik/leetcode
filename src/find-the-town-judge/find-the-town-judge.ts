export const findJudge = (n, trust) => {
  const trustArray = new Array(n + 1).fill(0);

  for (const [from, to] of trust) {
    trustArray[to]++;
    trustArray[from]--;
  }

  for (let i = 1; i <= n; i++) {
    if (trustArray[i] === n - 1) return i;
  }

  return -1;
};
