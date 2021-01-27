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
  ],
};
