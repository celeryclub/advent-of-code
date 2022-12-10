// https://adventofcode.com/2022/day/8

export class Solver {
  private _input: string[];

  constructor(input: string[]) {
    this._input = input;
  }

  private _getHeight(i: number, j: number): number {
    return parseInt(this._input[i][j], 10);
  }

  public part1(): number {
    // All edge trees are visible
    let visibleTreeCount = this._input[0].length * 2 + (this._input.length - 2) * 2;

    const interiorVisibilityMatrix: boolean[][] = [];

    // Loop through rows
    for (let i = 1; i < this._input.length - 1; i++) {
      interiorVisibilityMatrix[i] = [];

      // Look in from the left edge
      let highestSoFar = this._getHeight(i, 0);

      for (let j = 1; j < this._input[i].length - 1; j++) {
        const current = this._getHeight(i, j);

        if (current > highestSoFar) {
          highestSoFar = current;
          interiorVisibilityMatrix[i][j] = true;
        }
      }

      // Look in from the right edge
      highestSoFar = this._getHeight(i, this._input[i].length - 1);

      for (let j = this._input[i].length - 2; j > 0; j--) {
        const current = this._getHeight(i, j);

        if (current > highestSoFar) {
          highestSoFar = current;
          interiorVisibilityMatrix[i][j] = true;
        }
      }
    }

    // Loop through columns
    for (let j = 1; j < this._input[0].length - 1; j++) {
      // Look in from the top edge
      let highestSoFar = this._getHeight(0, j);

      for (let i = 1; i < this._input.length - 1; i++) {
        const current = this._getHeight(i, j);

        if (current > highestSoFar) {
          highestSoFar = current;
          interiorVisibilityMatrix[i][j] = true;
        }
      }

      // Look in from the bottom edge
      highestSoFar = this._getHeight(this._input.length - 1, j);

      for (let i = this._input.length - 2; i > 0; i--) {
        const current = this._getHeight(i, j);

        if (current > highestSoFar) {
          highestSoFar = current;
          interiorVisibilityMatrix[i][j] = true;
        }
      }
    }

    return visibleTreeCount + interiorVisibilityMatrix.flat().length;
  }
}
