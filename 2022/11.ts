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

  public inspectItems(throwTo: (i: number, item: number) => void) {
    this.inspectionCount += this.items.length;

    this.items.forEach(item => {
      // Inspect item
      let itemValue = this.operation(item);
      // Post-inspection worry reduction
      itemValue = Math.floor(itemValue / 3);

      // Decide which monkey to throw the item to
      if (itemValue % this.test === 0) {
        throwTo(this.ifTrue, itemValue);
      } else {
        throwTo(this.ifFalse, itemValue);
      }
    });

    this.items = [];
  }
}

export class Solver {
  private _input: string[][];
  private _monkeys: Monkey[];

  constructor(input: string[]) {
    this._input = [];

    // Group lines by empty lines
    this._input = input.reduce(
      (groups, line) => {
        line === "" ? groups.push([]) : groups[groups.length - 1].push(line);
        return groups;
      },
      [[]]
    );
  }

  private _createMonkeys(): void {
    this._monkeys = [];

    this._input.forEach(lines => {
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

      this._monkeys.push(new Monkey(items, operator, opValue, test, ifTrue, ifFalse));
    });
  }

  private _throwTo(i: number, item: number): void {
    this._monkeys[i].items.push(item);
  }

  public part1(): number {
    this._createMonkeys();

    const roundCount = 20;

    // Run game for 20 rounds
    for (let i = 0; i < roundCount; i++) {
      // During each round, give each monkey a turn
      this._monkeys.forEach(monkey => {
        monkey.inspectItems(this._throwTo.bind(this));
      });
    }

    const inspectionCounts = this._monkeys
      .map(monkey => monkey.inspectionCount)
      .sort((a, b) => a - b)
      .reverse();

    return inspectionCounts[0] * inspectionCounts[1];
  }
}
