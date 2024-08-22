module.exports = {
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'es5',
    tabWidth: 2,
    printWidth: 80,
    overrides: [
      {
        files: '*.md',
        options: {
          printWidth: 100, // Increase print width for Markdown files
        },
      },
      {
        files: '*.css',
        options: {
          tabWidth: 4, // Use a larger tab width for CSS files
        },
      },
    ],
  };