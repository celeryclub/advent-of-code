import { readLines } from "../lib/read";
import { part1, part2 } from "./09";

const input = readLines("2022/09");

describe("09", () => {
  test("part 1", () => expect(part1(input)).toBe(5981));
  test("part 2", () => expect(part2(input)).toBe(2352));
});
