// https://adventofcode.com/2022/day/10

function buildCommands(input: string): number[] {
  const commands: number[] = [];

  input.split("\n").forEach(line => {
    const addMatch = line.match(/^addx (-?\d+)/);

    if (addMatch) {
      const value = parseInt(addMatch[1]);
      commands.push(0);
      commands.push(value);
    } else {
      commands.push(0);
    }
  });

  return commands;
}

function renderPixelMatrix(pixelMatrix: boolean[][]): string {
  const crt_width = 40;
  const crt_height = 6;

  const lines: string[] = [];

  for (let i = 0; i < crt_height; i++) {
    lines[i] = "";

    for (let j = 0; j < crt_width; j++) {
      if (pixelMatrix[i]?.[j] === true) {
        lines[i] += "#";
      } else {
        lines[i] += ".";
      }
    }
  }

  return lines.join("\n");
}

export function part1(input: string): number {
  const commands = buildCommands(input);

  let cycle = 0;
  let x = 1;

  let signalStrengthSum = 0;

  commands.forEach(command => {
    cycle++;

    if ((cycle - 20) % 40 === 0) {
      signalStrengthSum += cycle * x;
    }

    x += command;
  });

  return signalStrengthSum;
}

export function part2(input: string): string {
  const commands = buildCommands(input);

  let cycle = 0;
  let x = 1;

  const pixelMatrix: boolean[][] = [];
  let i = 0;
  let j = 0;

  commands.forEach(command => {
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
  const { test, expect } = await import('bun:test');

  test("part 1", () => expect(part1(input)).toBe(11820));
  test("part 2", () => expect(part2(input)).toBe(
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
