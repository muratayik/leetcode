import { longestCommonPrefix } from "./longest-common-prefix";

describe("longest-common-prefix", () => {
  it('["flower","flow","flight"] => fl', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  it('["dog","racecar","car"] => ""', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  it('["car", "carpet", "caravan"] => "car"', () => {
    expect(longestCommonPrefix(["carpet", "car", "caravan"])).toBe("car");
  });
});
