module.exports = {
  env:{
    node: true
  },
  plugins: [
    "fp"
  ],
  rules: {
    'fp/no-arguments': 2,
    'fp/no-delete': 2,
    'fp/no-mutating-assign': 2,
    'fp/no-mutating-methods': 2,
    'no-var': 2,

    'block-scoped-var': 2,
    'block-scoped-var': 2,
    'camelcase': 2,
    'complexity': [2, 9],
    'consistent-return': 1,
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'eqeqeq': [2, 'smart'],
    'indent': [2, 2],
    'linebreak-style': [2, 'unix'],
    'no-case-declarations': 2,
    'no-cond-assign': 2,
    'no-constant-condition': 2,
    'no-debugger': 2,
    'no-div-regex': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-else-return': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-invalid-this': 2,
    'no-loop-func': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-nested-ternary': 2,
    'no-new-func': 2,
    'no-new-require': 2,
    'no-new-wrappers': 2,
    'no-proto': 2,
    'no-redeclare': [2, { builtinGlobals: true }],
    'no-self-compare': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-underscore-dangle': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'no-void': 2,
    'no-with': 2,
    'object-curly-spacing': [2, 'always'],
    'quotes': [2, 'single', 'avoid-escape'],
    'radix': [2, 'always'],
    'semi': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'strict': [2, 'global'],
    'vars-on-top': 2
  }
};
