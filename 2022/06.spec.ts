import { read } from "../lib/read";
import { part1, part2 } from "./06";

const exampleInput = read("2022/06-example");
const fullInput = read("2022/06-full");

describe("06", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(7));
    test("part 2", () => expect(part2(exampleInput)).toBe(19));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(1198));
    test("part 2", () => expect(part2(fullInput)).toBe(3120));
  });
});
