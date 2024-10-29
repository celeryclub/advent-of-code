import { readLines } from "../lib/read";
import { part1, part2 } from "./13";

const input = readLines("2022/13");

describe("13", () => {
  test("part 1", () => expect(part1(input)).toBe(5852));
  test("part 2", () => expect(part2(input)).toBe(24190));
});
