import React, { Component } from 'react';


class User extends Component {


    render() {

        return (
            <div >
                <h1>{this.props.user.name}</h1>
                <h4>{this.props.user.color}</h4>
                <h4>{this.props.user.current_location}</h4>
            </div>
        );
    }
}

export default User;