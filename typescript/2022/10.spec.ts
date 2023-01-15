import { readLines } from "../lib/read";
import { part1, part2 } from "./10";

const exampleInput = readLines("2022/10-example");
const fullInput = readLines("2022/10-full");

describe("10", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe(13140));
    test("part 2", () =>
      expect(part2(exampleInput)).toBe(
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
    test("part 1", () => expect(part1(fullInput)).toBe(11820));
    test("part 2", () =>
      expect(part2(fullInput)).toBe(
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
