//https://leetcode.com/problems/roman-to-integer/

export const romanToInt = (s) => {
  const mapOfValues = new Map();
  mapOfValues.set("I", 1);
  mapOfValues.set("V", 5);
  mapOfValues.set("X", 10);
  mapOfValues.set("L", 50);
  mapOfValues.set("C", 100);
  mapOfValues.set("D", 500);
  mapOfValues.set("M", 1000);

  if (s.length === 1) {
    return mapOfValues.get(s);
  }

  let total = 0;
  let subTotal = mapOfValues.get(s[0]);
  let currentValue = 0;
  let previousValue = mapOfValues.get(s[0]);

  for (let i = 1; i < s.length; i++) {
    currentValue = mapOfValues.get(s[i]);
    if (currentValue === previousValue) {
      subTotal += currentValue;
    } else if (previousValue > currentValue) {
      total += subTotal;
      subTotal = currentValue;
    } else {
      total -= subTotal;
      subTotal = currentValue;
    }

    previousValue = currentValue;
  }

  total += subTotal;

  return total;
};
