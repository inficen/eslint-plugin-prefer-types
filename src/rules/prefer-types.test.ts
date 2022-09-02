import rule from "./prefer-types";
import { ruleTester } from "test-utils";

ruleTester.run("prefer-types", rule, {
  valid: [{ code: "type Person = { name: string }" }],

  invalid: [
    {
      code: "interface Person { name: string }",
      errors: [{ messageId: "useType" }],
    },
    {
      code: `
        type Person = {
          name: string;
        };

        interface IPerson {
          name: string;
        }
      `,
      errors: [{ messageId: "useType" }],
    },
  ],
});
