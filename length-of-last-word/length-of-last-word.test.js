import { lengthOfLastWord } from "./length-of-last-word";

describe("length-of-last-word", () => {
  it("'Hello World' => 5", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });

  it("'   fly me   to   the moon  ' => 5", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });

  it("'luffy is still joyboy' => 6", () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });

  it("'    a     ' => 1", () => {
    expect(lengthOfLastWord("    a     ")).toBe(1);
  });

  it("'helloworld' => 10", () => {
    expect(lengthOfLastWord("helloworld")).toBe(10);
  });
});
