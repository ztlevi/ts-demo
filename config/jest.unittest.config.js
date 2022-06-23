module.exports = {
  roots: ["<rootDir>/../src"],
  transform: {},
  testRegex: '.*_(unittest|jsdomtest).ts$',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
}

