import { readLines } from "../lib/read";
import { part1 } from "./11";

const input = readLines("2022/11");

describe("11", () => {
  test("part 1", () => expect(part1(input)).toBe(151312));
});
