import { readLines } from "../lib/read";
import { part1, part2 } from "./08";

const input = readLines("2022/08");

describe("08", () => {
  test("part 1", () => expect(part1(input)).toBe(1719));
  test("part 2", () => expect(part2(input)).toBe(590824));
});
