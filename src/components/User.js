import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'



class User extends Component {

    handleCallback = () => {
         this.props.markingCurrentLocation(this.props.currentLocation, this.props.user)
    }




    render() {
        // console.log("User state", this.state)
        console.log("User props", this.props)
        // console.log("user current location", this.props.user.current_location.stringify)
        console.log("current user in User", this.props.current_user)
        console.log("user in User ", this.props.user)
        

        return (


            <div className = "card">

               
               <h1>{this.props.user.name}</h1>
                <h4>{this.props.user.color}</h4>
              

                

             {this.props.current_user[0].id === this.props.user.id
             ?
             this.props.markingCurrentLocation ? <button onClick={this.handleCallback}>Update Current Location</button> : null 
             :
            null} 
            
         
            </div>
        
             
        );
    }
}

export default User;