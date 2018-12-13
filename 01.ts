import _getEachLine from './_get';

async function _getNumbers(): Promise<number[]> {
  const numberStrings = await _getEachLine('https://adventofcode.com/2018/day/1/input');
  return numberStrings.map((number) => {
    return parseInt(number);
  });
}

async function _01() {
  const numbers = await _getNumbers();

  const total = numbers.reduce((accumulator, number) => {
    return accumulator + number;
  }, 0);

  console.log(total);
}

_01();
