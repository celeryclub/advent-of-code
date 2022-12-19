// https://adventofcode.com/2022/day/8

export class Solver {
  private _input: number[][];

  constructor(rawInput: string[]) {
    this._input = rawInput.map(line => line.split("").map(char => parseInt(char, 10)));
  }

  public part1(): number {
    // All edge trees are visible
    let edgeTreeCount = this._input[0].length * 2 + (this._input.length - 2) * 2;

    const interiorVisibilityMatrix: boolean[][] = [];
    let highestSoFar: number;

    const checkIfVisible = (i: number, j: number) => {
      const height = this._input[i][j];

      if (height > highestSoFar) {
        highestSoFar = height;
        interiorVisibilityMatrix[i][j] = true;
      }
    };

    // Find interior trees that are visible by looking at each line up and down or left and right
    for (let i = 1; i < this._input.length - 1; i++) {
      interiorVisibilityMatrix[i] = [];

      // Left to right
      highestSoFar = this._input[i][0];
      for (let j = 1; j < this._input[i].length - 1; j++) {
        checkIfVisible(i, j);
      }

      // Right to left
      highestSoFar = this._input[i][this._input[i].length - 1];
      for (let j = this._input[i].length - 2; j > 0; j--) {
        checkIfVisible(i, j);
      }
    }

    for (let j = 1; j < this._input[0].length - 1; j++) {
      // Top to bottom
      highestSoFar = this._input[0][j];
      for (let i = 1; i < this._input.length - 1; i++) {
        checkIfVisible(i, j);
      }

      // Bottom to top
      highestSoFar = this._input[this._input.length - 1][j];
      for (let i = this._input.length - 2; i > 0; i--) {
        checkIfVisible(i, j);
      }
    }

    return edgeTreeCount + interiorVisibilityMatrix.flat().length;
  }

  public part2(): number {
    const scenicScoreMatrix: number[][] = [];

    // Loop through the matrix
    // All edge trees have a score of 0, so we can ignore them
    for (let i = 1; i < this._input.length - 1; i++) {
      scenicScoreMatrix[i] = [];

      for (let j = 1; j < this._input[i].length - 1; j++) {
        const height = this._input[i][j];

        let rightScore = 0;
        let leftScore = 0;
        let downScore = 0;
        let upScore = 0;

        // Look right
        for (let localJ = j + 1; localJ < this._input[i].length; localJ++) {
          rightScore++;
          if (height <= this._input[i][localJ]) break;
        }

        // Look left
        for (let localJ = j - 1; localJ >= 0; localJ--) {
          leftScore++;
          if (height <= this._input[i][localJ]) break;
        }

        // Look down
        for (let localI = i + 1; localI < this._input.length; localI++) {
          downScore++;
          if (height <= this._input[localI][j]) break;
        }

        // Look up
        for (let localI = i - 1; localI >= 0; localI--) {
          upScore++;
          if (height <= this._input[localI][j]) break;
        }

        scenicScoreMatrix[i][j] = rightScore * leftScore * downScore * upScore;
      }
    }

    return Math.max(...scenicScoreMatrix.flat());
  }
}
