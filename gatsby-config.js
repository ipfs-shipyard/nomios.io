/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Nomios',
    },
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://studio.us3.list-manage.com/subscribe/post?u=d0a37b2ca5321b1a8a494dd0a&amp;id=62a0056489',
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-143286587-1',
                head: true,
                respectDNT: true,
            },
        },
    ],
};
