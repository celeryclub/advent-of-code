// https://adventofcode.com/2022/day/2

// Input mapping: A/X -> 0, B/Y -> 1, C/Z -> 2
function parseLine(line: string, encoder: TextEncoder): [number, number] {
  const bytes = encoder.encode(line);

  return [bytes.at(0) - 65, bytes.at(-1) - 88];
}

// Outcome mapping: lose -> 0, draw -> 1, win -> 2
function getOutcome(theirs: number, ours: number): number {
  return (3 - ((2 + theirs - ours) % 3)) % 3;
}

function getOurs(theirs: number, outcome: number): number {
  switch (outcome) {
    case 0:
      return (theirs + 2) % 3;
    case 1:
      return theirs;
    case 2:
      return (theirs + 1) % 3;
  }
}

function part1(input: string): number {
  const encoder = new TextEncoder();

  return input
    .split("\n")
    .map(line => {
      const [theirs, ours] = parseLine(line, encoder);
      const outcome = getOutcome(theirs, ours);

      return outcome * 3 + ours + 1;
    })
    .reduce((a, b) => a + b);
}

function part2(input: string): number {
  const encoder = new TextEncoder();

  return input
    .split("\n")
    .map(line => {
      const [theirs, outcome] = parseLine(line, encoder);
      const ours = getOurs(theirs, outcome);

      return outcome * 3 + ours + 1;
    })
    .reduce((a, b) => a + b);
}

const input = (await Bun.file("../_input/2022/02.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import("bun:test");

  test("part 1", () => expect(part1(input)).toBe(10816));
  test("part 2", () => expect(part2(input)).toBe(11657));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
