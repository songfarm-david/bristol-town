import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ImageGallery from 'react-image-gallery';
import ThemeButton from "../UI/theme_button"

            

// https://www.npmjs.com/package/react-image-gallery
import "./gallery.scss"

export default function Carousel() {

    const galleryImgs = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "gallery/Matterport Images"}}) {
                edges {
                    node {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    const getSizes = galleryImgs.allFile.edges.map(({node}) => ({   
        original: node.childImageSharp.fluid.src,
        thumbnail: node.childImageSharp.fluid.src,
        sizes: node.childImageSharp.fluid.sizes,
        srcSet: node.childImageSharp.fluid.srcSet
    }))

    return ( 
        <section id="imgGallery">
            <h3 className="screen_reader_text">Image Gallery</h3>
            <ImageGallery 
                items={getSizes} 
                lazyLoad={true} 
                autoPlay={true} 
                slideDuration={500} 
                slideInterval={5000} />
            <ThemeButton 
                className="center" 
                btnText={"Take a virtual tour"} 
                btnTarget="https://my.matterport.com/show/?m=P8KFYtiK6J8"
                target="blank"
                style={{marginTop: '2rem'}} />
        </section>
       
     )

}