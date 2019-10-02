import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav>
             <ul className="nav-links">
             <NavLink className="navlink" to="/signup">Sign Up</NavLink>
               
                 
                 <img src= "https://icon-library.net/images/location-icon-transparent-background/location-icon-transparent-background-23.jpg" alt="location" width="60px" height="50px"/>

                 <NavLink className="navlink" to="/login">Login</NavLink>
                
              
                 <img src= "https://icon-library.net/images/location-icon-transparent-background/location-icon-transparent-background-23.jpg" alt="location" width="60px" height="50px"/>
                
                 <NavLink className="navlink" to="/map">Map</NavLink>
                
              
                
                
                 
             </ul>
            </nav>
        
    )
}
