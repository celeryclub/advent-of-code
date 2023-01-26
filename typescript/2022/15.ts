// https://adventofcode.com/2022/day/15

// Ranges must be sorted before merging
function mergeRanges(ranges: [number, number][]): [number, number][] {
  if (!(ranges && ranges.length)) {
    return [];
  }

  const mergedRanges: [number, number][] = [];

  // Sort ranges according to start value
  ranges.sort(function (a, b) {
    return a[0] - b[0];
  });

  // Add first range to stack
  mergedRanges.push(ranges[0]);

  ranges.slice(1).forEach(range => {
    const highestRange = mergedRanges[mergedRanges.length - 1];

    if (highestRange[1] < range[0]) {
      // No overlap, push range onto mergedRanges
      mergedRanges.push(range);
    } else if (highestRange[1] < range[1]) {
      // Update previous range
      highestRange[1] = range[1];
    }
  });

  return mergedRanges;
}

class Sensor {
  constructor(public x: number, public y: number, public beaconX: number, public beaconY: number) {}

  public xRangeAtY(y: number): [number, number] {
    const beaconDistanceX = Math.abs(this.beaconX - this.x);
    const beaconDistanceY = Math.abs(this.beaconY - this.y);
    const beaconDistance = beaconDistanceX + beaconDistanceY;

    console.log({ x: this.x, y: this.y, beaconDistanceX, beaconDistanceY, beaconDistance });

    const verticalDistance = Math.abs(y - this.y);
    const horizontalDistance = Math.abs(beaconDistance - verticalDistance);
    // const horizontalDistance = beaconDistance - verticalDistance;

    console.log({ verticalDistance, horizontalDistance });

    // const multiplier
    // console.log({ x: this.x, horizontalDistance });

    // Should we add one since it's a zero-based index?
    const start = this.x - horizontalDistance;
    const end = this.x + horizontalDistance;
    console.log({ start, end });
    return [start, end];

    // // Sort range so that merging will work
    // return end > start ? [start, end] : [end, start];

    // return [this.x - horizontalDistance, this.x + horizontalDistance];
    // return [2, 2];
  }
}

export class Solver {
  private _input: string[];

  constructor(input: string[]) {
    this._input = input;
  }

  public part1(): number {
    // const sensors = new Map<string, Sensor>();
    const sensors: Sensor[] = [];

    this._input.forEach(line => {
      const match = line.match(/x=(-?\d+), y=(-?\d+).*x=(-?\d+), y=(-?\d+)/);
      const x = parseInt(match![1], 10);
      const y = parseInt(match![2], 10);
      const beaconX = parseInt(match![3], 10);
      const beaconY = parseInt(match![4], 10);

      const sensor = new Sensor(x, y, beaconX, beaconY);
      // console.log({ sensor });
      // sensors.set(`${x},${y}`, sensor);
      sensors.push(sensor);
    });

    const sensor = sensors[6];
    // const sensor = sensors[10];
    // // ^ BAD NEWS
    console.log(sensor?.xRangeAtY(10));

    // const ranges = sensors.map(sensor => sensor.xRangeAtY(10));
    // console.log({ ranges });
    // const mergedRanges = mergeRanges(ranges);
    // console.log({ mergedRanges });

    return 3;
  }

  // public part2(): number {
  //   this._drawRocks();

  //   // this._render();

  //   let sandCount = 0;

  //   do {
  //     sandCount++;
  //   } while (this._dropSandWithFloor());

  //   // this._render();

  //   return sandCount;
  // }
}
