import React, { Component } from 'react';



class User extends Component {

    handleCallback = () => {
         this.props.markingCurrentLocation(this.props.currentLocation, this.props.user)
    }


    render() {
        // console.log("User state", this.state)
        // console.log("User props", this.props)
        // console.log("user current location", this.props.user.current_location.stringify)

        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <h4>{this.props.user.color}</h4>
                {/* <h4>{this.props.user.current_location.stringify}</h4> */}
                
                {this.props.markingCurrentLocation ? <button onClick={this.handleCallback}>Test handleCallback</button> : null}

                
            </div>
        );
    }
}

export default User;