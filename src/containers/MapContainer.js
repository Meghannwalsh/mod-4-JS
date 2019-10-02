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
      

      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        markingCurrentLocation={this.props.markingCurrentLocation}
        userList={this.props.userList}
        current_user={this.props.current_user}
        changingCurrentColor={this.props.changingCurrentColor}
      >
     
        
        <Marker onClick={this.onMarkerClick}
          var icon = {
            
            {
              
             
            path: "M22 10h-3c-2.82 0-5 1.719-5 4.587v12.413c0 2 3 2 3 0v-12h1v32c0 1.233.768 2 2 2 1.235 0 2-.767 2-2v-37zm13 15l-4.017-10.357c-.349-2.321-2.693-4.643-5.368-4.643h-2.615v23.783c.5.002 1 .075 1 .217v13c0 1.04.917 2 2 2 1.086 0 2-.961 2-2v-13h3.869c.362 0 1.044-.654 1.044-1 0-.08.029-.931 0-1l-5.909-16.237-.034-.167c0-.237.199-.429.447-.429.211 0 .388.141.435.329l4.017 10.504c.267.601 1.365 1 2.087 1 .965 0 1.065-1.895 1.044-2z",
            fillColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),
            fillOpacity: 4,
            
          }
          

         }
         name={'current location'} >
  
         
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}>
         
        </InfoWindow>
        </Marker>
        
        {this.props.userList.map(user => {
           return  <PersonMarker user={user} icon={{
            path: "M22 10h-3c-2.82 0-5 1.719-5 4.587v12.413c0 2 3 2 3 0v-12h1v32c0 1.233.768 2 2 2 1.235 0 2-.767 2-2v-37zm13 15l-4.017-10.357c-.349-2.321-2.693-4.643-5.368-4.643h-2.615v23.783c.5.002 1 .075 1 .217v13c0 1.04.917 2 2 2 1.086 0 2-.961 2-2v-13h3.869c.362 0 1.044-.654 1.044-1 0-.08.029-.931 0-1l-5.909-16.237-.034-.167c0-.237.199-.429.447-.429.211 0 .388.141.435.329l4.017 10.504c.267.601 1.365 1 2.087 1 .965 0 1.065-1.895 1.044-2z",
            fillColor: '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),
            fillOpacity: 4
             }
            }
            />
        })}
        
        
      </CurrentLocation>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyB_8dUWPoYGWEgEAMyPNhqXZjnp2GW4cBU'
})(MapContainer);