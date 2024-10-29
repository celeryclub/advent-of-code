import { readLines } from "../lib/read";
import { part1, part2 } from "./02";

const input = readLines("2022/02");

describe("02", () => {
  test("part 1", () => expect(part1(input)).toBe(10816));
  test("part 2", () => expect(part2(input)).toBe(11657));
});
