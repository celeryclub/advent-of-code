// https://adventofcode.com/2022/day/9

interface Knot {
  x: number;
  y: number;
}

function createRope(length: number): Knot[] {
  const rope: Knot[] = [];

  for (let i = 0; i < length; i++) {
    rope.push({ x: 0, y: 0 });
  }

  return rope;
}

function moveHead(rope: Knot[], direction: string): void {
  const head = rope[0];

  switch (direction) {
    case "U":
      head.y -= 1;
      break;
    case "R":
      head.x += 1;
      break;
    case "D":
      head.y += 1;
      break;
    case "L":
      head.x -= 1;
      break;
  }
}

function move(rope: Knot[], tailPositionSet: Set<string>, direction: string, distance: number): void {
  for (let i = 0; i < distance; i++) {
    // Move head knot one position
    moveHead(rope, direction);

    // Move each subsequent knot if needed
    for (let j = 1; j < rope.length; j++) {
      const current = rope[j];
      const previous = rope[j - 1];

      const horizontalDistance = previous.x - current.x;
      const verticalDistance = previous.y - current.y;

      if (
        Math.abs(horizontalDistance) >= 1 &&
        Math.abs(verticalDistance) >= 1 &&
        (Math.abs(horizontalDistance) > 1 || Math.abs(verticalDistance) > 1)
      ) {
        // Move diagonally
        current.x += Math.sign(horizontalDistance);
        current.y += Math.sign(verticalDistance);
      } else if (Math.abs(horizontalDistance) > 1) {
        // Move horizontally
        current.x += Math.sign(horizontalDistance);
      } else if (Math.abs(verticalDistance) > 1) {
        // Move vertially
        current.y += Math.sign(verticalDistance);
      }

      // This is the tail (the very last knot of the rope)
      if (j === rope.length - 1) {
        const { x, y } = current;
        tailPositionSet.add(`${x},${y}`);
      }
    }
  }
}

function executeMovements(rope: Knot[], input: string): Set<string> {
  const tailPositionSet = new Set<string>();

  input.split("\n").forEach(line => {
    const match = line.match(/(\w) (\d+)/)!;
    const direction = match[1];
    const distance = parseInt(match[2]);

    move(rope, tailPositionSet, direction, distance);
  });

  return tailPositionSet;
}

function part1(input: string): number {
  const rope = createRope(2);
  const tailPositionSet = executeMovements(rope, input);

  return tailPositionSet.size;
}

function part2(input: string): number {
  const rope = createRope(10);
  const tailPositionSet = executeMovements(rope, input);

  return tailPositionSet.size;
}

const input = (await Bun.file("../_input/2022/09.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(5981));
  test("part 2", () => expect(part2(input)).toBe(2352));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
