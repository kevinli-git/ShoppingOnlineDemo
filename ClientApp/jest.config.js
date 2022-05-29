module.exports = {
    roots: ['./src'],
    verbose: true,

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    },
    globals: {
        NODE_ENV: 'test',
    },
    moduleFileExtensions: ['js', 'jsx'],
    moduleDirectories: ['node_modules'],
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],

    testEnvironment: 'jsdom'
};