// https://adventofcode.com/2022/day/10

const CRT_WIDTH = 40;
const CRT_HEIGHT = 6;

function buildCommands(input: string): number[] {
  const commands: number[] = [];

  input.split("\n").forEach(line => {
    const addMatch = line.match(/^addx (-?\d+)/);

    commands.push(0);

    if (addMatch) {
      commands.push(parseInt(addMatch[1], 10));
    }
  });

  return commands;
}

function renderPixelMatrix(pixelMatrix: boolean[][]): string {
  let output = "";

  for (let i = 0; i < CRT_HEIGHT; i++) {
    for (let j = 0; j < CRT_WIDTH; j++) {
      if (pixelMatrix[i][j]) {
        output += "#";
      } else {
        output += ".";
      }
    }

    if (i < CRT_HEIGHT - 1) {
      output += "\n";
    }
  }

  return output;
}

function part1(input: string): number {
  let cycle = 0;
  let x = 1;
  let signalStrengthSum = 0;

  buildCommands(input).forEach(command => {
    cycle++;

    if ((cycle - 20) % 40 === 0) {
      signalStrengthSum += cycle * x;
    }

    x += command;
  });

  return signalStrengthSum;
}

function part2(input: string): string {
  let cycle = 0;
  let x = 1;
  const pixelMatrix: boolean[][] = [];

  let i = 0;
  let j = 0;

  buildCommands(input).forEach(command => {
    cycle++;

    if (Math.abs(x - j) <= 1) {
      pixelMatrix[i] ||= [];
      pixelMatrix[i][j] = true;
    }

    if (cycle % 40 === 0) {
      // Start a new row
      j = 0;
      i++;
    } else {
      // Move forward within the current row
      j++;
    }

    x += command;
  });

  return renderPixelMatrix(pixelMatrix);
}

const input = (await Bun.file("../_input/2022/10.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(11820));
  test("part 2", () =>
    expect(part2(input)).toBe(
      `####.###....##.###..###..#..#..##..#..#.
#....#..#....#.#..#.#..#.#.#..#..#.#..#.
###..#..#....#.###..#..#.##...#..#.####.
#....###.....#.#..#.###..#.#..####.#..#.
#....#....#..#.#..#.#.#..#.#..#..#.#..#.
####.#.....##..###..#..#.#..#.#..#.#..#.`
    ));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
