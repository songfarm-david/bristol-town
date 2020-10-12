/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
    ],
}
