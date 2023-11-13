// https://leetcode.com/problems/longest-common-prefix/

export const longestCommonPrefix = (strs) => {
  let longestPrefix = "";
  let indexToSearch = 0;
  let charToSearch = "";

  let minLengthOfElements = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < minLengthOfElements) {
      minLengthOfElements = strs[i].length;
    }
  }

  for (let i = 0; i < minLengthOfElements; i++) {
    charToSearch = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (
        strs[j].length < indexToSearch ||
        strs[j][indexToSearch] !== charToSearch
      ) {
        return longestPrefix;
      }
    }
    indexToSearch++;
    longestPrefix += charToSearch;
  }

  return longestPrefix;
};
