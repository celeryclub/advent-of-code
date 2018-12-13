import getEachLine from './lib/getEachLine';

async function _getIds(): Promise<string[]> {
  return await getEachLine('https://adventofcode.com/2018/day/2/input');
}

async function part1() {
  const ids = await _getIds();

  let doubles = 0;
  let triples = 0;

  ids.forEach((id) => {
    let previousCharacters = {};

    for (let index = 0; index < id.length; index++) {
      const character = id.charAt(index);

      if (previousCharacters[character]) {
        previousCharacters[character] = previousCharacters[character] + 1;
      }
      else {
        previousCharacters[character] = 1;
      }
    }

    const characterCountValues = Object.values(previousCharacters);

    if (characterCountValues.filter((mm) => mm === 2).length) {
      doubles++;
    }

    if (characterCountValues.filter((mm) => mm === 3).length) {
      triples++;
    }
  });

  return doubles * triples;
}

part1().then((result) => console.log(`part 1: ${result}`));
