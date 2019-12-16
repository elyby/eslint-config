module.exports = {
    extends: [
        'plugin:@elyby/base',
        'plugin:@elyby/typescript',
    ],

    env: {
        node: true,
        es6: true,
    },

    settings: {
        react: {
            // Override these settings to avoid a wall of warnings
            version: 'latest',
        },
    },

    overrides: [
        {
            files: ['src/configs/*.ts'],
            rules: {
                'quote-props': 'off',
            },
        },
    ],
};
