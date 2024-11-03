// https://adventofcode.com/2018/day/1

function part1(input: string): number {
  const numbers = input.split("\n").map(number => parseInt(number));

  const total = numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);

  return total;
}

function part2(input: string): number {
  const numbers = input.split("\n").map(number => parseInt(number));

  let frequency = 0;
  let index = 0;
  let knownFrequencies = {};

  while (true) {
    frequency = frequency + numbers[index];

    if (knownFrequencies[frequency.toString()]) {
      return frequency;
    }

    knownFrequencies[frequency.toString()] = true;

    if (index < numbers.length - 1) {
      index++;
    } else {
      index = 0;
    }
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
