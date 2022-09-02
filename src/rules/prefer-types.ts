import { ruleCreator } from "utils";

const rule = ruleCreator({
  name: "uppercase-first-declarations",
  meta: {
    docs: {
      description: "prefer types over interface",
      recommended: "warn",
    },
    messages: {
      useType: "Prefer using `type` over `interface`",
    },
    type: "suggestion",
    schema: [],
  },
  defaultOptions: [],

  create(context) {
    return {
      TSInterfaceBody: (node) => {
        context.report({
          messageId: "useType",
          node,
        });
      },
    };
  },
});

export default rule;
