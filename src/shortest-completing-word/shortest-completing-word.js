export const shortestCompletingWord = (licensePlate, words) => {
  const licensePlateMap = {};

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  licensePlate.split("").forEach((c) => {
    if (alphabet.indexOf(c.toLowerCase()) > -1) {
      if (licensePlateMap[c.toLowerCase()]) {
        licensePlateMap[c.toLowerCase()]++;
      } else {
        licensePlateMap[c.toLowerCase()] = 1;
      }
    }
  });

  const isCompletingWord = (oldMap, word) => {
    const newMap = Object.assign({}, oldMap);

    for (let c of word.split("")) {
      if (newMap[c]) {
        newMap[c]--;
        if (newMap[c] === 0) {
          delete newMap[c];
          if (Object.keys(newMap).length === 0) {
            return true;
          }
        }
      }
    }

    return false;
  };

  let minWord = "";
  let minWordLength = Number.MAX_SAFE_INTEGER;

  words.forEach((word) => {
    if (word.length < minWordLength) {
      if (isCompletingWord(licensePlateMap, word)) {
        minWord = word;
        minWordLength = word.length;
      }
    }
  });

  return minWord;
};
