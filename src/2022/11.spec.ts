import { readLines } from "../lib/read";
import { Solver } from "./11";

const sampleInput = readLines("2022/11-sample");
const fullInput = readLines("2022/11-full");

describe("11", () => {
  describe("sample input", () => {
    const solver = new Solver(sampleInput);

    test("part 1", () => expect(solver.part1()).toBe(10605));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(151312));
  });
});
