// https://adventofcode.com/2022/day/1

function part1(input: string): number {
  let current = 0;
  let highest = 0;

  input.split("\n").forEach(numberString => {
    const num = parseInt(numberString, 10);

    if (!isNaN(num)) {
      current += num;
    } else {
      highest = Math.max(highest, current);
      current = 0;
    }
  });

  return highest;
}

function part2(input: string): number {
  const totals = [0];

  input.split("\n").forEach(numberString => {
    const num = parseInt(numberString, 10);

    if (!isNaN(num)) {
      totals[totals.length - 1] += num;
    } else {
      totals.push(0);
    }
  });

  const sortedTotals = totals
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();

  return sortedTotals[0] + sortedTotals[1] + sortedTotals[2];
}

const input = (await Bun.file("../_input/2022/01.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(71023));
  test("part 2", () => expect(part2(input)).toBe(206289));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
