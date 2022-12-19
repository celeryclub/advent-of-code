// https://adventofcode.com/2022/day/9

interface Knot {
  x: number;
  y: number;
}

export class Solver {
  private _input: string[];
  private _rope: Knot[];
  private _tailPositionSet: Set<string>;

  constructor(input: string[]) {
    this._input = input;
  }

  private _createRope(length: number): void {
    this._rope = [];

    for (let i = 0; i < length; i++) {
      this._rope.push({ x: 0, y: 0 });
    }
  }

  private _moveHead(direction: string): void {
    const head = this._rope[0];

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

  private _move(direction: string, distance: number): void {
    for (let i = 0; i < distance; i++) {
      // Move head knot one position
      this._moveHead(direction);

      // Move each subsequent knot if needed
      for (let j = 1; j < this._rope.length; j++) {
        const current = this._rope[j];
        const previous = this._rope[j - 1];

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
        if (j === this._rope.length - 1) {
          const { x, y } = current;
          this._tailPositionSet.add(`${x},${y}`);
        }
      }
    }
  }

  private _executeMovements(): void {
    this._tailPositionSet = new Set<string>();

    this._input.forEach(line => {
      const match = line.match(/(\w) (\d+)/);
      const direction = match[1];
      const distance = parseInt(match[2]);

      this._move(direction, distance);
    });
  }

  public part1(): number {
    this._createRope(2);
    this._executeMovements();

    return this._tailPositionSet.size;
  }

  public part2(): number {
    this._createRope(10);
    this._executeMovements();

    return this._tailPositionSet.size;
  }
}
