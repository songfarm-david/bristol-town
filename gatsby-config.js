/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: "Bristol Town Hair Fashions",
        titleTemplate: "%s · Bristol Town Hair Fashions",
        description: "We Style Your Hair With Years of Experience",
        url: "https://bristoltown.ca",
        image: "/images/bristol_hair_logo.png",
        phoneNumber: "(250) 477-3098",
        streetAddress: "2562 Sinclair Road",
        postalCode: "V8N 1B8",
        author: "Bristol Town Hair Fashions",
        siteLanguage: "en"
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `Playfair Display\:400,400i`,
                `Raleway\:500,800`
              ],
              display: 'swap'
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: [
                process.env.GA, // Google Analytics / GA
              ]
            },
        }
    ],
}
