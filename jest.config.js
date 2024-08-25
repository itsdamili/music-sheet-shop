module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleFileExtensions: ['js', 'jsx'],
    extensionsToTreatAsEsm: ['.jsx'],
    setupFiles: ['<rootDir>/jest.setup.js'],
  };
  