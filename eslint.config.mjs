import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...nextVitals,
  ...nextTs,

  {
    ignores: [
      ".next/**",
      ".yarn/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "commitlint.config.ts",
      "eslint.config.mjs",
    ],
  },

  {
    plugins: {
      prettier: prettierPlugin,
      "unused-imports": unusedImports,
    },
  },

  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      quotes: ["error", "double"],
      "prettier/prettier": [
        "error",
        {
          doubleQuote: true,
          singleQuote: false,
          trailingComma: "all",
          endOfLine: "auto",
        },
      ],

      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "error",
      "@typescript-eslint/no-unsafe-member-access": "error",
    },
  },

  {
    files: ["types/**/*.ts", "types/**/*.d.ts"],
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },

  eslintConfigPrettier,
];

export default eslintConfig;
