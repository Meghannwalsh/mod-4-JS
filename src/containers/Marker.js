import React from 'react';



export class Marker extends React.Component {

    
        componentDidUpdate(prevProps) {
            if ((this.props.map !== prevProps.map) ||
                (this.props.position !== prevProps.position)) {
                this.renderMarker();
            }
        }

        componentWillUnmount() {
            if (this.marker) {
                this.marker.setMap(null);
            }
        }

        renderMarker = () => {
           
            let {
                map, google
            } = this.props;

            var contentString = `${this.props.user.name}`
            
            const position = new google.maps.LatLng(this.props.user.lat, this.props.user.lng);

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            const pref = {
                map: map,
                position: position,
                icon: this.props.icon
            };
            var marker = new google.maps.Marker(pref);

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });

        }
    

        

        render() {
            

            console.log("marker props", this.props)
            
            return (
               null
            )
        }
    }




// Marker.propTypes = {
//     map: React.PropTypes.object
// }

    export default Marker
