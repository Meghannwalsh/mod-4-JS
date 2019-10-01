import React, { Component } from 'react'

export class NavBar2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bgColor: ""
        }
      }
      imageClick = (e) => {
        this.setState({
          bgColor: "red"
        })
      }    

    render() {
        console.log(this.state)
        return (
           
          
                 <div className="nav-bar-2">
                <ul className="nav-ul">
                
                 <li> Red = Working </li>
                 <br/>
                 <img src="https://cdn4.vectorstock.com/i/1000x1000/06/53/profile-avatar-person-icon-graphic-vector-10190653.jpg"  style={{backgroundColor: this.state.bgColor}}
           onClick={this.imageClick} alt="red"width="40px" height="60px"/>
                

                
                 <li> Orange = Busy </li>
                 
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6doCGytJITi1bvzQU7ts6Bknk16LlLB8dKUxX837U1ME7GsJZ" alt="red" width="40px" height="60px"/>
             
                
                 <li> Yellow = Traveling </li>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVqfcp8G0mW00PbeSvIBj7pISuwbrqEXoQkfJfK4T1ArO9pll"alt="red" width="40px" height="60px"/>
                 
                
                 <li> Green = Looking for Plans</li>
                 <img src="https://www.sccpre.cat/mypng/detail/202-2026612_free-medical-appointment-person-icon-png-green.png" alt="red"width="40px" height="60px"/>
                 
                 <li> Blue = Bored </li>
                 <img src="https://icon-library.net/images/icon-for-person/icon-for-person-13.jpg"alt="red"  width="40px" height="60px"/>
                 
                 <li> Purple = Studying </li>
                 <img src="https://cdn1.iconfinder.com/data/icons/user-interface-colorful/48/user-512.png"   style={{backgroundColor: this.state.bgColor}}
                onClick={this.imageClick} alt="red" width="40px" height="60px"/>
                 
                 
             </ul>
            </div>
        
          
        )
    }
}

export default NavBar2
