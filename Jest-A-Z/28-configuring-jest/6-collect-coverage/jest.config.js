module.exports = {
  collectCoverage: true,
  // collectCoverageFrom: ["./utils-1.js"],
  // coveragePathIgnorePatterns: ["./utils-1.js"],
  coverageDirectory: "./coverageCustom",
  // coverageReporters: ["json"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    "./utils-1.js": {
      lines: 80,
    },
  },
  forceCoverageMatch: ["**/*.t.js"],
};
