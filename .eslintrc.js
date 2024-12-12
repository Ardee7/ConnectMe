module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', 'plugin:react/jsx-runtime'],
  rules: {
    'react-native/no-inline-styles': 0,
    'max-len': [
      'error',
      {
        code: 100,
        ignorePattern: '^(import\\s.+\\sfrom\\s.+|\\} from)',
        ignoreUrls: true
      }
    ],
    'react-hooks/exhaustive-deps': [0],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        quoteProps: 'consistent',
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false,
        bracketSpacing: true
      }
    ]
  },
  overrides: [
    {
      files: ['./assets/icons/*.tsx'],
      rules: {
        'max-len': 'off'
      }
    }
  ],
  env: {
    jest: true
  }
};
