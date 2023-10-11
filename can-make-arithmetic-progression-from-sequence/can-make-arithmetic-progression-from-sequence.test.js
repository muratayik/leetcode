import { canMakeArithmeticProgression } from "./can-make-arithmetic-progression-from-sequence";

describe("can-make-arithmetic-progression-from-sequence", () => {
  it("[3,5,1] > true", () => {
    expect(canMakeArithmeticProgression([3, 5, 1])).toBeTruthy();
  });

  it("[1,2,4] > false", () => {
    expect(canMakeArithmeticProgression([1, 2, 4])).toBeFalsy();
  });

  it("[-68,-96,-12,-40,16] > true", () => {
    expect(canMakeArithmeticProgression([-68, -96, -12, -40, 16])).toBeTruthy();
  });
});
