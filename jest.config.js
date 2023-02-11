module.exports = {
  bail: 1,
  clearMocks: true,
  maxWorkers: '55%',
  coverageProvider: 'babel',
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['coverage', 'node_modules'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'ts', 'node'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '.+\\.ts$': [
      'esbuild-jest',

      {
        sourcemap: true
      }
    ]
  },
  testEnvironment: 'node'
}
