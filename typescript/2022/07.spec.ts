import { readLines } from "../lib/read";
import { part1, part2 } from "./07";

const input = readLines("2022/07");

describe("07", () => {
  test("part 1", () => expect(part1(input)).toBe(1243729));
  test("part 2", () => expect(part2(input)).toBe(4443914));
});
