import { isValid } from "./valid-parentheses";

describe("valid-parentheses", () => {
  it("() => true", () => {
    expect(isValid("()")).toBe(true);
  });

  it("()[]{} => true", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  it("(] => false", () => {
    expect(isValid("(]")).toBe(false);
  });

  it("()[]({} => false", () => {
    expect(isValid("()[]({}")).toBe(false);
  });
});
