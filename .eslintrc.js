/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:eslint-plugin/recommended"],
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
  },
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      files: ["**/*.ts"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
    },
  ],
};
