// https://adventofcode.com/2022/day/5

function parseInput(input: string[]): [string[][], string[]] {
  const dividerLineIndex = input.findIndex(line => line === "");

  const cratesInput = input.slice(0, dividerLineIndex);
  const commandsInput = input.slice(dividerLineIndex + 1);

  const columnLabelLine = cratesInput[cratesInput.length - 1];

  // Find column indexes
  const columnIndexes = columnLabelLine
    .split("")
    .reduce((indexes, char, i) => (isNaN(parseInt(char, 10)) ? indexes : indexes.concat(i)), []);

  const stacks: string[][] = columnIndexes.map(() => []);

  // Use column indexes to populate stacks
  for (let i = cratesInput.length - 2; i >= 0; i--) {
    columnIndexes.forEach((columnIndex, j) => {
      const crate = cratesInput[i][columnIndex];
      if (crate.match(/\w/)) {
        stacks[j].push(crate);
      }
    });
  }

  return [stacks, commandsInput];
}

function parseCommand(command: string) {
  const [_, a, b, c] = command.match(/move (\d+) from (\d+) to (\d+)/)!;
  return [parseInt(a, 10), parseInt(b, 10) - 1, parseInt(c, 10) - 1];
}

export function part1(input: string[]): string {
  const [stacks, commands] = parseInput(input);

  // Move crates around
  commands.forEach(command => {
    const [count, fromIndex, toIndex] = parseCommand(command);
    const cratesToMove = stacks[fromIndex].splice(-count, count).reverse();
    stacks[toIndex].push(...cratesToMove);
  });

  return stacks.map(stack => stack[stack.length - 1]).join("");
}

export function part2(input: string[]): string {
  const [stacks, commands] = parseInput(input);

  // Move crates around
  commands.forEach(command => {
    const [count, fromIndex, toIndex] = parseCommand(command);
    const cratesToMove = stacks[fromIndex].splice(-count, count);
    stacks[toIndex].push(...cratesToMove);
  });

  return stacks.map(stack => stack[stack.length - 1]).join("");
}
