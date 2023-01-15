export function renderMatrix(matrix: any[][]): void {
  const lines = [];

  for (let i = 0; i < this._input.length; i++) {
    let line = "";

    for (let j = 0; j < this._input[i].length; j++) {
      if (i === 0 || i === this._input.length - 1 || j === 0 || j === this._input[i].length - 1) {
        line += "-";
      } else {
        line += matrix[i]?.[j] === true ? 1 : 0;
      }
    }

    lines.push(line);
  }

  console.log(lines.join("\n"));
}
