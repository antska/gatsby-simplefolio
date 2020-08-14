const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: `https://skange.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-87594841-7',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        context: path.join(__dirname, 'src/context'),
        mock: path.join(__dirname, 'src/mock'),
        images: path.join(__dirname, 'src/images'),
        styles: path.join(__dirname, 'src/styles'),
        types: path.join(__dirname, '@types'),
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `files`,
        path: `${__dirname}/src/files/`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://skange.netlify.app',
        sitemap: 'https://skange.netlify.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Angeliki Skandali`,
        short_name: `angelikiskandali`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    `gatsby-plugin-offline`,
  ],
};
