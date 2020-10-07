module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    "standard",
    "eslint:recommended"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
  }
};
