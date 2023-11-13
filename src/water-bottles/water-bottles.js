export const numWaterBottles = (numBottles, numExchange) => {
  let drinkCount = numBottles;

  let currentNumberOfDrinks = 0;

  while (numBottles >= numExchange) {
    currentNumberOfDrinks = Math.floor(numBottles / numExchange);
    drinkCount += currentNumberOfDrinks;
    numBottles = currentNumberOfDrinks + (numBottles % numExchange);
  }

  return drinkCount;
};
