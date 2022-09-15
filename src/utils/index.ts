import { ESLintUtils } from "@typescript-eslint/utils";

export const ruleCreator = ESLintUtils.RuleCreator(
  (name) =>
  `https://github.com/inficen/eslint-plugin-prefer-types/blob/main/docs/rules/${name}.md`
);
