export const findRestaurant = (list1, list2) => {
  var mapOfStrings = new Map();

  const result = [];
  let minimumSumOfIndexes = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < list1.length; i++) {
    mapOfStrings.set(list1[i], i);
  }

  for (let j = 0; j < list2.length; j++) {
    // Even i is 0, sum will be greater than minimum. No need to continue
    if (j > minimumSumOfIndexes) {
      return result;
    }

    if (!mapOfStrings.has(list2[j])) {
      // Not a common string. Continue to next item
      continue;
    }

    const sumOfIndexes = mapOfStrings.get(list2[j]) + j;
    // Sum is greater than minimum. Skip
    if (sumOfIndexes > minimumSumOfIndexes) {
      continue;
    }

    // New minimum, reset result
    if (sumOfIndexes < minimumSumOfIndexes) {
      result.length = 0;
      minimumSumOfIndexes = sumOfIndexes;
      result.push(list2[j]);
    } else {
      result.push(list2[j]);
    }
  }

  return result;
};
