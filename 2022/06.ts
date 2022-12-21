// https://adventofcode.com/2022/day/6

function findUniqueCharacterSet(input: string, length: number): number {
  const recentUniqueChars: string[] = [];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const matchIndex = recentUniqueChars.indexOf(char);

    if (matchIndex !== -1) {
      // If this char is already in the list,
      // remove the chars up to the match and add the new char
      recentUniqueChars.splice(0, matchIndex + 1);
      recentUniqueChars.push(char);
    } else {
      // If not, just add the char to the list
      recentUniqueChars.push(char);

      if (recentUniqueChars.length === length) {
        return i + 1;
      }
    }
  }

  return -1;
}

export function part1(input: string): number {
  return findUniqueCharacterSet(input, 4);
}

export function part2(input: string): number {
  return findUniqueCharacterSet(input, 14);
}
