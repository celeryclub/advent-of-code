// https://adventofcode.com/2022/day/3

import chunk from "lodash.chunk";

function charPriority(char: string): number {
  const charCode = char.charCodeAt(0);

  return charCode >= 97 ? charCode - 96 : charCode - 38;
}

function part1(input: string): number {
  return input
    .split("\n")
    .map(contents => {
      const half1 = contents.substring(0, contents.length / 2);
      const half2 = contents.substring(contents.length / 2);
      const char = half1.split("").find(char => half2.includes(char));

      return charPriority(char);
    })
    .reduce((a, b) => a + b);
}

function part2(input: string): number {
  return chunk(input.split("\n"), 3)
    .map(group => {
      const char = group[0].split("").find(char => group[1].includes(char) && group[2].includes(char));

      return charPriority(char);
    })
    .reduce((a, b) => a + b);
}

const input = (await Bun.file("../_input/2022/03.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(8072));
  test("part 2", () => expect(part2(input)).toBe(2567));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
