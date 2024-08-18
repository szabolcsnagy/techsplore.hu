const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  tailwindConfig: './tailwind.config.js',
  plugins: [
    'prettier-plugin-tailwindcss', // MUST come last
  ],
};

module.exports = config;
