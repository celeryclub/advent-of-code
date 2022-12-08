import { readLines } from "../lib/read";
import { Solver } from "./07";

const sampleInput = readLines("2022/07-sample");
const fullInput = readLines("2022/07-full");

describe("07", () => {
  describe("sample input", () => {
    const solver = new Solver(sampleInput);

    test("part 1", () => expect(solver.part1()).toBe(95437));
    test("part 2", () => expect(solver.part2()).toBe(24933642));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(1243729));
    test("part 2", () => expect(solver.part2()).toBe(4443914));
  });
});
