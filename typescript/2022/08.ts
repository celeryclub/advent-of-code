// https://adventofcode.com/2022/day/8

function parseInput(input: string): number[][] {
  return input.split("\n").map(line => line.split("").map(char => parseInt(char, 10)));
}

function part1(input: string): number {
  const trees = parseInput(input);
  const interiorVisibilityMatrix: boolean[][] = [];

  // All edge trees are visible
  const edgeTreeCount = trees[0].length * 2 + (trees.length - 2) * 2;

  const checkVisibility = (highestSoFar: number, i: number, j: number) => {
    const height = trees[i][j];

    if (height > highestSoFar) {
      highestSoFar = height;
      interiorVisibilityMatrix[i][j] = true;
    }
  };

  // Look through each row for visible trees
  for (let i = 1; i < trees.length - 1; i++) {
    interiorVisibilityMatrix[i] = [];

    // Left to right
    const highestSoFarLeft = trees[i][0];
    for (let j = 1; j < trees[i].length - 1; j++) {
      checkVisibility(highestSoFarLeft, i, j);
    }

    // Right to left
    const highestSoFarRight = trees[i][trees[i].length - 1];
    for (let j = trees[i].length - 2; j > 0; j--) {
      checkVisibility(highestSoFarRight, i, j);
    }
  }

  // Look through each column for visible trees
  for (let j = 1; j < trees[0].length - 1; j++) {
    // Top to bottom
    const highestSoFarTop = trees[0][j];
    for (let i = 1; i < trees.length - 1; i++) {
      checkVisibility(highestSoFarTop, i, j);
    }

    // Bottom to top
    const highestSoFarBottom = trees[trees.length - 1][j];
    for (let i = trees.length - 2; i > 0; i--) {
      checkVisibility(highestSoFarBottom, i, j);
    }
  }

  return edgeTreeCount + interiorVisibilityMatrix.flat().length;
}

function part2(input: string): number {
  const trees = parseInput(input);
  const scenicScoreMatrix: number[][] = [];

  // Visit every tree and look left, right, up, and down
  // All edge trees have a score of 0, so we can ignore them
  for (let i = 1; i < trees.length - 1; i++) {
    scenicScoreMatrix[i] = [];

    for (let j = 1; j < trees[i].length - 1; j++) {
      const height = trees[i][j];

      // Look right
      let rightScore = 0;
      for (let localJ = j + 1; localJ < trees[i].length; localJ++) {
        rightScore++;
        if (height <= trees[i][localJ]) break;
      }

      // Look left
      let leftScore = 0;
      for (let localJ = j - 1; localJ >= 0; localJ--) {
        leftScore++;
        if (height <= trees[i][localJ]) break;
      }

      // Look down
      let downScore = 0;
      for (let localI = i + 1; localI < trees.length; localI++) {
        downScore++;
        if (height <= trees[localI][j]) break;
      }

      // Look up
      let upScore = 0;
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
