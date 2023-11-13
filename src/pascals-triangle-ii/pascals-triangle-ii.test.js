import { getRow } from "./pascals-triangle-ii";

describe("pascals-triangle-ii", () => {
  it("0 => [1]", () => {
    expect(getRow(0)).toEqual([1]);
  });

  it("1 => [1, 1]", () => {
    expect(getRow(1)).toEqual([1, 1]);
  });

  it("2 => [1, 2, 1]", () => {
    expect(getRow(2)).toEqual([1, 2, 1]);
  });

  it("3 => [1,3,3,1]", () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
  });

  it("5 => [1, 5, 10, 10, 5, 1]", () => {
    expect(getRow(5)).toEqual([1, 5, 10, 10, 5, 1]);
  });

  it("7 => [1, 7, 21, 35, 35, 21, 7, 1]", () => {
    expect(getRow(7)).toEqual([1, 7, 21, 35, 35, 21, 7, 1]);
  });

  it("8 => [1, 8, 28, 56, 70, 56, 28, 8, 1]", () => {
    expect(getRow(8)).toEqual([1, 8, 28, 56, 70, 56, 28, 8, 1]);
  });
});
