import { readLines } from "../lib/read";
import { part1, part2 } from "./05";

const input = readLines("2022/05");

describe("05", () => {
  test("part 1", () => expect(part1(input)).toBe("FZCMJCRHZ"));
  test("part 2", () => expect(part2(input)).toBe("JSDHQMZGF"));
});
