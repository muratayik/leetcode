export const firstUniqChar = (s) => {
  const myMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (myMap.has(s[i])) {
      myMap.set(s[i], Number.MAX_SAFE_INTEGER);
    } else {
      myMap.set(s[i], i);
    }
  }

  const minimumValue = Array.from(myMap.values()).reduce((prev, curr) => {
    return curr < prev ? curr : prev;
  }, Number.MAX_SAFE_INTEGER);

  return minimumValue === Number.MAX_SAFE_INTEGER ? -1 : minimumValue;
};
