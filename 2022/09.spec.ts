import { readLines } from "../lib/read";
import { part1, part2 } from "./09";

const exampleInput = readLines("2022/09-example");
const fullInput = readLines("2022/09-full");

describe("09", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(88));
    test("part 2", () => expect(part2(exampleInput)).toBe(36));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(5981));
    test("part 2", () => expect(part2(fullInput)).toBe(2352));
  });
});
