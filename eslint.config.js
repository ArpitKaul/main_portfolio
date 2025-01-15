const { defineConfig } = require('@react-three/eslintplugin');

module.exports = defineConfig({
  rules: {
   
    '@react-three/no-unknown-prop': 'warn',

    // Optional: Additional rules to enhance linting
    'react/prop-types': 'off', 
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with _
    'no-console': 'warn', // Warn on console statements
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
  ],
});
