// https://adventofcode.com/2022/day/1

import { readLines } from "../lib/read";

function _getNumbers(): number {
  const numberStrings = readLines("2022/01");

  let highest = 0;
  let current = 0;

  numberStrings.forEach(numberString => {
    const c = parseInt(numberString, 10);
    if (!isNaN(c)) {
      current += c;
    } else {
      highest = Math.max(highest, current);
      current = 0;
    }
  });

  return highest;
}

function part1(): number {
  const numbers = _getNumbers();

  return numbers;
}

function part2(): number {
  const numberStrings = readLines("2022/01");

  let totals = [0];

  numberStrings.forEach(numberString => {
    const c = parseInt(numberString, 10);

    if (!isNaN(c)) {
      totals[totals.length - 1] += c;
    } else {
      totals.push(0);
    }
  });

  const bs = totals
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();

  return bs[0] + bs[1] + bs[2];
}

describe("01", () => {
  test("part 1", () => {
    expect(part1()).toBe(71023);
  });

  test("part 2", () => {
    expect(part2()).toBe(206289);
  });
});
