// https://adventofcode.com/2022/day/6

export class Solver {
  private _input: string[];

  constructor(rawInput: string) {
    this._input = rawInput.split("");
  }

  private _findUniqueCharacterSet(length: number): number {
    let recentUniqueChars = [];

    for (let i = 0; i < this._input.length; i++) {
      const char = this._input[i];
      const matchIndex = recentUniqueChars.indexOf(char);

      if (matchIndex !== -1) {
        // If this char is already in the list,
        // remove the chars up to the match and add the new char
        recentUniqueChars.splice(0, matchIndex + 1);
        recentUniqueChars.push(char);
      } else {
        // If not, just add the char to the list
        recentUniqueChars.push(char);

        if (recentUniqueChars.length === length) {
          return i + 1;
        }
      }
    }
  }

  public part1(): number {
    return this._findUniqueCharacterSet(4);
  }

  public part2(): number {
    return this._findUniqueCharacterSet(14);
  }
}
