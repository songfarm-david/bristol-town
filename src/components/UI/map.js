import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function MapBox({ data }) {

    const siteMetadata = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const googleKey = {key: 'AIzaSyAClGrq3Fis5pbVoup9QirieFK0z6VROQA'}
    const center = {
        lat: '48.461470',
        lng: '-123.297833'
    }
    const zoom = '11'

    return (
        <article id="map_contact">
            
        </article>
    )

}