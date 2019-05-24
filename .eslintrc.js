module.exports = {
    extends: [
        'plugin:@elyby/config',
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
