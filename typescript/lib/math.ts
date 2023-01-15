export function operate(operator: string, x: number, y: number): number {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    default:
      return NaN;
  }
}
