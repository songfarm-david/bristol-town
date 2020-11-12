import React from 'react';
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet';
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, image, article }) => {
    
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
        phoneNumber,
        streetAddress,
        postalCode
    } = site.siteMetadata

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    }

    // Schema
    const schemaLocalBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": defaultTitle,
        "image": defaultImage,
        "@id": siteUrl,
        "url": siteUrl,
        "telephone": phoneNumber,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": streetAddress,
            "addressLocality": "Victoria",
            "postalCode": postalCode,
            "addressCountry": "Canada"
        }
    }

    return (
        <Helmet title={seo.title}>
            <meta charSet="utf-8" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <script type="application/ld+json">{JSON.stringify(schemaLocalBusiness)}</script>
        </Helmet>
    )
}

export default SEO

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}
SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
}

const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                titleTemplate
                defaultDescription: description
                siteUrl: url
                defaultImage: image
                phoneNumber
                streetAddress
                postalCode
            }
        }
    }
`

// deep example for facebook integration: https://github.com/marisamorby/marisamorby.com/blob/master/packages/gatsby-theme-blog-sanity/src/components/seo.js