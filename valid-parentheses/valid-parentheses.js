export const isValid = (s) => {
  if (s.length % 2 == 1) return false;

  const openingTagsStack = [];

  const openingAndClosingTagMatches = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const openingTags = Object.values(openingAndClosingTagMatches);

  for (let i = 0; i < s.length; i++) {
    if (openingTags.includes(s[i])) {
      openingTagsStack.push(s[i]);
    } else {
      const lastPushedOpeningTag = openingTagsStack.pop();
      if (lastPushedOpeningTag !== openingAndClosingTagMatches[s[i]]) {
        return false;
      }
    }
  }

  return openingTagsStack.length === 0;
};
