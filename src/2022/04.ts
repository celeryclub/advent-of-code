// https://adventofcode.com/2022/day/4

export class Solver {
  private _rawInput: string[];

  constructor(rawInput: string[]) {
    this._rawInput = rawInput;
  }

  private _getRanges(line: string): [number, number, number, number] {
    const [_, a, b, c, d] = line.match(/(\d+)-(\d+),(\d+)-(\d+)/);
    return [parseInt(a, 10), parseInt(b, 10), parseInt(c, 10), parseInt(d, 10)];
  }

  public part1(): number {
    let containedRangeCount = 0;

    this._rawInput.forEach(line => {
      const [range1Start, range1End, range2Start, range2End] = this._getRanges(line);

      if (
        (range1Start <= range2Start && range1End >= range2End) ||
        (range2Start <= range1Start && range2End >= range1End)
      ) {
        containedRangeCount++;
      }
    });

    return containedRangeCount;
  }

  public part2(): number {
    let overlappingRangeCount = 0;

    this._rawInput.forEach(line => {
      const [range1Start, range1End, range2Start, range2End] = this._getRanges(line);

      if (
        (range1Start <= range2Start && range1End >= range2Start) ||
        (range2Start <= range1Start && range2End >= range1Start)
      ) {
        overlappingRangeCount++;
      }
    });

    return overlappingRangeCount;
  }
}
