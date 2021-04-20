import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Table from "../components/UI/table"

export default function Services({location, data}) {

    return (
        <Layout page={location} pageTitle={"Hair Colouring"}>
            <SEO title="Hair Colouring | Bristol Town Hair Fashions | Victoria BC"
                description="" />
            <section className="grid_section">
                <div>
                    <Img fluid={data.file.childImageSharp.fluid} className="page_img" alt="hair colouring victoria bc" />
                </div>
                <div>
                    <h3>Hair Care & Style</h3>
                    <p className={"text_italic"}>Bristol Town’s superior service comes from years of experience. We offer many kinds of styling services, from precision cutting to advanced colouring for your hue needs.</p>
                    <Table />
                </div>
            </section>
            
        </Layout>
    )
}

export const servicesPic = graphql`
    query {
        file(name: {eq: "hair-colouring-victoria-bc"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`