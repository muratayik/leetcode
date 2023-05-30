export const strStr = (haystack, needle) => {
  if (needle.length > haystack.length) {
    return -1;
  }

  if (needle.length === haystack.length) {
    return needle === haystack ? 0 : -1;
  }

  const maximumLimitForLoop = haystack.length - needle.length + 1;

  for (let i = 0; i < maximumLimitForLoop; i++) {
    if (haystack[i] === needle[0]) {
      let found = true;
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return i;
      }
    }
  }

  return -1;
};
