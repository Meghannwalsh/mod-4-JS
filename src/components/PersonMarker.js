import React from "react";
import {Marker} from "google-maps-react";
import personIcon from "../public/personIcon.png";

export default class PersonMarker extends React.Component {
    render(){
        return(
            <Marker 
            position={this.props.currentlocation}
            icon={personIcon}
            >
            </Marker>
        )
    }
}