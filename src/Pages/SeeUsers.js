import React, { Component } from 'react';

import User from '../components/User'
import Navbar2 from '../components/NavBar2';
import NavCSS from '../components/NavBar2CSS.css';



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