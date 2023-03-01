module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  rules: {
    eqeqeq: "error",
    "no-console": "warn",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
  },
  ignorePatterns: ["node_modules", "build", "dist", "public"],
};
