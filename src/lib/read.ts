import * as fs from "fs";
import * as path from "path";

export function read(inputPath: string): string {
  const filePath = path.join(__dirname, "../..", "input", inputPath);
  return fs.readFileSync(filePath, "utf8").trim();
}

export function readLines(inputPath: string): string[] {
  return read(inputPath).split(/\n/);
}
