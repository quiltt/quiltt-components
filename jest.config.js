module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!src/types/index.ts'],
  coveragePathIgnorePatterns: ['/node_modules/', '.storybook/', 'src/stories/'],
  coverageReporters: ['lcov'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/example/'],
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css)$'],
  // transform: {
  //   '\\.(js|jsx|ts|tsx)?$': 'babel-jest',
  //   '^.+\\.css$': '<rootDir>/jest/mocks/cssMock.js',
  // },
  // transformIgnorePatterns: [
  //   '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
  //   '^.+\\.module\\.(css)$',
  // ],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.module\\.(css)$': 'identity-obj-proxy',
    '\\.css$': 'identity-obj-proxy',
  },
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
  verbose: true,
}
