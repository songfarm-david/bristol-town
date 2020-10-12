import React from "react"

import Layout from "../components/layout"

export default function Services({location}) {
    console.log(location);
    return (
        <Layout page={location} pageTitle={"Contact Us"}>
            <section>
                <h3>Hair Care & Style</h3>
                <p>Bristol Town’s superior service comes from years of experience. We offer many kinds of styling services, from precision cutting to advanced colouring for your hue needs.</p>
                <ul>
                    <li>Haircuts</li>
                    <li>Color & Correction</li>
                    <li>Perms</li>
                    <li>Blowdry</li>
                </ul>
            </section>
        </Layout>
    )
}