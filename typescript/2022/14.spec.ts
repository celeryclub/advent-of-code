import { readLines } from "../lib/read";
import { part1, part2 } from "./14";

const exampleInput = readLines("2022/14-example");
const fullInput = readLines("2022/14-full");

describe("14", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(24));
    test("part 2", () => expect(part2(exampleInput)).toBe(93));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(808));
    test("part 2", () => expect(part2(fullInput)).toBe(26625));
  });
});
