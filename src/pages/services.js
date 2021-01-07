import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Tabbed from "../components/UI/tabs"

export default function Services({location, data}) {

    return (
        <Layout page={location} pageTitle={"Services"}>
            <SEO title="Services | Bristol Town Hair Fashions | Victoria BC"
                description="Haircuts for women, men and children including colour & correction, perms, blowdrys, and expert hairdressers in Victoria, BC. Book an appointment today!" />
            <section className="grid_section">
                <div>
                    <Img fluid={data.file.childImageSharp.fluid} className="page_img" />
                </div>
                <div>
                    <h3>Hair Care & Style</h3>
                    <p className={"text_italic"}>Bristol Town’s superior service comes from years of experience. We offer many kinds of styling services, from precision cutting to advanced colouring for your hue needs.</p>
                    <Tabbed />
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