import React from 'react'
import { Link } from 'react-router-dom';




export default function Navbar() {
    return (
        <nav>
             <ul className="nav-links">
                 <Link to ="/signup">
                 <li> Sign Up </li>
                 </Link>
                 <img src= "https://icon-library.net/images/location-icon-transparent-background/location-icon-transparent-background-23.jpg" alt="location" width="60px" height="50px"/>

                 <Link to ="/login">
                 <li> Login </li>
                 </Link>
                 <img src= "https://icon-library.net/images/location-icon-transparent-background/location-icon-transparent-background-23.jpg" alt="location" width="60px" height="50px"/>

                 <Link to ="/map">
                 <li> Map </li>
                 </Link>
                
                
                 
             </ul>
            </nav>
        
    )
}
