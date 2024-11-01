// https://adventofcode.com/2018/day/2

import { readLines } from "../lib/read";

function _getIds(): string[] {
  return readLines("2018/02");
}

function part1(): number {
  const ids = _getIds();

  let doubles = 0;
  let triples = 0;

  ids.forEach(id => {
    let previousCharacters = {};

    for (let index = 0; index < id.length; index++) {
      const character = id.charAt(index);

      if (previousCharacters[character]) {
        previousCharacters[character] = previousCharacters[character] + 1;
      } else {
        previousCharacters[character] = 1;
      }
    }

    const characterCountValues = Object.values(previousCharacters);

    if (characterCountValues.filter(characterCount => characterCount === 2).length) {
      doubles++;
    }

    if (characterCountValues.filter(characterCount => characterCount === 3).length) {
      triples++;
    }
  });

  return doubles * triples;
}

function part2(): string {
  const ids = _getIds();

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

describe("02", () => {
  test("part 1", () => {
    expect(part1()).toBe(7808);
  });

  test("part 2", () => {
    expect(part2()).toBe("efmyhuckqldtwjyvisipargno");
  });
});
