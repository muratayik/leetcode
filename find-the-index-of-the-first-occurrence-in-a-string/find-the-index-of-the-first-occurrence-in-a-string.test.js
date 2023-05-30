import { strStr } from "./find-the-index-of-the-first-occurrence-in-a-string";

describe("find-the-index-of-the-first-occurrence-in-a-string", () => {
  it('"sadbutsad", "sad" => 0', () => {
    expect(strStr("sadbutsad", "sad")).toBe(0);
  });

  it('"leetcode", "leeto" => -1', () => {
    expect(strStr("leetcode", "leeto")).toBe(-1);
  });

  it('"word", "words" => -1', () => {
    expect(strStr("word", "words")).toBe(-1);
  });

  it('"word", "word" => 0', () => {
    expect(strStr("word", "word")).toBe(0);
  });

  it('"loremipsum", "ipsum" => 5', () => {
    expect(strStr("loremipsum", "ipsum")).toBe(5);
  });

  it('"mississippi", "issi" => 1', () => {
    expect(strStr("mississippi", "issi")).toBe(1);
  });
});
