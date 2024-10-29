import { readLines } from "../lib/read";
import { part1 } from "./21";

const input = readLines("2022/21");

describe("21", () => {
  test("part 1", () => expect(part1(input)).toBe(121868120894282));
});
