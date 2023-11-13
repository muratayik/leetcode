import { addBinary } from "./add-binary";

describe("add-binary", () => {
  it('a = "11", b = "1" => "100"', () => {
    expect(addBinary("11", "1")).toBe("100");
  });

  it('a = "1010", b = "1011" => "10101"', () => {
    expect(addBinary("1010", "1011")).toBe("10101");
  });
});
