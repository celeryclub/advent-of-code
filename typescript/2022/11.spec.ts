import { readLines } from "../lib/read";
import { part1 } from "./11";

const exampleInput = readLines("2022/11-example");
const fullInput = readLines("2022/11-full");

describe("11", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(10605));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(151312));
  });
});
