import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "./brand_banner.scss"

export default function BrandBanner() {
    const brandImage = useStaticQuery(
        graphql`
            query {
                allFile(filter: {relativeDirectory: {eq: "brands"}}) {
                    edges {
                        node {
                            id
                            name
                            ext
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                  }
            }
        `
    )

    console.log(brandImage.allFile);
    return (
        <section id="brand_section" style={{padding:'1rem'}}>
            {brandImage.allFile.edges.map(({node}, idx) => (
                <div className="fixed_img_container">
                    <Img className={"fixed_img_container__img"} key={idx} fluid={node.childImageSharp.fluid} alt={node.name} />
                </div>
            ))}
        </section>
    )
}