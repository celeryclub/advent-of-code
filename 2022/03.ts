// https://adventofcode.com/2022/day/3

export class Solver {
  private _input: string[];

  constructor(input: string[]) {
    this._input = input;
  }

  private _getPriority(char: string): number {
    const charCode = char.charCodeAt(0);
    return charCode >= 97 ? charCode - 96 : charCode - 38;
  }

  public part1(): number {
    return this._input
      .map(contents => {
        const half1 = contents.substring(0, contents.length / 2);
        const half2 = contents.substring(contents.length / 2);

        let matchingChar: string;

        for (let i = 0; i < half2.length; i++) {
          const half2Char = half2[i];

          if (half1.indexOf(half2Char) !== -1) {
            matchingChar = half2Char;
            break;
          }
        }

        return this._getPriority(matchingChar);
      })
      .reduce((a, b) => a + b);
  }

  public part2(): number {
    const priorities: number[] = [];

    for (let i = 2; i < this._input.length; i += 3) {
      const contents = this._input[i];

      let matchingChar: string;

      for (let j = 0; j < contents.length; j++) {
        const thisChar = contents[j];

        if (this._input[i - 1].indexOf(thisChar) !== -1 && this._input[i - 2].indexOf(thisChar) !== -1) {
          matchingChar = thisChar;
          break;
        }
      }

      priorities.push(this._getPriority(matchingChar));
    }

    return priorities.reduce((a, b) => a + b);
  }
}
