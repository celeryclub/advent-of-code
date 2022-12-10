import { readLines } from "../lib/read";
import { Solver } from "./08";

const sampleInput = readLines("2022/08-sample");
const fullInput = readLines("2022/08-full");

describe("08", () => {
  describe("sample input", () => {
    const solver = new Solver(sampleInput);

    test("part 1", () => expect(solver.part1()).toBe(21));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(1719));
  });
});
