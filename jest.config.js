const year = process.env.YEAR;

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [`<rootDir>/${year}/*.spec.ts`],
};
