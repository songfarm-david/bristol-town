import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.461470,
      lng: -123.297833
    },
    zoom: 11,
    googleKey: 'AIzaSyAClGrq3Fis5pbVoup9QirieFK0z6VROQA'
  };


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '100%', marginBottom: '1rem' }}>
        <GoogleMapReact
          bootstrapURLKeys={this.props.googleKey}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;