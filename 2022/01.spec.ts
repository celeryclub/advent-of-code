import { readLines } from "../lib/read";
import { Solver } from "./01";

const sampleInput = readLines("2022/01-sample");
const fullInput = readLines("2022/01-full");

describe("01", () => {
  describe("sample input", () => {
    const solver = new Solver(sampleInput);

    test("part 1", () => expect(solver.part1()).toBe(24000));
    test("part 2", () => expect(solver.part2()).toBe(45000));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(71023));
    test("part 2", () => expect(solver.part2()).toBe(206289));
  });
});
