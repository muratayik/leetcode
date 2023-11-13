import { moveZeroes } from "./move-zeroes";

describe("move-zeroes", () => {
  it("[0,1,0,3,12] => [1,3,12,0,0]", () => {
    const input = [0, 1, 0, 3, 12];
    moveZeroes(input);
    console.log(input);
    expect(input).toEqual([1, 3, 12, 0, 0]);
  });

  it("[0,0,0,1,18,5,0,6] => [1,18,5,6,0,0,0,0]", () => {
    const input = [0, 0, 0, 1, 18, 5, 0, 6];
    moveZeroes(input);
    expect(input).toEqual([1, 18, 5, 6, 0, 0, 0, 0]);
  });

  it("[0] => [0]", () => {
    const input = [0];
    moveZeroes(input);
    expect(input).toEqual([0]);
  });

  it("[1,2,3,12] => [1,2,3,12]", () => {
    const input = [1, 2, 3, 12];
    moveZeroes(input);
    console.log(input);
    expect(input).toEqual([1, 2, 3, 12]);
  });
});
