import { readLines } from "../lib/read";
import { Solver } from "./11";

const exampleInput = readLines("2022/11-example");
const fullInput = readLines("2022/11-full");

describe("11", () => {
  describe("example input", () => {
    const solver = new Solver(exampleInput);

    test("part 1", () => expect(solver.part1()).toBe(10605));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(151312));
  });
});
