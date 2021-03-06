module.exports = {
  verbose: true,
  testURL: "http://localhost/",
  roots: ["<rootDir>/src"],
  globals: {
    "ts-jest": {
      useBabelrc: true
    }
  },
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testRegex: "(roots/.*|(\\.|/)(test))\\.(ts|tsx)?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coverageReporters: ["html", "json", "lcov", "text", "clover"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/**/*.fixtures.ts",
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/**/*.tsx",
    "!src/**/*interfaces.d.ts",
    "!src/serviceWorker.ts",
    "!src/redux/store/index.ts"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 65
    }
  },
  coveragePathIgnorePatterns: [
    "/node_modules",
    "<rootDir>/src/index.tsx",
    "src/store/index.ts|rootReducer.ts"
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"]
};
