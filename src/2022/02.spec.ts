import { readLines } from "../lib/read";
import { Solver } from "./02";

const sampleInput = readLines("2022/02-sample");
const fullInput = readLines("2022/02-full");

describe("02", () => {
  describe("sample input", () => {
    const solver = new Solver(sampleInput);

    test("part 1", () => expect(solver.part1()).toBe(15));
    test("part 2", () => expect(solver.part2()).toBe(12));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(10816));
    test("part 2", () => expect(solver.part2()).toBe(11657));
  });
});
