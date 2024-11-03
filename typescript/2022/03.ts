// https://adventofcode.com/2022/day/3

function getPriority(char: string): number {
  const charCode = char.charCodeAt(0);
  return charCode >= 97 ? charCode - 96 : charCode - 38;
}

export function part1(input: string): number {
  return input.split("\n")
    .map(contents => {
      const half1 = contents.substring(0, contents.length / 2);
      const half2 = contents.substring(contents.length / 2);

      let matchingChar: string;

      for (let i = 0; i < half2.length; i++) {
        const half2Char = half2[i];

        if (half1.indexOf(half2Char) !== -1) {
          matchingChar = half2Char;
          break;
        }
      }

      return getPriority(matchingChar);
    })
    .reduce((a, b) => a + b);
}

export function part2(input: string): number {
  const inputSplit = input.split("\n");
  const priorities: number[] = [];

  for (let i = 2; i < inputSplit.length; i += 3) {
    const contents = inputSplit[i];

    let matchingChar: string;

    for (let j = 0; j < contents.length; j++) {
      const thisChar = contents[j];

      if (inputSplit[i - 1].indexOf(thisChar) !== -1 && inputSplit[i - 2].indexOf(thisChar) !== -1) {
        matchingChar = thisChar;
        break;
      }
    }

    priorities.push(getPriority(matchingChar));
  }

  return priorities.reduce((a, b) => a + b);
}

const input = (await Bun.file("../_input/2022/03.txt").text()).trimEnd();

if (import.meta.env.NODE_ENV === "test") {
  const { test, expect } = await import('bun:test');

  test("part 1", () => expect(part1(input)).toBe(8072));
  test("part 2", () => expect(part2(input)).toBe(2567));
} else {
  console.log("part 1:", part1(input));
  console.log("part 2:", part2(input));
}
