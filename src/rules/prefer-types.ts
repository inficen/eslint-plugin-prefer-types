import { ruleCreator } from "utils";

type Options = [
  {
    whitelist?: string[];
    whitelistPrefix?: string[];
  }
];

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
    schema: [
      {
        type: "object",
        properties: {
          whitelist: {
            type: "array",
            items: { type: "string" },
          },
          whitelistPrefix: {
            type: "array",
            items: { type: "string" },
          },
        },
        additionalProperties: false,
      },
    ],
  },
  defaultOptions: [{ whitelist: [] }] as Options,

  create(context) {
    const whitelist = context.options[0]?.whitelist || [];
    const whitelistPrefix = context.options[0]?.whitelistPrefix || [];

    return {
      TSInterfaceDeclaration: (node) => {
        const interfaceName = node.id.name;
        if (whitelist.length > 0 && whitelist.includes(interfaceName)) {
          return;
        }

        if (
          whitelistPrefix.length > 0 &&
          whitelistPrefix.some((prefix) => interfaceName.startsWith(prefix))
        ) {
          return;
        }

        context.report({
          messageId: "useType",
          node,
        });
      },
    };
  },
});

export default rule;
