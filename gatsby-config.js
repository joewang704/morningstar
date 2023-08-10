/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `MorningStar`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-emotion",
  ],
  // TODO: Remove once moved to a real domain
  // pathPrefix: "/morningstar",
};