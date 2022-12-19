import { readLines } from "../lib/read";
import { Solver } from "./09";

const exampleInput = readLines("2022/09-example");
const fullInput = readLines("2022/09-full");

describe("09", () => {
  describe("example input", () => {
    const solver = new Solver(exampleInput);

    test("part 1", () => expect(solver.part1()).toBe(88));
    test("part 2", () => expect(solver.part2()).toBe(36));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(5981));
    test("part 2", () => expect(solver.part2()).toBe(2352));
  });
});
