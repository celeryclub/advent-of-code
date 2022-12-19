import { readLines } from "../lib/read";
import { Solver } from "./14";

const sampleInput = readLines("2022/14-sample");
const fullInput = readLines("2022/14-full");

describe("14", () => {
  describe("sample input", () => {
    const solver = new Solver(sampleInput);

    test("part 1", () => expect(solver.part1()).toBe(24));
    test("part 2", () => expect(solver.part2()).toBe(93));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(808));
    test("part 2", () => expect(solver.part2()).toBe(26625));
  });
});
