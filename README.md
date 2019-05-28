# Ely.by ESLint rules

Set of ESLint rules used in development of Ely.by JS projects. Contains rules for pure JS, JSX, ReactJS and TS.

## Installation

First of all install Ely.by ESLint plugin and `eslint` peer dependency via NPM:

```sh
npm install @elyby/eslint-plugin eslint --save-dev
```

Or via yarn:

```sh
yarn add -D @elyby/eslint-plugin eslint
```

## Configuration

The configuration is divided into several parts. The `base` provides only pure js checks. To use it, 
simply add the `plugin:@elyby/base` configuration to the `extends` block:

```json
{
    "extends": [
        "plugin:@elyby/config"
    ]
}
```

### React

The configuration for React requires additional dependencies. Install them first:

```sh
# NPM:
npm install eslint-plugin-react eslint-plugin-react-hooks --save-dev
# Yarn:
yarn add -D eslint-plugin-react eslint-plugin-react-hooks
```

Then add the `plugin:@elyby/react` configuration to the `extends` block:

```json
{
    "extends": [
        "plugin:@elyby/config",
        "plugin:@elyby/react"
    ]
}
```

### TypeScript

Configuration for TypeScript also requires additional libraries:

```sh
# NPM:
npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
# Yarn:
yarn add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Then add the `plugin:@elyby/react` configuration to the `extends` block:

```json
{
    "extends": [
        "plugin:@elyby/config",
        "plugin:@elyby/typescript"
    ]
}
```

You may still wish to override some of our rules, as well as the rest of our eslint configuration settings.
For example, you can specify the preferred `env` for eslint:

```json
{
    "env": {
        "browser": true,
        "es6": true
    }
}
```

## Using our custom fixers

First of all, you must install Ely.by's ESLint plugin as described in the [installation chapter](#installation).
After that you can enable our custom rules with defining our plugin in `plugins` section:

```json
{
    "plugins": [
        "@elyby"
    ]
}
```

After that all custom rules will be available for use.

### List of supported rules

* [@elyby/jsx-closing-bracket-location](docs/rules/jsx-closing-bracket-location.md):
  Validate closing bracket location in JSX 

## License

Ely.by ESLint plugin is licensed under the [MIT License](LICENSE.md).
