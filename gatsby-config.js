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
        description: "We Style Your Hair With Years of Experience",
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
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
        }
        // ,
        // {
        //     resolve: `@ccalamos/gatsby-source-googlemaps-static`,
        //     options: {
        //         key: process.env.GOOGLE_MAPS_KEY,
        //         center: `48.461470,-123.297833 || Victoria, British Columbia`,
        //         nickname: 'Bristol Town Hair Fashions'
        //     },
        // }
    ],
}
