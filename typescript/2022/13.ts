// https://adventofcode.com/2022/day/13

function compareArrays(left: any[], right: any[]): number {
  for (let i = 0; i < left.length; i++) {
    // If the right array has run out of items, they're sorted incorrectly
    if (right[i] === undefined) {
      return 1;
    }

    if (Number.isInteger(left[i]) && Number.isInteger(right[i])) {
      // If the numbers are the same, keep going
      if (left[i] === right[i]) continue;

      // If the numbers are different, return a result
      return left[i] < right[i] ? -1 : 1;
    } else {
      // Mixed
      const leftArray = Array.isArray(left[i]) ? left[i] : [left[i]];
      const rightArray = Array.isArray(right[i]) ? right[i] : [right[i]];

      const result = compareArrays(leftArray, rightArray);
      if (result !== 0) {
        return result;
      }
    }
  }

  // If the left array has run out of items, they're sorted correctly
  return left.length < right.length ? -1 : 0;
}

export function part1(input: string[]): number {
  const packetGroups = input.reduce(
    (groups, line) => {
      line === "" ? groups.push([]) : groups[groups.length - 1].push(line);
      return groups;
    },
    [[]]
  );

  let sortedPairIndexSum = 0;

  packetGroups.forEach((group, index) => {
    const left = JSON.parse(group[0]);
    const right = JSON.parse(group[1]);

    const result = compareArrays(left, right);

    if (result === -1) {
      sortedPairIndexSum += index + 1;
    }
  });

  return sortedPairIndexSum;
}

export function part2(input: string[]): number {
  const divider1 = [[2]];
  const divider2 = [[6]];

  const packets = input
    .filter(line => line !== "")
    .map(line => JSON.parse(line))
    .concat([divider1, divider2]);

  packets.sort(compareArrays);

  const divider1Index = packets.findIndex(
    packet => packet.length === 1 && packet[0]?.length === 1 && packet[0]?.[0] === 2
  );
  const divider2Index = packets.findIndex(
    packet => packet.length === 1 && packet[0]?.length === 1 && packet[0]?.[0] === 6
  );

  return (divider1Index + 1) * (divider2Index + 1);
}
