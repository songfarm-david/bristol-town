import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export default function Services({location, data}) {
    // console.log(location);
    console.log(data);
    return (
        <Layout page={location} pageTitle={"Services"}>
            <section>
                <div>
                    <Img fluid={data.file.childImageSharp.fluid} />
                </div>
                <div>
                    <h3>Hair Care & Style</h3>
                    <p className={"text_italic"}>Bristol Town’s superior service comes from years of experience. We offer many kinds of styling services, from precision cutting to advanced colouring for your hue needs.</p>
                    <ul>
                        <li>Haircuts</li>
                        <li>Color & Correction</li>
                        <li>Perms</li>
                        <li>Blowdry</li>
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

export const servicesPic = graphql`
    query {
        file(name: {eq: "service_img"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`