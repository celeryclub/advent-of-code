// https://adventofcode.com/2022/day/3

function getPriority(char: string): number {
  const charCode = char.charCodeAt(0);
  return charCode >= 97 ? charCode - 96 : charCode - 38;
}

export function part1(input: string[]): number {
  return input
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

export function part2(input: string[]): number {
  const priorities: number[] = [];

  for (let i = 2; i < input.length; i += 3) {
    const contents = input[i];

    let matchingChar: string;

    for (let j = 0; j < contents.length; j++) {
      const thisChar = contents[j];

      if (input[i - 1].indexOf(thisChar) !== -1 && input[i - 2].indexOf(thisChar) !== -1) {
        matchingChar = thisChar;
        break;
      }
    }

    priorities.push(getPriority(matchingChar));
  }

  return priorities.reduce((a, b) => a + b);
}
