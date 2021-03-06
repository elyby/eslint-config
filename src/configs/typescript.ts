import { Linter } from 'eslint';

const config: Linter.Config = {
    parser: '@typescript-eslint/parser',

    // @ts-ignore
    plugins: [
        '@typescript-eslint/eslint-plugin',
    ],

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'camelcase': 'off',
                'func-call-spacing': 'off',
                'indent': 'off',
                'no-array-constructor': 'off',
                'no-extra-parens': 'off',
                'no-unused-vars': 'off',
                'valid-jsdoc': 'off',
                'semi': 'off',

                'react/prop-types': 'off',

                '@typescript-eslint/adjacent-overload-signatures': 'error',
                '@typescript-eslint/array-type': ['error', {
                    default: 'generic',
                    readonly: 'generic',
                }],
                '@typescript-eslint/camelcase': 'error',
                '@typescript-eslint/class-name-casing': 'error',
                '@typescript-eslint/consistent-type-assertions': 'error',
                '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
                '@typescript-eslint/explicit-member-accessibility': 'error',
                '@typescript-eslint/func-call-spacing': 'error',
                '@typescript-eslint/indent': 'error',
                '@typescript-eslint/interface-name-prefix': ['error', 'never'],
                '@typescript-eslint/member-delimiter-style': 'error',
                '@typescript-eslint/no-array-constructor': 'error',
                '@typescript-eslint/no-empty-interface': 'error',
                '@typescript-eslint/no-extra-parens': ['warn', 'all', {
                    nestedBinaryExpressions: false,
                    ignoreJSX: 'multi-line',
                }],
                '@typescript-eslint/no-inferrable-types': ['error', {
                    ignoreParameters: true,
                }],
                '@typescript-eslint/no-misused-new': 'error',
                '@typescript-eslint/no-namespace': 'error',
                '@typescript-eslint/no-parameter-properties': 'error',
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/no-use-before-define': 'error',
                '@typescript-eslint/no-useless-constructor': 'warn',
                '@typescript-eslint/no-var-requires': 'error',
                '@typescript-eslint/prefer-for-of': 'warn',
                '@typescript-eslint/prefer-namespace-keyword': 'error',
                '@typescript-eslint/semi': 'error',
                '@typescript-eslint/triple-slash-reference': 'error',
                '@typescript-eslint/type-annotation-spacing': 'error',
            },
        },
    ],
};

export default config;
