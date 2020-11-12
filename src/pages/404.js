import React from "react"

import Layout from "../components/layout"
import ThemeButton from "../components/UI/theme_button"
import SEO from "../components/seo"

export default ({location}) => {

    return (
        <Layout page={location} pageTitle={"Page not found"}>
            <SEO title="Page Not Found | Bristol Town Hair Fashions | Victoria BC"
                description="This page does not exist. Sorry about that! Please go back to our home page or use the links in the main navigation." />
                <section className="center">
                    <p>The page you're looking for doesn't exist.</p>
                    <ThemeButton btnText={"Go back home"} btnTarget="/" />
                </section>
        </Layout>
    )
}