const eslint = require('@eslint/js')

module.exports = [
  {
    ignores: ['dist/**', 'node_modules/**']
  },
  eslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        process: 'readonly',
        console: 'readonly'
      }
    },
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single']
    }
  }
]