import fs from "fs";
import path from "path";

// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export function read(inputPath: string): string {
  const filePath = path.join(__dirname, `../../_input/${inputPath}.txt`);
  return fs.readFileSync(filePath, "utf8").trimEnd();
}

export function readLines(inputPath: string): string[] {
  return read(inputPath).split(/\n/);
}
