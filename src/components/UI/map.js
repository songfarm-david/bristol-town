import React from "react"
import GoogleMapReact from 'google-map-react';

import { useStaticQuery, graphql } from "gatsby"

const AnyReactComponent = ({ text }) => <div style={{width:'100%'}}>{text}</div>;

export default function MapBox() {

    const siteMetadata = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const googleKey = { key: `${process.env.GATSBY_GoogleMapKey}` }
    const location = {
        address: '2562 Sinclair Rd, Victoria, BC V8N 1B8',
        lat: 48.461470,
        lng: -123.297833
    }
    const zoom = 15
    // console.log(siteMetadata);

    const handleApiLoaded = (map, maps) => {
        console.log(map, maps);
        let marker = new maps.Marker({
            position: location,
            map,
            title: siteMetadata.site.siteMetadata.title
        })
    }

    return (
        <article id="map_contact">
            <div style={{ height: '14rem', width: '100%', marginBottom: '1rem' }}>
                <GoogleMapReact
                bootstrapURLKeys={googleKey}
                defaultCenter={location}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}>
                <AnyReactComponent
                    lat={location.lat}
                    lng={location.lng} />
                </GoogleMapReact>
            </div>
        </article>
    )

}

