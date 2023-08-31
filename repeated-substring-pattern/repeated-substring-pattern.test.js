import {
  isPatternValid,
  repeatedSubstringPattern,
} from "./repeated-substring-pattern";

describe("repeated-substring-pattern", () => {
  it("abab => true", () => {
    expect(repeatedSubstringPattern("abab")).toBeTruthy();
  });

  it("bb => true", () => {
    expect(repeatedSubstringPattern("bb")).toBeTruthy();
  });

  it("aba => false", () => {
    expect(repeatedSubstringPattern("aba")).toBeFalsy();
  });

  it("babbabbabbabbab => true", () => {
    expect(repeatedSubstringPattern("babbabbabbabbab")).toBeTruthy();
  });

  it("abcabcabcabc => true", () => {
    expect(repeatedSubstringPattern("abcabcabcabc")).toBeTruthy();
  });

  it("isPatternValid 1", () => {
    expect(isPatternValid("abab", "ab")).toBeTruthy();
  });

  it("isPatternValid 2", () => {
    expect(isPatternValid("abab", 3)).toBeFalsy();
  });

  it("isPatternValid 3", () => {
    expect(isPatternValid("abcabcabcabc", 3)).toBeTruthy();
  });

  it("isPatternValid 4", () => {
    expect(isPatternValid("abcabcabcabc", 4)).toBeFalsy();
  });

  it("isPatternValid 5", () => {
    expect(isPatternValid("abcabcabcabc", 6)).toBeTruthy();
  });
});
