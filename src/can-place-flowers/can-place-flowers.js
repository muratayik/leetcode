export const canPlaceFlowers = (flowerbed, n) => {
  if (n === 0) return true;

  let remainingFlowerCount = n;

  let foundFirstHole = flowerbed[0] === 0;
  let foundSecondHole = flowerbed[0] === 0;
  let currentIndex = flowerbed[0] === 0 ? 1 : 0;

  while (currentIndex < flowerbed.length) {
    if (flowerbed[currentIndex] == 1) {
      foundFirstHole = false;
      foundSecondHole = false;
    } else if (!foundFirstHole) {
      foundFirstHole = true;
    } else if (!foundSecondHole) {
      foundSecondHole = true;
    } else {
      remainingFlowerCount--;

      if (remainingFlowerCount === 0) {
        return true;
      }

      foundFirstHole = flowerbed[currentIndex] === 0;
      foundSecondHole = false;
    }
    currentIndex++;
  }

  if (foundFirstHole && foundSecondHole) {
    return remainingFlowerCount === 1;
  }

  return false;
};
