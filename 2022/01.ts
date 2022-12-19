// https://adventofcode.com/2022/day/1

export class Solver {
  private _input: string[];

  constructor(input: string[]) {
    this._input = input;
  }

  public part1(): number {
    let current = 0;
    let highest = 0;

    this._input.forEach(numberString => {
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

  public part2(): number {
    let totals = [0];

    this._input.forEach(numberString => {
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
}
