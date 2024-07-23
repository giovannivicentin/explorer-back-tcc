module.exports = {
  root: true,
  env: {
    es2021: true,
    jest: true,
    node: true, 
    browser: false 
  },
  extends: [
    'eslint:recommended',
    'google', 
    'plugin:prettier/recommended' 
  ],
  parserOptions: {
    ecmaVersion: 12, 
    sourceType: 'module'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: [
    
  ],
  rules: {
    'require-jsdoc': 'off',
    'indent': ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'max-len': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }]
  },
};