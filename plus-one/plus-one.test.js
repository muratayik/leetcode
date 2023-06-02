import { plusOne } from "./plus-one";

describe("plus-one", () => {
  it("[1,2,3] => [1,2,4]", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it("[4,3,2,1] => [4,3,2,2]", () => {
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
  });

  it("[9] => [1,0]", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  it("[9,9,9] => [1,0,0,0]", () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });
});
