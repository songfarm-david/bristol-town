import React from "react"

import Layout from "../components/layout"
import ThemeButton from "../components/UI/theme_button"

export default ({location}) => {
    console.log(location);
    return (
        <Layout page={location} pageTitle={"Page not found"}>
            <section className="center">
                <p>The page you're looking for doesn't exist.</p>
                <ThemeButton btnText={"Go back home"} btnTarget="/" />
            </section>
        </Layout>
    )
}