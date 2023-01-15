// // import { InputType } from "../utils/Input";
// import { readLines } from "../utils/InputUtils";

// import { Solver as Solver01 } from "./01";
// import { Solver as Solver02 } from "./02";

// const day = process.argv[2];
// console.log({ day });

// // const exampleInput = read(`${Solver.problemId}-example`);
// // const fullInput = read(`${Solver.problemId}-full`);

// //     test("part 1", () => expect(part1(exampleInput)).toBe(157));
// //     // test("part 2", () => expect(part2(exampleInput)).toBe(70));
// //   });

// //   // describe("full input", () => {
// //   //   const solver = new Solver(fullInput);

// //   //   test("part 2", () => expect(part2(exampleInput)).toBe(2567));
// //   // });

// // // const { Solver } = await import(`./${day}`);
// // import(`./${"01"}`).then(module => {
// //   const Solver = module.Sover;

// //   const solver = new Solver("eee");
// //   console.log(solver.part1(exampleInput));
// // });

// // const solvers = [Solver01, Solver02];

// // const solverMatrix = solvers.map(Solver => {
// //   return { problemId: Solver01.problemId, Solver };
// //   // return [day, 44, 44];
// //   // return { day, a: 1, b: 1, expected: 2, klass: import(`./${day}`) };
// //   // return { day, a: 1, b: 2, expected: 3, Solver: Solver02 };
// // });

// const days = [
//   {
//     id: "01",
//     Solver: Solver01,
//     inputs: [
//       { type: "sample", answers: [24000, 45000] },
//       { type: "full", answers: [71023, 206289] },
//     ],
//   },
//   {
//     id: "02",
//     Solver: Solver02,
//     inputs: [
//       { type: "sample", answers: [15, 12] },
//       { type: "full", answers: [10816, 11657] },
//     ],
//   },
//   // {
//   //   id: "02",
//   //   Solver: Solver02,
//   //   inputs: [
//   //     ["sample", [15, 12]],
//   //     ["full", [10816, 11657]],
//   //   ],
//   // },
// ];

// // const days = ["01", "02", "03"];
// // const days = ["02", "03"];
// // const days = ["02"];
// // const inputTypes = [InputType.Sample, InputType.Full];
// // // const parts = [InputType.Sample, InputType.Full];

// // const exampleInput = readLines("2022/02-example");

// // const dayMatrix = days.map(day => {
// //   // return [day, 44, 44];
// //   // return { day, a: 1, b: 1, expected: 2, klass: import(`./${day}`) };
// //   return { day, a: 1, b: 2, expected: 3, Solver: Solver02 };
// // });

// // const inputMatrix = inputTypes.map(inputType => {
// //   return { type: inputType, c: 6, d: 7 };
// // });

// // console.log({ days });

// describe.each(days)("$id", ({ id, Solver, inputs }) => {
//   describe.each(inputs)("$type input", ({ type, answers }) => {
//     const input = readLines(`2022/${id}-${type}`);
//     const solver = new Solver(input);

//     test("part 1", () => expect(part1(exampleInput)).toBe(answers[0]));
//     test("part 2", () => expect(part2(exampleInput)).toBe(answers[1]));

//     // test(`${type} input`, () => {
//     //   expect(part1(exampleInput)).toBe(answers[0]);
//     //   expect(part2(exampleInput)).toBe(answers[1]);
//     // });
//   });
// });

// // [
// //   [true, "folder", mocks.mockPublicFolder],
// //   [false, "file", mocks.mockJpgFile],
// //   [false, "collection", mocks.mockStaticCollection],
// // ];
// // test.each()("returns %s when given a %s", (expected, _, asset) => {
// //   expect(AssetUtils.checkIfIsFolder(asset)).toBe(expected);
// // });

// // days.forEach(day => {
// //   //   describe(day, async () => {

// //   //     inputTypes.forEach(inputType => {
// //   //       describe(`${inputType} input`, () => {
// //   //         const solver = new Solver(InputType.Sample);

// //   // test("part 1", () => expect(part1(exampleInput)).toBe(8072));
// //   test("part 1", () => expect(day).toBe(8072));
// //   //       });
// //   //     });
// //   //   });
// // });
