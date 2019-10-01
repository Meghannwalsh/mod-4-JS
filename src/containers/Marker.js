import React from 'react';



export class Marker extends React.Component {

        componentDidUpdate(prevProps) {
            if ((this.props.map !== prevProps.map) ||
                (this.props.position !== prevProps.position)) {
                this.renderMarker();
            }
        }

        renderMarker = () => {

            let {
                map, google
            } = this.props;
            
            const position = new google.maps.LatLng(this.props.user.lat, this.props.user.lng);

            const pref = {
                map: map,
                position: position
            };
            this.marker = new google.maps.Marker(pref);
        }
        // ...

        render() {
            
            return (
                null
                // <div>
                // {this.renderMarker()}
                // </div>
            )
        }
    }

// Marker.propTypes = {
//     map: React.PropTypes.object
// }

    export default Marker
