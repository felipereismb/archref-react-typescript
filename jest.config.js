module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  moduleDirectories: ['<rootDir>/node_modules'],
  collectCoverageFrom: ['**/*.tsx'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'styles.ts',
    'global.ts',
    'theme.ts',
    'interfaces.ts',
    'reportWebVitals.ts',
    '\\.d\\.ts$',
    '/node_modules/',
    '/src/styles/',
    '/src/styles/',
    '/src/assets/',
    '/src/pages/index.ts',
    '/src/services/',
    '/src/index.tsx',
    '/src/utils',
  ],
  moduleNameMapper: {
    '\\.(woff2?|ttf|otf|eot|png|jpe?g|gif|css|scss)$':
      '<rootDir>/mock/jest-mockfile.js',
    '\\.scss$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>src/mocks/svgrMock.js',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/src/setupTests.ts',
  ],
  setupFiles: ['jest-canvas-mock'],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
