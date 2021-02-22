module.exports = {
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        trailingComma: 'none',
        jsxSingleQuote: true,
        useTabs: false,
        tabWidth: 2
      }
    ]
  },
  env: { mocha: true }
}
