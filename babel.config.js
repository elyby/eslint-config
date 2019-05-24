module.exports = (api) => ({
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: api.env('test') ? 'current' : 8,
            },
        }],
        ['@babel/preset-typescript'],
    ],
});
