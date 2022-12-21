// https://adventofcode.com/2022/day/4

function getRanges(line: string): [number, number, number, number] {
  const [_, a, b, c, d] = line.match(/(\d+)-(\d+),(\d+)-(\d+)/)!;
  return [parseInt(a, 10), parseInt(b, 10), parseInt(c, 10), parseInt(d, 10)];
}

export function part1(input: string[]): number {
  let containedRangeCount = 0;

  input.forEach(line => {
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

export function part2(input: string[]): number {
  let overlappingRangeCount = 0;

  input.forEach(line => {
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
