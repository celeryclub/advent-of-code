// import * as fs from "fs";
// import * as path from "path";
// import { Transform } from "stream";

// import { InputTransform } from "./utils/InputUtils";

// function readInputFile(inputPath: string): string {
//   const filePath = path.join(__dirname, "../..", "input", `${inputPath}.txt`);
//   return fs.readFileSync(filePath, "utf8").trim();
// }

// // import { readInputFile } from "./utils/FileUtils";
// import { InputType, InputRule } from "./utils/Input";

// const uppercase = new Transform({
//   transform(chunk, encoding, callback) {
//     callback(null, chunk.toString().toUpperCase());
//     // callback(null, parseInt(chunk, 10).toString());
//     // callback(null, new Uint8Array(chunk.toString().split("\n")));
//   },
// });

export abstract class Day<T> {
  // public static inputTransform: InputTransform;

  constructor(protected input: T) {}

  // public static inputRule: InputRule;
  // public static transformRule: string;

  // protected _input: T;
  // protected _input: str;

  // // constructor(input: T) {
  // // constructor(inputType: InputType, inputRule: InputRule) {
  // constructor(inputType: InputType) {
  //   console.log({ inputType });
  //   const inputStream = fs
  //     .createReadStream(path.join(__dirname, "../input", `2022/01-example.txt`))
  //     // .pipe(new YourTransformStream())
  //     .pipe(uppercase);
  //   // .pipe(fs.createWriteStream("output/file.txt"));
  //   // this._input = input;
  //   // let rawInput = readInputFile(`${inputRule.id}${inputType}`);

  //   const chunks = [];

  //   inputStream.on("data", function (chunk) {
  //     chunks.push(chunk);
  //   });

  //   inputStream.on("error", err => console.log({ err }));

  //   // Send the buffer or you can put it into a var
  //   inputStream.on("end", function () {
  //     const final = Buffer.concat(chunks).toString();
  //     console.log({ final });
  //   });

  // //   // let input: string[];

  // if (!inputRule.splitLines) {
  //   // @ts-ignore
  //   this._input = rawInput;
  //   return;
  // }

  // const lines = rawInput.split(/\n/);

  // if (inputRule.groupByEmptyLines) {
  //   // @ts-ignore
  //   return lines.reduce(
  //     (groups, line) => {
  //       line === "" ? groups.push([]) : groups[groups.length - 1].push(line);
  //       // line === "" ? groups.push([]) : groups[groups.length - 1].push(parseInt(line, 10));
  //       return groups;
  //     },
  //     [[]]
  //   );
  // }

  // if (inputRule.lineTransformer) {
  //   input = input.map(inputRule.lineTransformer);
  // }

  // else {
  //   return rawInput;
  // }

  //   // console.log(inputType);
  //   // console.log(inputRule);
  //   // console.log(rawInput);
  //   // console.log(input);
  // }

  // public static gg(): string {
  //   return this.transformRule;
  // }
  // }
}
