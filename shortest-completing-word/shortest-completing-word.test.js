import { shortestCompletingWord } from "./shortest-completing-word";

describe("shortest-completing-word", () => {
  it('licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"] => steps', () => {
    expect(
      shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
    ).toBe("steps");
  });

  it('licensePlate = "1s3 456", words = ["looks","pest","stew","show"] => pest', () => {
    expect(
      shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"])
    ).toBe("pest");
  });
});
