import { readLines } from "../lib/read";
import { Solver } from "./01";

const fullInput = readLines("2022/01");

describe("01", () => {
  const solver = new Solver(fullInput);

  test("part 1", () => expect(solver.part1()).toBe(71023));
  test("part 2", () => expect(solver.part2()).toBe(206289));
});
