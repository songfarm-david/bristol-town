import React from "react"

import Layout from "../components/layout"
import ThemeButton from "../components/UI/theme_button"
import BrandBanner from "../components/theme/brand_banner"

export default function Home({location}) {

    return (
        <Layout page={location} pageTitle={"Welcome to Bristol Town"}>
            <section className={"grid_section"}>
                <div>
                    <h2>We Style Your Hair With Years of Experience</h2>
                    <p className={"text_italic"}>We are Bristol Town located in Victoria BC. Whether you’re looking for a trim or a transformation, Bristol Town Hair Fashions in Cadboro Bay has the stylist for you. We’ve assembled a team of specialists with a range of talents: from the latest cutting-edge styles, to traditional looks that suit your features and personality, we do it all. Our team of hair-care professionals also includes talented colourists who can help you add a jolt to your look, or restore the natural colour of your younger years.</p>
                </div>
                <div className={"button_group"}>
                    <ThemeButton />
                    <ThemeButton className="inverted" btnText="See our services" />
                </div>
            </section>
            <BrandBanner />
        </Layout>
    )
}
