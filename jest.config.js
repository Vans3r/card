/** @type {import('jest').Config} */
const config = {
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'mjs'],
};

export default config;
