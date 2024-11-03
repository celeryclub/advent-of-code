// https://adventofcode.com/2022/day/8

function parseInput(input: string): number[][] {
  return input.split("\n").map(line => line.split("").map(char => parseInt(char, 10)));
}

export function part1(input: string): number {
  const trees = parseInput(input);

  // All edge trees are visible
  const edgeTreeCount = trees[0].length * 2 + (trees.length - 2) * 2;

  const interiorVisibilityMatrix: boolean[][] = [];
  let highestSoFar: number;

  const checkIfVisible = (i: number, j: number) => {
    const height = trees[i][j];

    if (height > highestSoFar) {
      highestSoFar = height;
      interiorVisibilityMatrix[i][j] = true;
    }
  };

  // Find interior trees that are visible by looking at each line up and down or left and right
  for (let i = 1; i < trees.length - 1; i++) {
    interiorVisibilityMatrix[i] = [];

    // Left to right
    highestSoFar = trees[i][0];
    for (let j = 1; j < trees[i].length - 1; j++) {
      checkIfVisible(i, j);
    }

    // Right to left
    highestSoFar = trees[i][trees[i].length - 1];
    for (let j = trees[i].length - 2; j > 0; j--) {
      checkIfVisible(i, j);
    }
  }

  for (let j = 1; j < trees[0].length - 1; j++) {
    // Top to bottom
    highestSoFar = trees[0][j];
    for (let i = 1; i < trees.length - 1; i++) {
      checkIfVisible(i, j);
    }

    // Bottom to top
    highestSoFar = trees[trees.length - 1][j];
    for (let i = trees.length - 2; i > 0; i--) {
      checkIfVisible(i, j);
    }
  }

  return edgeTreeCount + interiorVisibilityMatrix.flat().length;
}

export function part2(input: string): number {
  const trees = parseInput(input);

  const scenicScoreMatrix: number[][] = [];

  // Loop through the matrix
  // All edge trees have a score of 0, so we can ignore them
  for (let i = 1; i < trees.length - 1; i++) {
    scenicScoreMatrix[i] = [];

    for (let j = 1; j < trees[i].length - 1; j++) {
      const height = trees[i][j];

      let rightScore = 0;
      let leftScore = 0;
      let downScore = 0;
      let upScore = 0;

      // Look right
      for (let localJ = j + 1; localJ < trees[i].length; localJ++) {
        rightScore++;
        if (height <= trees[i][localJ]) break;
      }

      // Look left
      for (let localJ = j - 1; localJ >= 0; localJ--) {
        leftScore++;
        if (height <= trees[i][localJ]) break;
      }

      // Look down
      for (let localI = i + 1; localI < trees.length; localI++) {
        downScore++;
        if (height <= trees[localI][j]) break;
      }

      // Look up
      for (let localI = i - 1; localI >= 0; localI--) {
        upScore++;
        if (height <= trees[localI][j]) break;
      }

      scenicScoreMatrix[i][j] = rightScore * leftScore * downScore * upScore;
    }
  }

  return Math.max(...scenicScoreMatrix.flat());
}

const input = (await Bun.file("../_input/2022/08.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(1719));
  test("part 2", () => expect(part2(input)).toBe(590824));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
