export const isAnagram = (s, t) => {
  const letterFrequencyMap = new Map();

  if (s.length !== t.length) return false;

  for (const c of s.split("")) {
    letterFrequencyMap.set(c, (letterFrequencyMap.get(c) ?? 0) + 1);
  }

  for (const c of t.split("")) {
    if (!letterFrequencyMap.has(c)) {
      return false;
    }

    if (letterFrequencyMap.get(c) === 1) {
      letterFrequencyMap.delete(c);
    } else {
      letterFrequencyMap.set(c, letterFrequencyMap.get(c) - 1);
    }
  }

  return true;
};
