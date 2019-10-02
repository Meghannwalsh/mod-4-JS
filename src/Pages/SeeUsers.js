import React, { Component } from 'react';

import User from '../components/User'
import Navbar2 from '../components/NavBar2';



class SeeUsers extends Component {


    render() {

        return (
            <div >
                {this.props.userList.map(user => <User user={user}/>)}
                <Navbar2/>
                
                
            </div>
        
        );
    }
}

export default SeeUsers;