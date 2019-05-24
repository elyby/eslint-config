# Ely.by ESLint rules

Set of ESLint rules used in development of Ely.by JS projects. Contains rules for pure JS, JSX, ReactJS and TS.

## Installation

First of all install Ely.by ESLint plugin and `eslint` peer dependency via preferred package manager:

```sh
# NPM users:
npm install @elyby/eslint-plugin eslint --save-dev
# Yarn users:
yarn add -D @elyby/eslint-plugin eslint
```

Then add the following configuration to your `.eslintrc.js` file:

```js
module.exports = {
    extends: [
        'plugin:@elyby/config',
    ],
}
```

And that's it!

You may still wish to override some of our rules, as well as the rest of our eslint configuration settings.
For example, you can specify the preferred `env` for eslint:

```js
module.exports = {
    // ...rest of the configuration
    env: {
        browser: true,
        es6: true,
    },
};
```

## Using our custom fixers

First of all, you must install Ely.by's ESLint plugin as described in the [installation chapter](#installation).
After that you can enable our custom rules with defining our plugin in `plugins` section:

```js
module.exports = {
    // ...rest of the configuration
    plugins: [
        '@elyby',
    ],
};
```

After that all custom rules will be available for use.

### List of supported rules

* [@elyby/jsx-closing-bracket-location](docs/rules/jsx-closing-bracket-location.md):
  Validate closing bracket location in JSX 

## License

Ely.by ESLint plugin is licensed under the [MIT License](LICENSE.md).
