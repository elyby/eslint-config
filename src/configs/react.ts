import { Linter } from 'eslint';

const config: Linter.Config = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },

    settings: {
        react: {
            version: 'detect',
        },
    },

    // @ts-ignore
    plugins: [
        'react-hooks',
        '@elyby',
    ],

    extends: [
        'plugin:react/recommended',
    ],

    rules: {
        // stylistic
        'jsx-quotes': 'error',

        // react
        'react/display-name': 'warn',
        'react/forbid-prop-types': 'warn',
        'react/jsx-boolean-value': 'warn',
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-curly-spacing': 'warn',
        'react/jsx-fragments': ['error', 'syntax'],
        'react/jsx-handler-names': ['warn', {
            eventHandlerPrefix: 'on',
            eventHandlerPropPrefix: 'on',
        }],
        'react/jsx-indent-props': 'warn',
        'react/jsx-key': 'warn',
        'react/jsx-one-expression-per-line': ['warn', {
            allow: 'literal',
        }],
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-no-bind': ['error', {
            allowArrowFunctions: true,
        }],
        'react/jsx-no-duplicate-props': 'warn',
        'react/jsx-no-literals': 'off',
        'react/jsx-no-undef': 'warn',
        'react/jsx-pascal-case': 'warn',
        'react/jsx-props-no-multi-spaces': 'warn',
        'react/jsx-uses-react': 'warn',
        'react/jsx-uses-vars': 'warn',
        'react/jsx-no-comment-textnodes': 'warn',
        'react/jsx-tag-spacing': ['warn', {
            beforeClosing: 'never',
        }],
        'react/jsx-wrap-multilines': 'warn',
        'react/no-deprecated': 'warn',
        'react/no-did-mount-set-state': 'warn',
        'react/no-did-update-set-state': 'warn',
        'react/no-direct-mutation-state': 'error',
        'react/no-is-mounted': 'warn',
        'react/no-multi-comp': 'warn',
        'react/no-string-refs': 'warn',
        'react/no-this-in-sfc': 'error',
        'react/no-unknown-property': 'warn',
        'react/no-will-update-set-state': 'error',
        'react/prefer-es6-class': 'warn',
        'react/react-in-jsxscope': 'off',
        'react/require-render-return': 'warn',
        'react/self-closing-comp': 'warn',
        'react/sort-comp': ['warn', {
            order: ['lifecycle', 'render', 'everything-else'],
        }],

        // React hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // Ely.by's custom rules
        '@elyby/jsx-closing-bracket-location': 'warn',
    },
};

export default config;
