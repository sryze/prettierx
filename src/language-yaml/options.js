"use strict";

const commonOptions = require("../common/common-options");

// format based on https://github.com/prettier/prettier/blob/main/src/main/core-options.js
/** @type {{ [name: string]: import("../main/core-options").OptionInfo }} */
module.exports = {
  bracketSpacing: commonOptions.bracketSpacing,
  singleQuote: commonOptions.singleQuote,
  proseWrap: commonOptions.proseWrap,
  // [prettierx]
  yamlBracketSpacing: {
    category: "Other",
    type: "boolean",
    default: true,
    inherit: "bracketSpacing",
    description: "Put spaces between brackets / curly braces for YAML.",
    oppositeDescription:
      "Do not put spaces between brackets / curly braces for YAML.",
  },
};
