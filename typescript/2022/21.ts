// https://adventofcode.com/2022/day/21

import { operate } from "../lib/math";

function createMonkeys(input: string[]): Map<string, number | string[]> {
  const monkeys = new Map<string, number | string[]>();

  input.forEach(line => {
    const [_, key, value] = line.match(/(\w{4}): (.+)/)!;

    if (Number.isInteger(parseInt(value, 10))) {
      monkeys.set(key, parseInt(value, 10));
    } else {
      monkeys.set(key, value.split(" "));
    }
  });

  return monkeys;
}

function getValue(monkeys: Map<string, number | string[]>, key: string): number {
  const value = monkeys.get(key)!;

  if (Number.isInteger(value)) {
    return value as number;
  }

  const [key1, operator, key2] = value as string[];

  const value1 = getValue(monkeys, key1);
  const value2 = getValue(monkeys, key2);

  return operate(operator, value1, value2);
}

export function part1(input: string[]): number {
  const monkeys = createMonkeys(input);

  return getValue(monkeys, "root");
}
