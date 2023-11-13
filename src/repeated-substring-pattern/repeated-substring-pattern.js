export const repeatedSubstringPattern = (s) => {
  const len = s.length;

  if (len === 1) return false;

  if (hasOnlyOneCharacter(s)) return true;

  if (isPrime(len)) return false;

  for (let divider = Math.floor(len / 2); divider > 1; divider--) {
    if (len % divider === 0) {
      if (isPatternValid(s, divider)) {
        return true;
      }
    }
  }

  return false;
};

export const isPrime = (number) => {
  if (number <= 1) return false;

  // The check for the number 2 and 3
  if (number <= 3) return true;

  if (number % 2 == 0 || number % 3 == 0) return false;

  for (var i = 5; i * i <= number; i = i + 6) {
    if (number % i == 0 || number % (i + 2) == 0) return false;
  }

  return true;
};

export const isPatternValid = (text, strLen) => {
  const subStringToCompare = text.substring(0, strLen);

  let indexToCheck = strLen;
  while (indexToCheck < text.length) {
    if (
      text.substring(indexToCheck, indexToCheck + strLen) !== subStringToCompare
    ) {
      return false;
    }
    indexToCheck += strLen;
  }

  return true;
};

export const hasOnlyOneCharacter = (s) => {
  const charToSearch = s[0];
  for (const c of s) {
    if (c !== charToSearch) {
      return false;
    }
  }

  return true;
};
