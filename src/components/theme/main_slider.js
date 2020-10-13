import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Fade  } from 'react-slideshow-image';
import "./main_slider.scss";

// https://react-slideshow.herokuapp.com/fade-effect

export default function MainSlider() {

    const slideImages = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "slides"}}) {
                edges {
                    node {
                        id
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

        console.log(slideImages);
    return (
        <div id="mainSlider">
            <div className="slide-container">
                <div className="slide-container_header"><h1>{slideImages.site.siteMetadata.title}</h1></div>
                <Fade arrows={false} duration={4000} pauseOnHover={false} scale={1.5}>
                    {slideImages.allFile.edges.map(({node}, idx) => (
                        <div className="each-fade" key={idx}>
                            <div><Img fluid={node.childImageSharp.fluid} /></div>
                        </div>
                    ))}
                </Fade>
            </div>
            <div id="overlay"></div>
        </div>
    )

}