/**
 * @fileoverview prefer types over interface
 * @author Lionel Tay
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import rule from "./prefer-types";
import { ruleTester } from "test-utils";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

ruleTester.run("prefer-types", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "interface Person { name: string }",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
