import { readLines } from "../lib/read";
import { Solver } from "./03";

const sampleInput = readLines("2022/03-sample");
const fullInput = readLines("2022/03-full");

describe("03", () => {
  describe("sample input", () => {
    const solver = new Solver(sampleInput);

    test("part 1", () => expect(solver.part1()).toBe(157));
    test("part 2", () => expect(solver.part2()).toBe(70));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(8072));
    test("part 2", () => expect(solver.part2()).toBe(2567));
  });
});
