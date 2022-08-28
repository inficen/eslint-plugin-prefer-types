/**
 * @fileoverview prefer Typescript types over interfaces
 * @author Lionel Tay
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

import requireIndex from "requireindex";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
export const rules = requireIndex(__dirname + "/rules");
