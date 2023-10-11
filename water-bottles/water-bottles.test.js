import { numWaterBottles } from "./water-bottles";

describe("water-bottles", () => {
  it("numBottles = 9, numExchange = 3 > 13", () => {
    expect(numWaterBottles(9, 3)).toBe(13);
  });

  it("numBottles = 15, numExchange = 4 > 19", () => {
    expect(numWaterBottles(15, 4)).toBe(19);
  });
});
