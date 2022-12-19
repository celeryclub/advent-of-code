import { readLines } from "../lib/read";
import { Solver } from "./04";

const exampleInput = readLines("2022/04-example");
const fullInput = readLines("2022/04-full");

describe("04", () => {
  describe("example input", () => {
    const solver = new Solver(exampleInput);

    test("part 1", () => expect(solver.part1()).toBe(2));
    test("part 2", () => expect(solver.part2()).toBe(4));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(584));
    test("part 2", () => expect(solver.part2()).toBe(933));
  });
});
