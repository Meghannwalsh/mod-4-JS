import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map';
import User from "../components/User.js"
import PersonMarker from './Marker.js'
import PersonInfoWindow from './PersonInfoWindow.js'

export class MapContainer extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    onMapClick() {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    }

    // onMarkerClick = () => {
    //   // console.log("props in onMarkerClikc",props)
    //   // console.log("marker in onMarkerClick", marker)
    //   console.log("We are in Marker Click")
    //   this.setState({
    //     // selectedPlace: props,
    //     // activeMarker: marker,
    //     showingInfoWindow: true,
        
    //   })}

  onMarkerClick = (props, marker, e) => {
    console.log("I'm here")
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  })
  }

    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

  

  
  render() {
  const style = {
    width: '100vw',
    height: '100vh'
  }
    // const markerStyle = {height: '100px', width: '100px', zIndex: '100'}

    console.log("show info window", this.state.showingInfoWindow)
    
    // console.log("MapContainer state", this.state)
    // console.log("MapContainer props", this.props)
    return (
      <div style={style}>
          <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
            markingCurrentLocation={this.props.markingCurrentLocation}
            userList={this.props.userList}
            current_user={this.props.current_user}
            onClick={this.onMapClick}
          >
        
            
            <Marker 
            onClick={this.onMarkerClick} 
            // icon={"https://static.thenounproject.com/png/5024-200.png" }
          
            name={'current location'} >
      
            
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}>
              
              
              <div>
              
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
            </Marker>
            
            {this.props.userList.map(user => {
              return <PersonMarker user={user} name={'Dolores park'} onClick={this.onMarkerClick}>
                {/* <PersonInfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                  onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </PersonInfoWindow> */}
                </PersonMarker>

              
            })}

            
          </CurrentLocation>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB_8dUWPoYGWEgEAMyPNhqXZjnp2GW4cBU'
})(MapContainer);