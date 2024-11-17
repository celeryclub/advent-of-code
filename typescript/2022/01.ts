// https://adventofcode.com/2022/day/1

function part1(input: string): number {
  const totals = input.split("\n\n").map(group =>
    group
      .split("\n")
      .map(line => parseInt(line, 10))
      .reduce((a, b) => a + b)
  );

  return Math.max(...totals);
}

function part2(input: string): number {
  const totals = input.split("\n\n").map(group =>
    group
      .split("\n")
      .map(line => parseInt(line, 10))
      .reduce((a, b) => a + b)
  );

  return totals
    .toSorted((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b);
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
