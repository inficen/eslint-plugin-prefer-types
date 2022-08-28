/**
 * @fileoverview prefer types over interface
 * @author Lionel Tay
 */
import { Rule } from "eslint";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const rule: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description: "prefer types over interface",
      recommended: false,
      url: "https://github.com/inficen/eslint-plugin-prefer-types",
    },
    fixable: "code",
    schema: [],
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
    };
  },
};

export default rule;
