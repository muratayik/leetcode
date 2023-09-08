import { canPlaceFlowers } from "./can-place-flowers";

describe("can-place-flowers", () => {
  it("[1,0,0,0,1], n = 1 => true", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  });

  it("[1,0,0,0,1], n = 2 => false", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });

  it("[1,0,0,0,0,1], n = 2 => false", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)).toBe(false);
  });

  it("[1,0,0,0,0,0,1], n = 2 => false", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2)).toBe(true);
  });

  it("[0,0,1,0,1], n = 1 => true", () => {
    expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBe(true);
  });

  it("[1,0,1,0,0], n = 1 => true", () => {
    expect(canPlaceFlowers([1, 0, 1, 0, 0], 1)).toBe(true);
  });

  it("[0,1,0], n = 1 => false", () => {
    expect(canPlaceFlowers([0, 1, 0], 1)).toBe(false);
  });

  it("[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1], n = 1 => false", () => {
    expect(
      canPlaceFlowers([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 1)
    ).toBe(false);
  });
});
