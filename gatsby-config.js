module.exports = {
  siteMetadata: {
    title: "craigfreeman-net-temp",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-32932584-1",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `craigfreeman-net`,
        short_name: `cfree`,
        start_url: `/`,
        background_color: `#4d9abe`,
        theme_color: `#4d9abe`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
