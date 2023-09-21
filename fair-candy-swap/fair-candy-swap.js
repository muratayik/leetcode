export const fairCandySwap = (aliceSizes, bobSizes) => {
  const aliceTotal = aliceSizes.reduce((curr, prev) => curr + prev, 0);
  const bobTotal = bobSizes.reduce((curr, prev) => curr + prev, 0);

  const differenceFromAlicePerspective = (aliceTotal - bobTotal) / 2;

  const aliceSet = new Set(aliceSizes);

  for (const bobCandy of bobSizes) {
    if (aliceSet.has(bobCandy + differenceFromAlicePerspective)) {
      return [bobCandy + differenceFromAlicePerspective, bobCandy];
    }
  }

  return [];
};
