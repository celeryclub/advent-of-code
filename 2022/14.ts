// https://adventofcode.com/2022/day/14

export class Solver {
  private _input: string[];
  private _lowestLedgeIndex = 0;
  private _filledSpace: Set<string>;

  constructor(input: string[]) {
    this._input = input;
  }

  private _drawRockLine(points: number[][]): void {
    for (let i = 0; i < points.length - 1; i++) {
      let point1 = points[i];
      let point2 = points[i + 1];

      let [x, y] = point1;
      let [x2, y2] = point2;

      let xDiff = x2 - x;
      let yDiff = y2 - y;

      do {
        this._filledSpace.add(`${x},${y}`);
        if (y > this._lowestLedgeIndex) {
          this._lowestLedgeIndex = y;
        }

        x += Math.sign(xDiff);
        y += Math.sign(yDiff);

        xDiff = x2 - x;
        yDiff = y2 - y;
      } while (xDiff !== 0 || yDiff !== 0);

      this._filledSpace.add(`${x},${y}`);
      if (y > this._lowestLedgeIndex) {
        this._lowestLedgeIndex = y;
      }
    }
  }

  private _drawRocks(): void {
    this._filledSpace = new Set<string>();

    this._input.forEach(line => {
      const points = line.split(" -> ").map(pointString => {
        const [x, y] = pointString.split(",");
        return [parseInt(x, 10), parseInt(y, 10)];
      });

      this._drawRockLine(points);
    });
  }

  private _dropSand(): boolean {
    let x = 500;
    let y = 0;

    while (true) {
      // Fell into the abyss
      if (y >= this._lowestLedgeIndex) {
        return false;
      }

      // Move straight down
      if (!this._filledSpace.has(`${x},${y + 1}`)) {
        y++;
        continue;
      }

      // Move down and to the left
      if (!this._filledSpace.has(`${x - 1},${y + 1}`)) {
        x--;
        y++;
        continue;
      }

      // Move down and to the right
      if (!this._filledSpace.has(`${x + 1},${y + 1}`)) {
        x++;
        y++;
        continue;
      }

      // At rest
      this._filledSpace.add(`${x},${y}`);
      return true;
    }
  }

  private _dropSandWithFloor(): boolean {
    let x = 500;
    let y = 0;

    while (true) {
      // Landed on the floor
      if (y > this._lowestLedgeIndex) {
        this._filledSpace.add(`${x},${y}`);
        return true;
      }

      // Move straight down
      if (!this._filledSpace.has(`${x},${y + 1}`)) {
        y++;
        continue;
      }

      // Move down and to the left
      if (!this._filledSpace.has(`${x - 1},${y + 1}`)) {
        x--;
        y++;
        continue;
      }

      // Move down and to the right
      if (!this._filledSpace.has(`${x + 1},${y + 1}`)) {
        x++;
        y++;
        continue;
      }

      // Cave is full
      if (x === 500 && y === 0) {
        return false;
      }

      // At rest
      this._filledSpace.add(`${x},${y}`);
      return true;
    }
  }

  public part1(): number {
    this._drawRocks();

    let sandCount = 0;

    while (this._dropSand()) {
      sandCount++;
    }

    return sandCount;
  }

  public part2(): number {
    this._drawRocks();

    let sandCount = 0;

    do {
      sandCount++;
    } while (this._dropSandWithFloor());

    return sandCount;
  }
}
