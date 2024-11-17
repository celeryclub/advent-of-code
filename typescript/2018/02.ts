// https://adventofcode.com/2018/day/2

function part1(input: string): number {
  let doubles = 0;
  let triples = 0;

  input.split("\n").forEach(line => {
    let charCounts = new Map();

    line.split("").forEach(char => {
      if (charCounts.has(char)) {
        charCounts.set(char, charCounts.get(char) + 1);
      } else {
        charCounts.set(char, 1);
      }
    });

    if (charCounts.values().find(charCount => charCount === 2)) {
      doubles++;
    }

    if (charCounts.values().find(charCount => charCount === 3)) {
      triples++;
    }
  });

  return doubles * triples;
}

function part2(input: string): string {
  const ids = input.split("\n");

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

const input = (await Bun.file("../_input/2018/02.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(7808));
  test("part 2", () => expect(part2(input)).toBe("efmyhuckqldtwjyvisipargno"));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
