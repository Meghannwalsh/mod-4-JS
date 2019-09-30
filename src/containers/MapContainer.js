import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      draggable:true,
      title:"Drag me!"
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  
  render() {
    
    console.log("MapContainer state", this.state)
    console.log("MapContainer props", this.props)
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        markingCurrentLocation={this.props.markingCurrentLocation}
        userList={this.props.userList}
      >
        
        <Marker onClick={this.onMarkerClick}
        icon={"https://static.thenounproject.com/png/5024-200.png" }
       name={'current location'} />
  
         
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
            <div><p> <a href="users">
            "/users"</a> </p>'
          </div>
        <div>
            <p>Hi</p>
            <p>☀️☀️☀️☀️</p>
            <h3>🌺🌺</h3>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB_8dUWPoYGWEgEAMyPNhqXZjnp2GW4cBU'
})(MapContainer);