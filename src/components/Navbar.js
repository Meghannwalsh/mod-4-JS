import React from 'react'
import { Link } from 'react-router-dom';




export default function Navbar() {
    return (
        <nav>
             <ul className="nav-links">
                 <Link to ="/signup">
                 <li> Sign Up </li>
                 </Link>
                 <img src= "https://media.giphy.com/media/1oF1MaxVOqrgtG4hev/giphy.gif" width="60px" height="50px"/>

                 <Link to ="/login">
                 <li> Login </li>
                 </Link>
                 <img src= "https://media.giphy.com/media/1oF1MaxVOqrgtG4hev/giphy.gif" width="60px" height="50px"/>

                 <Link to ="/map">
                 <li> Map </li>
                 </Link>
                 <img src= "https://media.giphy.com/media/1oF1MaxVOqrgtG4hev/giphy.gif" width="60px" height="50px"/>
                 <Link to ="/users">
                 <li> See Users Profile </li>
                 </Link>
                
                 
             </ul>
            </nav>
        
    )
}
