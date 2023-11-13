export const reverseBits = (n) => {
  let result = 0;

  const binaryRepresentation = n.toString(2);

  let multiplier = 2 ** (32 - binaryRepresentation.length);

  for (const bit of binaryRepresentation.split("")) {
    result += +bit * multiplier;
    multiplier *= 2;
  }

  return result;
};
