import { read } from "../lib/read";
import { Solver } from "./06";

const sampleInput = read("2022/06-sample");
const fullInput = read("2022/06-full");

describe("06", () => {
  describe("sample input", () => {
    const solver = new Solver(sampleInput);

    test("part 1", () => expect(solver.part1()).toBe(7));
    test("part 2", () => expect(solver.part2()).toBe(19));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(1198));
    test("part 2", () => expect(solver.part2()).toBe(3120));
  });
});
