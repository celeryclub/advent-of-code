export default function range(start: number, end: number): number[] {
  return [...Array(end + 1).keys()].slice(start);
}
