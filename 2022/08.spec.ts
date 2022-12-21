import { readLines } from "../lib/read";
import { part1, part2 } from "./08";

const exampleInput = readLines("2022/08-example");
const fullInput = readLines("2022/08-full");

describe("08", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(21));
    test("part 2", () => expect(part2(exampleInput)).toBe(8));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(1719));
    test("part 2", () => expect(part2(fullInput)).toBe(590824));
  });
});
