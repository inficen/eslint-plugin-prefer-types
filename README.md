# @inficen/eslint-plugin-prefer-types

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@inficen/eslint-plugin-prefer-types`:

```sh
npm install @inficen/eslint-plugin-prefer-types --save-dev
```

## Usage

Add `@inficen/prefer-types` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@inficen/prefer-types"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@inficen/prefer-types/prefer-types": "warn"
  }
}
```

If you haven't already, you will need to setup ESLint to work with typescript using [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).

```
npm install --save-dev @typescript-eslint/parser
```

A minimal configuration would look as follows

```JSON
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "@inficen/prefer-types"],
  "rules": {
    "@inficen/prefer-types/prefer-types": "warn"
  }
}
```

## Supported Rules

- [`prefer-types`](./docs/rules/prefer-types.md)
