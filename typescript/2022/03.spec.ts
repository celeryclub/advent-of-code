import { readLines } from "../lib/read";
import { part1, part2 } from "./03";

const exampleInput = readLines("2022/03-example");
const fullInput = readLines("2022/03-full");

describe("03", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(157));
    test("part 2", () => expect(part2(exampleInput)).toBe(70));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(8072));
    test("part 2", () => expect(part2(fullInput)).toBe(2567));
  });
});
