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

async function part2() {
  const ids = await _getIds();

  for (let index = 0; index < ids.length; index++) {
    for (let index2 = 0; index2 < ids.length; index2++) {
      let diffCount = 0;
      let lastDiffIndex = 0;

      for (let index3 = 0; index3 < ids[index2].length; index3++) {
        const character = ids[index2].charAt(index3);

        if (character !== ids[index].charAt(index3)) {
          lastDiffIndex = index3;
          diffCount++;
        }
      }

      if (diffCount === 1) {
        return ids[index].slice(0, lastDiffIndex) + ids[index].slice(lastDiffIndex + 1);
      }
    }
  }
}

part1().then((result) => console.log(`part 1: ${result}`));
part2().then((result) => console.log(`part 2: ${result}`))
