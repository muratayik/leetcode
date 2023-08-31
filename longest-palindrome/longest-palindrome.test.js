import { longestPalindrome } from "./longest-palindrome";

describe("longest-palindrome", () => {
  it("abccccdd => 7", () => {
    expect(longestPalindrome("abccccdd")).toBe(7);
  });

  it("a => 1", () => {
    expect(longestPalindrome("a")).toBe(1);
  });

  it("abccccddeerrttttyyhhgg => 21", () => {
    expect(longestPalindrome("abccccddeerrttttyyhhgg")).toBe(21);
  });
});
