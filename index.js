module.exports = {
  env: {
    node: true,
    es6: true,
    yarn,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  plugins: ['fp', 'unicorn', 'import'],
  rules: {
    'fp/no-arguments': 'warn',
    'fp/no-delete': 'error',
    'fp/no-mutating-assign': 'error',
    'fp/no-mutating-methods': 'warn',

    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'warn',
    'import/no-self-import': 'error',
    'import/no-cycle': 'warn',
    'import/no-mutable-exports': 'error',
    'import/no-deprecated': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/order': 'error',

    // Style
    'import/exports-last': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/group-exports': 'error',
  },
};
