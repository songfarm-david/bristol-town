import React from "react"

import Layout from "../components/layout"
import ThemeButton from "../components/theme_button"
import BrandBanner from "../components/brand_banner"

export default function Home() {
    return (
        <Layout>
            <section>
                <div>
                    <h2>Welcome to Bristol Town Hair Fashions</h2>
                    <p>We are Bristol Town located in Victoria BC. Whether you’re looking for a trim or a transformation, Bristol Town Hair Fashions in Cadboro Bay has the stylist for you. We’ve assembled a team of specialists with a range of talents: from the latest cutting-edge styles, to traditional looks that suit your features and personality, we do it all. Our team of hair-care professionals also includes talented colourists who can help you add a jolt to your look, or restore the natural colour of your younger years.</p>
                </div>
                <div>
                    <ThemeButton />
                </div>
            </section>
            <BrandBanner />
        </Layout>
    )
}
