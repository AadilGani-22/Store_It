module.exports = {
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:tailwindcss/recommended",
      "next/core-web-vitals"
    ],
    plugins: ["@typescript-eslint", "tailwindcss"],
    parser: "@typescript-eslint/parser",
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off"
    }
  };
  