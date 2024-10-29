import { readLines } from "../lib/read";
import { part1, part2 } from "./04";

const input = readLines("2022/04");

describe("04", () => {
  test("part 1", () => expect(part1(input)).toBe(584));
  test("part 2", () => expect(part2(input)).toBe(933));
});
