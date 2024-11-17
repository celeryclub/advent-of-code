// https://adventofcode.com/2022/day/4

function parseLine(line: string): [number, number, number, number] {
  const [_, a, b, c, d] = line.match(/(\d+)-(\d+),(\d+)-(\d+)/)!;

  return [parseInt(a, 10), parseInt(b, 10), parseInt(c, 10), parseInt(d, 10)];
}

function part1(input: string): number {
  return input.split("\n").filter(line => {
    const [start1, end1, start2, end2] = parseLine(line);

    return (start1 <= start2 && end1 >= end2) || (start2 <= start1 && end2 >= end1);
  }).length;
}

function part2(input: string): number {
  return input.split("\n").filter(line => {
    const [start1, end1, start2, end2] = parseLine(line);

    return (start1 <= start2 && end1 >= start2) || (start2 <= start1 && end2 >= start1);
  }).length;
}

const input = (await Bun.file("../_input/2022/04.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(584));
  test("part 2", () => expect(part2(input)).toBe(933));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
