import { readLines } from "../lib/read";
import { Solver } from "./05";

const exampleInput = readLines("2022/05-example");
const fullInput = readLines("2022/05-full");

describe("05", () => {
  describe("example input", () => {
    const solver = new Solver(exampleInput);

    test("part 1", () => expect(solver.part1()).toBe("CMZ"));
    test("part 2", () => expect(solver.part2()).toBe("MCD"));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe("FZCMJCRHZ"));
    test("part 2", () => expect(solver.part2()).toBe("JSDHQMZGF"));
  });
});
