import React, { Component } from 'react';

import User from '../components/User'


class SeeUsers extends Component {


    render() {

        return (
            <div >
                {this.props.userList.map(user => <User user={user}/>)}
            </div>
        );
    }
}

export default SeeUsers;