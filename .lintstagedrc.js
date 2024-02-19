module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': 'npm run lint:script',
  'src/**/*.css': 'stylelint src/**/*.css --fix',
  'src/**/*.{ts,tsx}': 'tsc --noEmit --pretty --jsx react',
};
