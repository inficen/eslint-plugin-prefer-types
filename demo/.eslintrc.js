/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@inficen/prefer-types"],
  rules: {
    "@inficen/prefer-types/prefer-types": "error",
  },
};
