import { readLines } from "../lib/read";
import { part1, part2 } from "./07";

const exampleInput = readLines("2022/07-example");
const fullInput = readLines("2022/07-full");

describe("07", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(95437));
    test("part 2", () => expect(part2(exampleInput)).toBe(24933642));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(1243729));
    test("part 2", () => expect(part2(fullInput)).toBe(4443914));
  });
});
