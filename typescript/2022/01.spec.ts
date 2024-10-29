import { readLines } from "../lib/read";
import { part1, part2 } from "./01";

const input = readLines("2022/01");

describe("01", () => {
  test("part 1", () => expect(part1(input)).toBe(71023));
  test("part 2", () => expect(part2(input)).toBe(206289));
});
