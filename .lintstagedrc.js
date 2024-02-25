module.exports = {
  '@/src/*.{js,jsx,ts,tsx}': 'npm run lint:script',
  '@/src/*.css': 'npm run lint-styles',
  '@/src/*.{ts,tsx}': 'npm run lint:type',
};
