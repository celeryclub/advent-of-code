const year = process.env.YEAR ?? "**";

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [`<rootDir>/${year}/**/*.spec.ts`],
};
