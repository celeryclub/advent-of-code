// https://adventofcode.com/2022/day/2

import { readLines } from "../lib/read";

enum Play {
  Rock = "Rock",
  Paper = "Paper",
  Scissors = "Scissors",
}

enum Result {
  Lose = "Lose",
  Draw = "Draw",
  Win = "Win",
}

const playMap = {
  A: Play.Rock,
  B: Play.Paper,
  C: Play.Scissors,
  X: Play.Rock,
  Y: Play.Paper,
  Z: Play.Scissors,
};

const resultMap = {
  X: Result.Lose,
  Y: Result.Draw,
  Z: Result.Win,
};

const scoreMap = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

function getResult(theirPlay: Play, myPlay: Play): Result {
  if (theirPlay === myPlay) {
    return Result.Draw;
  }

  if (
    (myPlay === Play.Rock && theirPlay === Play.Scissors) ||
    (myPlay === Play.Paper && theirPlay === Play.Rock) ||
    (myPlay === Play.Scissors && theirPlay === Play.Paper)
  ) {
    return Result.Win;
  }

  return Result.Lose;
}

function getMyPlay(theirPlay: Play, result: Result): Play {
  if (result === Result.Draw) {
    return theirPlay;
  }

  switch (result) {
    case Result.Win:
      if (theirPlay === Play.Rock) {
        return Play.Paper;
      }
      if (theirPlay === Play.Paper) {
        return Play.Scissors;
      }
      if (theirPlay === Play.Scissors) {
        return Play.Rock;
      }
    case Result.Lose:
      if (theirPlay === Play.Rock) {
        return Play.Scissors;
      }
      if (theirPlay === Play.Paper) {
        return Play.Rock;
      }
      if (theirPlay === Play.Scissors) {
        return Play.Paper;
      }
  }
}

function getScore(theirPlay: Play, myPlay: Play): number {
  let score = scoreMap[myPlay];

  const result = getResult(theirPlay, myPlay);

  switch (result) {
    case Result.Win:
      score += 6;
      break;
    case Result.Draw:
      score += 3;
  }

  return score;
}

function getStrategyStrings(): string[] {
  return readLines("2022-02");
}

function part1(): number {
  const strategyStrings = getStrategyStrings();

  const scores = strategyStrings.map(strategyString => {
    const [theirCode, myCode] = strategyString.split(" ");

    const theirPlay = playMap[theirCode];
    const myPlay = playMap[myCode];

    return getScore(theirPlay, myPlay);
  });

  return scores.reduce((a, b) => a + b);
}

function part2(): number {
  const strategyStrings = getStrategyStrings();

  const scores = strategyStrings.map(strategyString => {
    const [theirCode, resultCode] = strategyString.split(" ");

    const theirPlay = playMap[theirCode];
    const result = resultMap[resultCode];
    const myPlay = getMyPlay(theirPlay, result);

    return getScore(theirPlay, myPlay);
  });

  return scores.reduce((a, b) => a + b);
}

describe("2022/02", () => {
  test("part 1", () => {
    expect(part1()).toBe(10816);
  });

  test("part 2", () => {
    expect(part2()).toBe(11657);
  });
});
