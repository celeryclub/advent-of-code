import getEachLine from './lib/getEachLine';

async function _getNumbers(): Promise<number[]> {
  const numberStrings = await getEachLine('https://adventofcode.com/2018/day/1/input');
  return numberStrings.map((number) => {
    return parseInt(number);
  });
}

async function _01() {
  const numbers = await _getNumbers();

  const total = numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);

  return total;
}

async function _02() {
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

_01().then((result) => console.log(`01: ${result}`));
_02().then((result) => console.log(`02: ${result}`));
