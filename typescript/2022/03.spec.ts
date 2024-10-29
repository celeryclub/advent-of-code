import { readLines } from "../lib/read";
import { part1, part2 } from "./03";

const input = readLines("2022/03");

describe("03", () => {
  test("part 1", () => expect(part1(input)).toBe(8072));
  test("part 2", () => expect(part2(input)).toBe(2567));
});
