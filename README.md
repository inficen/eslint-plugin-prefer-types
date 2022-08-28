# eslint-plugin-prefer-types

prefer Typescript types over interfaces

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

Add `prefer-types` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@inficen/prefer-types"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "prefer-types/rule-name": "warn"
  }
}
```

## Supported Rules

- Fill in provided rules here
