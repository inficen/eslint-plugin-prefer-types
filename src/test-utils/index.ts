import { RuleTester } from "eslint";

export const ruleTester = new RuleTester({
  parser: require.resolve("@typescript-eslint/parser"),
});