import React from "react"
import GoogleMapReact from 'google-map-react';

import { useStaticQuery, graphql } from "gatsby"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
    console.log(siteMetadata);
    return (
        <article id="map_contact">
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={googleKey}
                defaultCenter={center}
                defaultZoom={zoom}>
                <AnyReactComponent
                    lat={center.lat}
                    lng={center.lng}
                    text={siteMetadata.site.siteMetadata.title} />
                </GoogleMapReact>
            </div>
        </article>
    )

}


// https://www.npmjs.com/package/google-maps-react