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

function part1(input: string): number {
  return findUniqueCharacterSet(input, 4);
}

function part2(input: string): number {
  return findUniqueCharacterSet(input, 14);
}

const input = (await Bun.file("../_input/2022/06.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(1198));
  test("part 2", () => expect(part2(input)).toBe(3120));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
