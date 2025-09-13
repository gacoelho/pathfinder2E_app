module.exports = {
  extends: [
    'expo',
    '@react-native',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
  },
  ignorePatterns: ['dist/', 'node_modules/', '.expo/'],
};