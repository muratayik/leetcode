export const hammingWeight = (n) => {
  let result = 0;
  const binaryForm = n.toString(2);

  for (let i = 0; i < binaryForm.length; i++) {
    result += +binaryForm[i];
  }

  return result;
};
