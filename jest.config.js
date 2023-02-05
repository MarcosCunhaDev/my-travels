module.exports = {
  transformIgnorePatterns: [
    '/node_modules/(?!(react-leaflet/lib|@react-leaflet/core/lib)/)'
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts']
}
