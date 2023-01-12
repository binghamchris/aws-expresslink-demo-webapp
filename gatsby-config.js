/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `AWS IoT Device Shadow Demo`
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-resolve-src",
  ],
};