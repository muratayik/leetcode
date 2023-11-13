import { isIsomorphic } from "./isomorphic-strings";

describe("isomorphic-strings", () => {
  it('s = "egg", t = "add" => true', () => {
    expect(isIsomorphic("egg", "add")).toBe(true);
  });

  it('s = "foo", t = "bar" => false', () => {
    expect(isIsomorphic("foo", "bar")).toBe(false);
  });

  it('s = "paper", t = "title" => true', () => {
    expect(isIsomorphic("paper", "title")).toBe(true);
  });

  it('s = "bbbaaaba", t = "aaabbbba" => false', () => {
    expect(isIsomorphic("bbbaaaba", "aaabbbba")).toBe(false);
  });

  it('s = "badc", t = "baba" => false', () => {
    expect(isIsomorphic("badc", "baba")).toBe(false);
  });
});
