// https://adventofcode.com/2018/day/5

import range from "lodash.range";

function reactedLength(polymer: string, ignoredChar: number = undefined): number {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(polymer);

  const reactedPolymer = [];

  for (const char of bytes) {
    if (char === ignoredChar || char + 32 === ignoredChar) {
      continue;
    }

    const lastChar = reactedPolymer.at(-1);

    if (char - 32 === lastChar || lastChar - 32 === char) {
      reactedPolymer.pop();
    } else {
      reactedPolymer.push(char);
    }
  }

  return reactedPolymer.length;
}

function part1(input: string): number {
  return reactedLength(input);
}

function part2(input: string): number {
  const reactedLengths = range(97, 122).map(char => reactedLength(input, char));

  return Math.min(...reactedLengths);
}

const input = (await Bun.file("../_input/2018/05.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(9526));
  test("part 2", () => expect(part2(input)).toBe(6694));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
