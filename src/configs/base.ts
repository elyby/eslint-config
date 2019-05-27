import { Linter } from 'eslint';

const config: Linter.Config = {
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
    },

    // @ts-ignore
    extends: [
        'eslint:recommended',
    ],

    rules: {
        // possible errors (including eslint:recommended)
        'no-extra-parens': ['warn', 'all', {
            nestedBinaryExpressions: false,
            ignoreJSX: 'multi-line',
        }],
        'valid-jsdoc': ['warn', {
            requireParamDescription: false,
            requireReturn: false,
            requireReturnDescription: false,
            prefer: {
                returns: 'return',
            },
            preferType: {
                String: 'string',
                Object: 'object',
                Number: 'number',
                Function: 'function',
            },
        }],

        // best practice
        'block-scoped-var': 'error',
        'curly': 'error',
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eqeqeq': ['error', 'smart'],
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'warn',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'warn',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-labels': 'error',
        'no-lone-blocks': 'warn',
        'no-loop-func': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-native-reassign': 'error',
        'no-new-wrappers': 'warn',
        'no-new': 'warn',
        'no-octal-escape': 'warn',
        'no-octal': 'error',
        'no-proto': 'error',
        'no-redeclare': 'warn',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unused-expressions': ['warn', {
            allowShortCircuit: true,
            allowTernary: true,
        }],
        'no-useless-call': 'warn',
        'no-useless-concat': 'warn',
        'no-void': 'error',
        'no-with': 'error',
        'radix': 'error',
        'wrap-iife': 'error',
        'yoda': 'warn',
        'no-constant-condition': 'error',

        // strict mode
        'strict': ['warn', 'never'], // allow babel to do it for us

        // variables
        'no-catch-shadow': 'off',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-shadow-restricted-names': 'error',
        'no-shadow': 'off',
        'no-undef-init': 'error',
        'no-undef': 'error',
        'no-use-before-define': ['warn', 'nofunc'],

        // CommonJS
        'no-mixed-requires': 'warn',
        'no-path-concat': 'warn',

        // stylistic
        'array-bracket-spacing': 'off', // disable because we want spaces on destructured arrays
        'block-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs', {
            allowSingleLine: false,
        }],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'comma-dangle': ['warn', 'always-multiline'],
        'computed-property-spacing': 'error',
        'consistent-this': ['error', 'that'],
        'camelcase': 'warn',
        'eol-last': 'warn',
        'func-call-spacing': 'error',
        'id-length': ['error', {
            min: 2,
            exceptions: ['x', 'y', 'i', '$'],
        }],
        'indent': ['error', 4, {
            SwitchCase: 1,
        }],
        'key-spacing': ['error', {
            mode: 'minimum',
        }],
        'linebreak-style': 'error',
        'max-depth': 'error',
        'new-cap': 'error',
        'new-parens': 'error',
        'no-array-constructor': 'warn',
        'no-bitwise': 'warn',
        'no-lonely-if': 'error',
        'no-negated-condition': 'warn',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-trailing-spaces': 'warn',
        'no-unneeded-ternary': 'warn',
        'one-var': ['error', 'never'],
        'operator-assignment': ['warn', 'always'],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['warn', 'never'],
        'quote-props': ['warn', 'as-needed'],
        'quotes': ['warn', 'single'],
        'semi': 'error',
        'semi-spacing': 'error',
        'keyword-spacing': 'warn',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        }],
        'space-in-parens': 'warn',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': 'warn',

        // es6
        'arrow-body-style': 'warn',
        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'constructor-super': 'error',
        'generator-star-spacing': 'warn',
        'no-class-assign': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-this-before-super': 'error',
        'no-var': 'warn',
        'object-shorthand': 'warn',
        'prefer-arrow-callback': 'warn',
        'prefer-const': 'warn',
        'prefer-reflect': 'warn',
        'prefer-spread': 'warn',
        'prefer-template': 'warn',
        'require-yield': 'error',
    },
};

export default config;
