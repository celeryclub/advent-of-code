import * as fs from "fs";
import * as path from "path";

export function read(inputPath: string): string {
  const filePath = path.join(__dirname, "../..", "input", `${inputPath}.txt`);
  return fs.readFileSync(filePath, "utf8").trimEnd();
}

export function readLines(inputPath: string): string[] {
  return read(inputPath).split(/\n/);
}
