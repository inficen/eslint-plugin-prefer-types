import rule from "./prefer-types";
import { ruleTester } from "test-utils";

ruleTester.run("prefer-types", rule, {
  valid: [
    { code: "type Person = { name: string }" },
    {
      options: [{ whitelist: ["Person"] }],
      code: "interface Person { name: string }",
    },
    {
      options: [{ whitelistPrefix: ["I"] }],
      code: "interface IPerson { name: string }",
    },
  ],

  invalid: [
    {
      options: [{ whitelist: ["OtherPerson"] }],
      code: "interface Person { name: string }",
      errors: [{ messageId: "useType" }],
    },
    {
      options: [{ whitelistPrefix: ["I"] }],
      code: "interface XPerson { name: string }",
      errors: [{ messageId: "useType" }],
    },
    {
      code: "interface Person { name: string }",
      errors: [{ messageId: "useType" }],
    },
    {
      code: `type Person = { name: string }
        interface IPerson { name: string }
      `,
      errors: [{ messageId: "useType" }],
    },
  ],
});
