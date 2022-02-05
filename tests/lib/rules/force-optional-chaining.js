const rule = require("../../../lib/rules/force-optional-chaining"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2022 } });

ruleTester.run("force-optional-chaining", rule, {
  valid: [
    {
      code: "a?.b?.c?.d",
    },
  ],

  invalid: [
    {
      code: "a?.b.c.d",
      errors: [
        {
          message:
            "To avoid TypeError in looking up a deeply-nested subproperty requires optional chaining.",
        },
        {
          message:
            "To avoid TypeError in looking up a deeply-nested subproperty requires optional chaining.",
        },
      ],
    },
    {
      code: "a.b.c",
      errors: [
        {
          message:
            "To avoid TypeError in looking up a deeply-nested subproperty requires optional chaining.",
        },
      ],
    },
  ],
});
