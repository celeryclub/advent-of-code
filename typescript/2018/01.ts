// https://adventofcode.com/2018/day/1

function part1(input: string): number {
  return input
    .split("\n")
    .map(num => parseInt(num, 10))
    .reduce((a, b) => a + b);
}

function part2(input: string): number {
  const numbers = input.split("\n").map(number => parseInt(number));
  const knownFrequencies = new Set();

  let frequency = 0;
  let index = 0;

  while (true) {
    frequency += numbers[index % numbers.length];

    if (knownFrequencies.has(frequency)) {
      return frequency;
    }

    knownFrequencies.add(frequency);

    index++;
  }
}

const input = (await Bun.file("../_input/2018/01.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(590));
  test("part 2", () => expect(part2(input)).toBe(83445));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
