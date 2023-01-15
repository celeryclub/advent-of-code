import { readLines } from "../lib/read";
import { part1, part2 } from "./05";

const exampleInput = readLines("2022/05-example");
const fullInput = readLines("2022/05-full");

describe("05", () => {
  describe("example input", () => {
    test("part 1", () => expect(part1(exampleInput)).toBe("CMZ"));
    test("part 2", () => expect(part2(exampleInput)).toBe("MCD"));
  });

  describe("full input", () => {
    test("part 1", () => expect(part1(fullInput)).toBe("FZCMJCRHZ"));
    test("part 2", () => expect(part2(fullInput)).toBe("JSDHQMZGF"));
  });
});
