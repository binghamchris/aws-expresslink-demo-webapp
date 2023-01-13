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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "AWS IoT Device Shadow Demo",
        short_name: "AWS IoT Device Shadow Demo",
        start_url: "/",
        background_color: "#bdc3c8",
        theme_color: "#82969b",
        icon: "src/assets/images/ExpressLink_2048px.png",
      },
    },
  ],
};