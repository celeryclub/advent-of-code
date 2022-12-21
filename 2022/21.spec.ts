import { readLines } from "../lib/read";
import { part1 } from "./21";

const exampleInput = readLines("2022/21-example");
const fullInput = readLines("2022/21-full");

describe("21", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(152));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe(121868120894282));
  });
});
