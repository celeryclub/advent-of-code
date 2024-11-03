// https://adventofcode.com/2022/day/14

function createRockLine(filledSpace: Set<string>, points: number[][]): number {
  let lowestLedgeIndex = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const point1 = points[i];
    const point2 = points[i + 1];

    let [x, y] = point1;
    let [x2, y2] = point2;

    let xDiff = x2 - x;
    let yDiff = y2 - y;

    do {
      filledSpace.add(`${x},${y}`);
      if (y > lowestLedgeIndex) {
        lowestLedgeIndex = y;
      }

      x += Math.sign(xDiff);
      y += Math.sign(yDiff);

      xDiff = x2 - x;
      yDiff = y2 - y;
    } while (xDiff !== 0 || yDiff !== 0);

    filledSpace.add(`${x},${y}`);
    if (y > lowestLedgeIndex) {
      lowestLedgeIndex = y;
    }
  }

  return lowestLedgeIndex;
}

function createRocks(input: string): [Set<string>, number] {
  const filledSpace = new Set<string>();
  const lowestLedgeIndexes: number[] = [];

  input.split("\n").forEach(line => {
    const points = line.split(" -> ").map(pointString => {
      const [x, y] = pointString.split(",");
      return [parseInt(x, 10), parseInt(y, 10)];
    });

    lowestLedgeIndexes.push(createRockLine(filledSpace, points));
  });

  return [filledSpace, Math.max(...lowestLedgeIndexes)];
}

function dropSand(filledSpace: Set<string>, lowestLedgeIndex: number): boolean {
  let x = 500;
  let y = 0;

  while (true) {
    // Fell into the abyss
    if (y >= lowestLedgeIndex) {
      return false;
    }

    // Move straight down
    if (!filledSpace.has(`${x},${y + 1}`)) {
      y++;
      continue;
    }

    // Move down and to the left
    if (!filledSpace.has(`${x - 1},${y + 1}`)) {
      x--;
      y++;
      continue;
    }

    // Move down and to the right
    if (!filledSpace.has(`${x + 1},${y + 1}`)) {
      x++;
      y++;
      continue;
    }

    // At rest
    filledSpace.add(`${x},${y}`);
    return true;
  }
}

function dropSandWithFloor(filledSpace: Set<string>, lowestLedgeIndex: number): boolean {
  let x = 500;
  let y = 0;

  while (true) {
    // Landed on the floor
    if (y > lowestLedgeIndex) {
      filledSpace.add(`${x},${y}`);
      return true;
    }

    // Move straight down
    if (!filledSpace.has(`${x},${y + 1}`)) {
      y++;
      continue;
    }

    // Move down and to the left
    if (!filledSpace.has(`${x - 1},${y + 1}`)) {
      x--;
      y++;
      continue;
    }

    // Move down and to the right
    if (!filledSpace.has(`${x + 1},${y + 1}`)) {
      x++;
      y++;
      continue;
    }

    // Cave is full
    if (x === 500 && y === 0) {
      return false;
    }

    // At rest
    filledSpace.add(`${x},${y}`);
    return true;
  }
}

export function part1(input: string): number {
  const [filledSpace, lowestLedgeIndex] = createRocks(input);

  let sandCount = 0;

  while (dropSand(filledSpace, lowestLedgeIndex)) {
    sandCount++;
  }

  return sandCount;
}

export function part2(input: string): number {
  const [filledSpace, lowestLedgeIndex] = createRocks(input);

  let sandCount = 0;

  do {
    sandCount++;
  } while (dropSandWithFloor(filledSpace, lowestLedgeIndex));

  return sandCount;
}

const input = (await Bun.file("../_input/2022/14.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(808));
  test("part 2", () => expect(part2(input)).toBe(26625));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
