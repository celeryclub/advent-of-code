import { readLines } from "../lib/read";
import { part1, part2 } from "./02";

const exampleInput = readLines("2022/02-example");
const fullInput = readLines("2022/02-full");

describe("02", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(15));
    test("part 2", () => expect(part2(exampleInput)).toBe(12));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(10816));
    test("part 2", () => expect(part2(fullInput)).toBe(11657));
  });
});
