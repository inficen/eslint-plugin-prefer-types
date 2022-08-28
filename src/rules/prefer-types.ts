/**
 * @fileoverview prefer types over interface
 * @author Lionel Tay
 */
import { ruleCreator } from "utils";

const rule = ruleCreator({
  name: "uppercase-first-declarations",
  meta: {
    docs: {
      description: "prefer types over interface",
      recommended: "warn",
    },
    messages: {
      uppercase: "Start this name with an upper-case letter.",
    },
    type: "suggestion",
    schema: [],
  },
  defaultOptions: [],

  create(context) {
    return {
      TSInterfaceBody: (node) => {
        console.log(node);
      },
    };
  },
});

export default rule;
