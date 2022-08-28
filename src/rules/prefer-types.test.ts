/**
 * @fileoverview prefer types over interface
 * @author Lionel Tay
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import rule from "./prefer-types";
import { RuleTester } from "eslint";

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("prefer-types", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "interface { name: string }",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
