import { readLines } from "../lib/read";
import { part1, part2 } from "./13";

const exampleInput = readLines("2022/13-example");
const fullInput = readLines("2022/13-full");

describe("13", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(13));
    test("part 2", () => expect(part2(exampleInput)).toBe(140));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(5852));
    test("part 2", () => expect(part2(fullInput)).toBe(24190));
  });
});
