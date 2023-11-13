export const longestPalindrome = (s) => {
  if (s.length === 1) return 1;

  const freq = {};

  s.split("").forEach((c) => (freq[c] = freq[c] ? freq[c] + 1 : 1));

  let longestPalindromeLength = 0;

  Object.entries(freq).forEach(([key, value]) => {
    longestPalindromeLength += Math.floor(value / 2) * 2;
    freq[key] = value % 2;
  });

  const oddFrequencyExists = Object.values(freq).find((v) => v === 1);

  return oddFrequencyExists
    ? longestPalindromeLength + 1
    : longestPalindromeLength;
};
