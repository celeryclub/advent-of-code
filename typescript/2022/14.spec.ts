import { readLines } from "../lib/read";
import { part1, part2 } from "./14";

const input = readLines("2022/14");

describe("14", () => {
  test("part 1", () => expect(part1(input)).toBe(808));
  test("part 2", () => expect(part2(input)).toBe(26625));
});
