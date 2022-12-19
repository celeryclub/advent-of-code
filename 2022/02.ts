// https://adventofcode.com/2022/day/2

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

export class Solver {
  private _input: string[];

  constructor(input: string[]) {
    this._input = input;
  }

  private _getResult(theirPlay: Play, myPlay: Play): Result {
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

  private _getMyPlay(theirPlay: Play, result: Result): Play {
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

  private _getScore(theirPlay: Play, myPlay: Play): number {
    let score = scoreMap[myPlay];

    const result = this._getResult(theirPlay, myPlay);

    switch (result) {
      case Result.Win:
        score += 6;
        break;
      case Result.Draw:
        score += 3;
    }

    return score;
  }

  public part1(): number {
    const strategyStrings = this._input;

    const scores = strategyStrings.map(strategyString => {
      const [theirCode, myCode] = strategyString.split(" ");

      const theirPlay = playMap[theirCode];
      const myPlay = playMap[myCode];

      return this._getScore(theirPlay, myPlay);
    });

    return scores.reduce((a, b) => a + b);
  }

  public part2(): number {
    const strategyStrings = this._input;

    const scores = strategyStrings.map(strategyString => {
      const [theirCode, resultCode] = strategyString.split(" ");

      const theirPlay = playMap[theirCode];
      const result = resultMap[resultCode];
      const myPlay = this._getMyPlay(theirPlay, result);

      return this._getScore(theirPlay, myPlay);
    });

    return scores.reduce((a, b) => a + b);
  }
}
