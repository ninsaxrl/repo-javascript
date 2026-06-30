export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": "error",
      "no-console": "off",
      semi: ["error", "always"],
      quotes: ["error", "double"]
    }
  }
];