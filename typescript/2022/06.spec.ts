import { read } from "../lib/read";
import { part1, part2 } from "./06";

const input = read("2022/06");

describe("06", () => {
  test("part 1", () => expect(part1(input)).toBe(1198));
  test("part 2", () => expect(part2(input)).toBe(3120));
});
