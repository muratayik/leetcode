export const lengthOfLastWord = (s) => {
  let isWordFound = false;
  let lengthOfLastWord = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      if (isWordFound) {
        return lengthOfLastWord;
      }
    } else {
      if (isWordFound) {
        lengthOfLastWord++;
      } else {
        isWordFound = true;
        lengthOfLastWord = 1;
      }
    }
  }

  if (isWordFound) {
    return lengthOfLastWord;
  }
};
