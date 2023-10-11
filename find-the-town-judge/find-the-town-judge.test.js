const { findJudge } = require("./find-the-town-judge");

describe("find-the-town-judge", () => {
  it("n = 2, trust = [[1,2]]", () => {
    expect(findJudge(2, [[1, 2]])).toBe(2);
  });

  it("n = 3, trust = [[1,3],[2,3]]", () => {
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
      ])
    ).toBe(3);
  });

  it("n = 3, trust = [[1,3],[2,3],[3,1]]", () => {
    expect(
      findJudge(3, [
        [1, 3],
        [2, 3],
        [3, 1],
      ])
    ).toBe(-1);
  });
});
