import { readLines } from "../lib/read";
import { Solver } from "./13";

const sampleInput = readLines("2022/13-sample");
const fullInput = readLines("2022/13-full");

describe("13", () => {
  describe("sample input", () => {
    const solver = new Solver(sampleInput);

    test("part 1", () => expect(solver.part1()).toBe(13));
    test("part 2", () => expect(solver.part2()).toBe(140));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(5852));
    test("part 2", () => expect(solver.part2()).toBe(24190));
  });
});
