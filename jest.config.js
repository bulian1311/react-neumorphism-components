module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/__test__/mock/styleMock.ts"
  }
}