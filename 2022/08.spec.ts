import { readLines } from "../lib/read";
import { Solver } from "./08";

const exampleInput = readLines("2022/08-example");
const fullInput = readLines("2022/08-full");

describe("08", () => {
  describe("example input", () => {
    const solver = new Solver(exampleInput);

    test("part 1", () => expect(solver.part1()).toBe(21));
    test("part 2", () => expect(solver.part2()).toBe(8));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(1719));
    test("part 2", () => expect(solver.part2()).toBe(590824));
  });
});
