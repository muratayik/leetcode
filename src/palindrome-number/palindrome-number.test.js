import { isPalindrome } from "./palindrome-number";

describe("palindrome-number", () => {
  it("return false for negative numbers", () => {
    expect(isPalindrome(-123)).toBe(false);
  });

  it("return true for one digit numbers", () => {
    expect(isPalindrome(1)).toBe(true);
  });

  it("99 => true", () => {
    expect(isPalindrome(99)).toBe(true);
  });

  it("98 => false", () => {
    expect(isPalindrome(98)).toBe(false);
  });

  it("121 => true", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it("1234554321 => true", () => {
    expect(isPalindrome(1234554321)).toBe(true);
  });

  it("12345543201 => true", () => {
    expect(isPalindrome(12345543201)).toBe(false);
  });
});
