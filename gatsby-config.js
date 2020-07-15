module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
    siteUrl: 'https://baillieogrady.com'
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    // SEO
    'gatsby-plugin-react-helmet',
    // wordpress
    {
      resolve: 'gatsby-plugin-catch-links',
      options: {
        excludePattern: /(excluded-link|external)/,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'https://qeown.baillieogrady.com',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    // google anlytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-130240526-7",
      },
    },
    // manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Baillie O'Grady`,
        short_name: `baillieogrady`,
        start_url: `/`,
        background_color: `#262626`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/img/favicon.png`,
      },
    },
    // images
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // css
    'gatsby-plugin-sass',
    {
      // Removes unused css rules
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: false,
        // Purge only the main css file
        purgeOnly: ['scss/all.sass'],
        whitelist: ['code', 'pre', 'iframe']
      },
    }, // must be after other CSS plugins
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    // 'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
