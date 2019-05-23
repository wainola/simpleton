require('dotenv').config({ path: `${process.cwd()}/.env.development` });
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  publicRuntimeConfig: {
    API_URL: process.env.API_URL
  }
});
