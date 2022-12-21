import { readLines } from "../lib/read";
import { part1, part2 } from "./04";

const exampleInput = readLines("2022/04-example");
const fullInput = readLines("2022/04-full");

describe("04", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(2));
    test("part 2", () => expect(part2(exampleInput)).toBe(4));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(584));
    test("part 2", () => expect(part2(fullInput)).toBe(933));
  });
});
