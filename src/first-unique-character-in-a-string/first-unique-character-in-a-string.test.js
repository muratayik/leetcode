import { firstUniqChar } from "./first-unique-character-in-a-string";

describe("first-unique-character-in-a-string", () => {
  it("leetcode => 0", () => {
    expect(firstUniqChar("leetcode")).toBe(0);
  });
  it("loveleetcode => 2", () => {
    expect(firstUniqChar("loveleetcode")).toBe(2);
  });
  it("aabb => -1", () => {
    expect(firstUniqChar("aabb")).toBe(-1);
  });
});
