// https://adventofcode.com/2022/day/1

export class Solver {
  private _rawInput: string[];

  constructor(rawInput: string[]) {
    this._rawInput = rawInput;
  }

  private _getNumbers(): number {
    let highest = 0;
    let current = 0;

    this._rawInput.forEach(numberString => {
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

  public part1(): number {
    const numbers = this._getNumbers();

    return numbers;
  }

  public part2(): number {
    let totals = [0];

    this._rawInput.forEach(numberString => {
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
}
