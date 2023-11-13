export const isIsomorphic = (s, t) => {
  const forwardMap = new Map();
  const reverseMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!forwardMap.has(s[i])) {
      forwardMap.set(s[i], t[i]);
    }

    if (!reverseMap.has(t[i])) {
      reverseMap.set(t[i], s[i]);
    }

    if (forwardMap.get(s[i]) !== t[i]) {
      return false;
    }

    if (reverseMap.get(t[i]) !== s[i]) {
      return false;
    }
  }

  return true;
};
