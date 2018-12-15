// https://adventofcode.com/2018/day/1

import { getLines } from './lib/get';

async function _getNumbers(): Promise<number[]> {
  const numberStrings = await getLines('https://adventofcode.com/2018/day/1/input');
  return numberStrings.map((number) => parseInt(number));
}

async function part1(): Promise<number> {
  const numbers = await _getNumbers();

  const total = numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);

  return total;
}

async function part2(): Promise<number> {
  const numbers = await _getNumbers();

  let frequency = 0;
  let index = 0;
  let knownFrequencies = {};

  while (true) {
    frequency = frequency + numbers[index];

    if (knownFrequencies[frequency.toString()]) {
      return frequency;
    }

    knownFrequencies[frequency.toString()] = true;

    if (index < numbers.length - 1) {
      index++;
    }
    else {
      index = 0;
    }
  }
}

part1().then((result) => console.log(`part 1: ${result}`));
part2().then((result) => console.log(`part 2: ${result}`));
