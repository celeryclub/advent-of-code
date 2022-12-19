import { readLines } from "../lib/read";
import { Solver } from "./10";

const sampleInput = readLines("2022/10-sample");
const fullInput = readLines("2022/10-full");

describe("10", () => {
  describe("sample input", () => {
    const solver = new Solver(sampleInput);

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
