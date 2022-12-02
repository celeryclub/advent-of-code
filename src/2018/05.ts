// https://adventofcode.com/2018/day/5

import { read } from "../lib/read";

function _getPolymer(): string {
  return read("05");
}

function _match(char1: string, char2: string): boolean {
  return char1 !== char2 && char1.toLowerCase() === char2.toLowerCase();
}

function _reactedLength(polymer: string): number {
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
    } else {
      if (lastPassWasMatch) {
        index1 = unmatchedIndexes[unmatchedIndexes.length - 1] || index2;
        index2++;
      } else {
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
    } else {
      lastPassWasMatch = false;
      if (unmatchedIndexes.indexOf(index1) === -1) {
        unmatchedIndexes.push(index1);
      }
    }
  }

  return polymer.length - reactionCount * 2;
}

function part1(): number {
  const polymer = _getPolymer();

  return _reactedLength(polymer);
}

function part2(): number {
  const polymer = _getPolymer();
  let shortestPolymerLength;

  for (let index = 65; index <= 90; index++) {
    const characterToRemove = String.fromCharCode(index);
    const shorterPolymer = polymer.replace(new RegExp(characterToRemove, "ig"), "");
    const reactedLength = _reactedLength(shorterPolymer);

    if (!shortestPolymerLength || reactedLength < shortestPolymerLength) {
      shortestPolymerLength = reactedLength;
    }
  }

  return shortestPolymerLength;
}

describe("05", () => {
  test("part 1", () => {
    expect(part1()).toBe(9526);
  });

  test("part 2", () => {
    expect(part2()).toBe(6694);
  });
});
