import { readLines } from "../lib/read";
import { Solver } from "./10";

const exampleInput = readLines("2022/10-example");
const fullInput = readLines("2022/10-full");

describe("10", () => {
  describe("example input", () => {
    const solver = new Solver(exampleInput);

    test("part 1", () => expect(solver.part1()).toBe(13140));
    test("part 2", () =>
      expect(solver.part2()).toBe(
        `
##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....`.trim()
      ));
  });

  describe("full input", () => {
    const solver = new Solver(fullInput);

    test("part 1", () => expect(solver.part1()).toBe(11820));
    test("part 2", () =>
      expect(solver.part2()).toBe(
        `
####.###....##.###..###..#..#..##..#..#.
#....#..#....#.#..#.#..#.#.#..#..#.#..#.
###..#..#....#.###..#..#.##...#..#.####.
#....###.....#.#..#.###..#.#..####.#..#.
#....#....#..#.#..#.#.#..#.#..#..#.#..#.
####.#.....##..###..#..#.#..#.#..#.#..#.`.trim()
      ));
  });
});
