/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>/src"],
  testRegex: "/__tests__/.*\\.test\\.ts$",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "fixtures"],
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/", "__tests__"],
};
module.exports = config;
