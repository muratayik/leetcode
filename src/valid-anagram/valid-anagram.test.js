import { isAnagram } from "./valid-anagram";

describe("valid-anagram", () => {
  it('s = "anagram", t = "nagaram" => true', () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it('s = "rat", t = "car" => false', () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
});
