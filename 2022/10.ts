// https://adventofcode.com/2022/day/10

export class Solver {
  private _input: string[];
  private _commands: number[];

  constructor(input: string[]) {
    this._input = input;
  }

  private _buildCommands(): void {
    this._commands = [];

    this._input.forEach(line => {
      const addMatch = line.match(/^addx (-?\d+)/);

      if (addMatch) {
        const value = parseInt(addMatch[1]);
        this._commands.push(0);
        this._commands.push(value);
      } else {
        this._commands.push(0);
      }
    });
  }

  private _renderPixelMatrix(pixelMatrix: boolean[][]): string {
    const crt_width = 40;
    const crt_height = 6;

    let lines = [];

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

  public part1(): number {
    this._buildCommands();

    let cycle = 0;
    let x = 1;

    let signalStrengthSum = 0;

    this._commands.forEach(command => {
      cycle++;

      if ((cycle - 20) % 40 === 0) {
        signalStrengthSum += cycle * x;
      }

      x += command;
    });

    return signalStrengthSum;
  }

  public part2(): string {
    this._buildCommands();

    let cycle = 0;
    let x = 1;

    let pixelMatrix: boolean[][] = [];
    let i = 0;
    let j = 0;

    this._commands.forEach(command => {
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

    return this._renderPixelMatrix(pixelMatrix);
  }
}
