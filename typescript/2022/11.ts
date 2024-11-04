// https://adventofcode.com/2022/day/11

class Monkey {
  public items: number[];
  public operation: (x: number) => number;
  public test: number;
  public ifTrue: number;
  public ifFalse: number;

  public inspectionCount = 0;

  constructor(items: number[], operator: string, opValue: string, test: number, ifTrue: number, ifFalse: number) {
    this.items = items;

    const parsedOpValue = parseInt(opValue, 10);

    if (operator === "*") {
      if (isNaN(parsedOpValue)) {
        this.operation = (x: number) => x * x;
      } else {
        this.operation = (x: number) => x * parsedOpValue;
      }
    } else if (operator === "+") {
      if (isNaN(parsedOpValue)) {
        this.operation = (x: number) => x + x;
      } else {
        this.operation = (x: number) => x + parsedOpValue;
      }
    }

    this.test = test;
    this.ifTrue = ifTrue;
    this.ifFalse = ifFalse;
  }

  public inspectItems(monkeys: Monkey[], throwTo: (monkey: Monkey, item: number) => void) {
    this.inspectionCount += this.items.length;

    this.items.forEach(item => {
      // Inspect item
      let itemValue = this.operation(item);
      // Post-inspection worry reduction
      itemValue = Math.floor(itemValue / 3);

      // Decide which monkey to throw the item to
      if (itemValue % this.test === 0) {
        throwTo(monkeys[this.ifTrue], itemValue);
      } else {
        throwTo(monkeys[this.ifFalse], itemValue);
      }
    });

    this.items = [];
  }
}

function createMonkeys(input: string): Monkey[] {
  const monkeys: Monkey[] = [];

  // Group lines by empty lines
  const groupedInput = input.split("\n").reduce(
    (groups, line) => {
      line === "" ? groups.push([]) : groups[groups.length - 1].push(line);
      return groups;
    },
    [[]]
  );

  groupedInput.forEach(lines => {
    const itemsMatch = lines[1].match(/(\d+),?/g);
    const items = itemsMatch.map(item => parseInt(item, 10));

    const operationMatch = lines[2].match(/(\+|\*) (.+)/);
    const [_, operator, opValue] = operationMatch;

    const testMatch = lines[3].match(/(\d+)$/);
    const test = parseInt(testMatch[1], 10);

    const ifTrueMatch = lines[4].match(/(\d+)$/);
    const ifTrue = parseInt(ifTrueMatch[1], 10);

    const ifFalseMatch = lines[5].match(/(\d+)$/);
    const ifFalse = parseInt(ifFalseMatch[1], 10);

    monkeys.push(new Monkey(items, operator, opValue, test, ifTrue, ifFalse));
  });

  return monkeys;
}

function throwTo(monkey: Monkey, item: number): void {
  monkey.items.push(item);
}

function part1(input: string): number {
  const monkeys = createMonkeys(input);

  const roundCount = 20;

  // Run game for 20 rounds
  for (let i = 0; i < roundCount; i++) {
    // During each round, give each monkey a turn
    monkeys.forEach(monkey => {
      monkey.inspectItems(monkeys, throwTo);
    });
  }

  const inspectionCounts = monkeys
    .map(monkey => monkey.inspectionCount)
    .sort((a, b) => a - b)
    .reverse();

  return inspectionCounts[0] * inspectionCounts[1];
}

const input = (await Bun.file("../_input/2022/11.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(151312));
} else {
  console.log("part 1:", part1(input));
}
