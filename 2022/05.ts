// https://adventofcode.com/2022/day/5

export class Solver {
  private _cratesInput: string[];
  private _commandsInput: string[];

  constructor(rawInput: string[]) {
    const dividerLineIndex = rawInput.findIndex(line => line === "");

    this._cratesInput = rawInput.slice(0, dividerLineIndex);
    this._commandsInput = rawInput.slice(dividerLineIndex + 1);
  }

  private _getInitialStacks(): string[][] {
    const columnLabelLine = this._cratesInput[this._cratesInput.length - 1];

    // Find column indexes
    const columnIndexes = columnLabelLine
      .split("")
      .reduce((indexes, char, i) => (isNaN(parseInt(char, 10)) ? indexes : indexes.concat(i)), []);

    const stacks: string[][] = columnIndexes.map(() => []);

    // Use column indexes to populate stacks
    for (let i = this._cratesInput.length - 2; i >= 0; i--) {
      columnIndexes.forEach((columnIndex, j) => {
        const crate = this._cratesInput[i][columnIndex];
        if (crate.match(/\w/)) {
          stacks[j].push(crate);
        }
      });
    }

    return stacks;
  }

  private _parseCommand(command: string) {
    const [_, a, b, c] = command.match(/move (\d+) from (\d+) to (\d+)/);
    return [parseInt(a, 10), parseInt(b, 10) - 1, parseInt(c, 10) - 1];
  }

  public part1(): string {
    const stacks = this._getInitialStacks();

    // Move crates around
    this._commandsInput.forEach(command => {
      const [count, fromIndex, toIndex] = this._parseCommand(command);
      const cratesToMove = stacks[fromIndex].splice(-count, count).reverse();
      stacks[toIndex].push(...cratesToMove);
    });

    return stacks.map(stack => stack[stack.length - 1]).join("");
  }

  public part2(): string {
    const stacks = this._getInitialStacks();

    // Move crates around
    this._commandsInput.forEach(command => {
      const [count, fromIndex, toIndex] = this._parseCommand(command);
      const cratesToMove = stacks[fromIndex].splice(-count, count);
      stacks[toIndex].push(...cratesToMove);
    });

    return stacks.map(stack => stack[stack.length - 1]).join("");
  }
}
