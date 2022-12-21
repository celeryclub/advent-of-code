import { readLines } from "../lib/read";
import { part1, part2 } from "./01";

const exampleInput = readLines("2022/01-example");
const fullInput = readLines("2022/01-full");

describe("01", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(24000));
    test("part 2", () => expect(part2(exampleInput)).toBe(45000));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(71023));
    test("part 2", () => expect(part2(fullInput)).toBe(206289));
  });
});
