// https://adventofcode.com/2018/day/5

import { get } from './lib/get';

async function _getPolymer(): Promise<string> {
  return await get('https://adventofcode.com/2018/day/5/input');
}

function _match(char1, char2): boolean {
  return (
    char1 !== char2 &&
    char1.toLowerCase() === char2.toLowerCase()
  );
}

async function part1(): Promise<number> {
  const polymer = await _getPolymer();

  let reactionCount = 0;
  let unmatchedIndexes = [];
  let index1;
  let index2;
  let lastPassWasMatch = false;
  let run = true;

  while (run) {
    // initial pass
    if (index1 === undefined && index2 === undefined) {
      index1 = 0;
      index2 = 1;
    }
    else {
      if (lastPassWasMatch) {
        index1 = unmatchedIndexes[unmatchedIndexes.length - 1] || index2;
        index2++;
      }
      else {
        index1 = index2;
        index2++;
      }
    }

    if (index2 >= polymer.length) {
      run = false;
      break;
    }

    const char1 = polymer[index1];
    const char2 = polymer[index2];

    if (_match(char1, char2)) {
      reactionCount++;

      if (lastPassWasMatch) {
        unmatchedIndexes.pop();
      }

      lastPassWasMatch = true;
    }
    else {
      lastPassWasMatch = false;
      if (unmatchedIndexes.indexOf(index1) === -1) {
        unmatchedIndexes.push(index1);
      }
    }
  }

  return(polymer.length - reactionCount * 2);
}

part1().then((result) => console.log(`part 1: ${result}`));
