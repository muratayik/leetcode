import { fairCandySwap } from "./fair-candy-swap";

describe("fair-candy-swap", () => {
  it("aliceSizes = [1,1], bobSizes = [2,2] => [1,2]", () => {
    expect(fairCandySwap([1, 1], [2, 2])).toEqual([1, 2]);
  });
  it("aliceSizes = [1,2], bobSizes = [2,3] => [1,2]", () => {
    expect(fairCandySwap([1, 2], [2, 3])).toEqual([1, 2]);
  });
  it("aliceSizes = [2], bobSizes = [1,3] => [2,3]", () => {
    expect(fairCandySwap([2], [1, 3])).toEqual([2, 3]);
  });
});
