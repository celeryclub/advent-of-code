// https://adventofcode.com/2018/day/1

import { readLines } from "../lib/read";

function _getNumbers(): number[] {
  const numberStrings = readLines("01");
  return numberStrings.map(number => parseInt(number));
}

function part1(): number {
  const numbers = _getNumbers();

  const total = numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);

  return total;
}

function part2(): number {
  const numbers = _getNumbers();

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

describe("01", () => {
  test("part 1", () => {
    expect(part1()).toBe(590);
  });

  test("part 2", () => {
    expect(part2()).toBe(83445);
  });
});
