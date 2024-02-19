export default {
  'src/**/*.{js,jsx,ts,tsx}': 'eslint src --ext .js,.jsx,.ts,.tsx',
  'src/**/*.css': 'stylelint src/**/*.css --fix',
  'src/**/*.{ts,tsx}': 'tsc --noEmit --pretty --jsx react',
};
