module.exports = {
  schema: './server/star-wars-schema.graphql',
  documents: 'src/**/*.{graphql,js,ts,jsx,tsx}',
  extensions: {
    endpoints: {
      default: {
        url: 'http://localhost:4000',
      },
    },
  },
};
