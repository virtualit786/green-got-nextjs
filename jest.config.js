module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/.history/",
    "<rootDir>/node_modules/",
  ],
  collectCoverage: true,
};

// module.exports = {
//   roots: ["<rootDir>"],
//   testMatch: [
//     "**/__tests__/**/*.+(ts|tsx|js)",
//     "**/?(*.)+(spec|test).+(ts|tsx|js)",
//   ],
//   transform: {
//     "^.+\\.(ts|tsx)$": "ts-jest",
//   },
//   testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
// };
