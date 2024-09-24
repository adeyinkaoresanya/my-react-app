import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },

  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    // Add React settings to specify the version
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },

  {
    files: ['**/*.test.js', '**/*.spec.js'], // Include test files
    languageOptions: {
      globals: {
        test: true,
        expect: true,
        describe: true,
        it: true,
        // Add any other Jest globals you use
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];