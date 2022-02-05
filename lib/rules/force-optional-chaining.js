module.exports = {
  meta: {
    type: "problem",
    schema: [],
  },
  create(context) {
    return {
      MemberExpression(node) {
        let childNode = node.object,
          nestingLevel = 1,
          isLackingOptionalChaining = !node.optional;

        while (true) {
          if (childNode.type === "MemberExpression") {
            childNode = childNode.object;
            nestingLevel++;
          } else if (childNode.type === "CallExpression") {
            childNode = childNode.callee;
            nestingLevel++;
          } else if (childNode.type === "Identifier") {
            break;
          }
        }

        if (nestingLevel > 1 && isLackingOptionalChaining) {
          context.report({
            node: node,
            message:
              "To avoid TypeError in looking up a deeply-nested subproperty requires optional chaining.",
          });
        }
      },
      CallExpression(node) {
        let childNode = node.callee,
          nestingLevel = 1,
          isLackingOptionalChaining = !node.optional;

        while (true) {
          if (childNode.type === "MemberExpression") {
            childNode = childNode.object;
            nestingLevel++;
          } else if (childNode.type === "CallExpression") {
            childNode = childNode.callee;
            nestingLevel++;
          } else if (childNode.type === "Identifier") {
            break;
          }
        }

        if (nestingLevel > 1 && isLackingOptionalChaining) {
          context.report({
            node: node,
            message:
              "To avoid TypeError in looking up a deeply-nested subproperty requires optional chaining.",
          });
        }
      },
    };
  },
};
