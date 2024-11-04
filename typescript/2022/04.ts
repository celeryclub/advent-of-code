// https://adventofcode.com/2022/day/4

function getRanges(line: string): [number, number, number, number] {
  const [_, a, b, c, d] = line.match(/(\d+)-(\d+),(\d+)-(\d+)/)!;
  return [parseInt(a, 10), parseInt(b, 10), parseInt(c, 10), parseInt(d, 10)];
}

function part1(input: string): number {
  let containedRangeCount = 0;

  input.split("\n").forEach(line => {
    const [range1Start, range1End, range2Start, range2End] = getRanges(line);

    if (
      (range1Start <= range2Start && range1End >= range2End) ||
      (range2Start <= range1Start && range2End >= range1End)
    ) {
      containedRangeCount++;
    }
  });

  return containedRangeCount;
}

function part2(input: string): number {
  let overlappingRangeCount = 0;

  input.split("\n").forEach(line => {
    const [range1Start, range1End, range2Start, range2End] = getRanges(line);

    if (
      (range1Start <= range2Start && range1End >= range2Start) ||
      (range2Start <= range1Start && range2End >= range1Start)
    ) {
      overlappingRangeCount++;
    }
  });

  return overlappingRangeCount;
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
