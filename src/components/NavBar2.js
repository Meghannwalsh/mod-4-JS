import React, { Component } from 'react'

export class NavBar2 extends Component {
 
  changeColorClick = e =>{
    // console.log("navbar2 event", e.target.value)
    const color = e.target.alt
    this.props.changingCurrentColor(color)
  }
   render() {
        console.log(this.state)
        return (
          
          <div  className="nav-bar-2">
                <ul className="nav-ul">
                
                 
                 <li value="red"> Red = Working </li> 
                 <br/>
                 <img onClick={this.changeColorClick} src="http://pixelartmaker.com/art/f3bdc7428cc6f39.png" alt="red"width="40px" height="60px"/>
               

                
                 <li value="orange"> Orange = Busy </li>
                 <img onClick={this.changeColorClick} src="https://www.freeiconspng.com/uploads/orange-square-image-2.png" alt="orange" width="40px" height="60px"/>
                

                
                 <li value="yellow"> Yellow = Traveling </li>
                 <img onClick={this.changeColorClick} src="https://www.slumpys.com/GBS-161.jpg"alt="yellow" width="40px" height="60px"/>
                

                
                 <li value="green"> Green = Looking for Plans</li>
                 <img onClick={this.changeColorClick} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEUycBT///+HpHkxbRAjZADW4dInbAA8dx42cxiOsX5AeiV1n2Hn7uXk6+GDoXX7/PqZuIqQsoBvm1kaZgBYjD56omdIfywlawAIXQCzxqrR3wozAAABXElEQVR4nO3P2U0CUBQAUVTcUHBH7L9RG/DjxcQ4l5ypYM7m4tzb/PfAn0c4P8L5Ec6PcH6E8yOcH+H8COf3g/DpcWr76/2ScH///HI/ste3w5Lw+v3jYWbH7eWa8Oa4u53Y3dWycHe3GRkhYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7ERL2IyTsR0jYj5CwHyFhP0LCfoSE/QgJ+xES9iMk7EdI2I+QsB8hYT9Cwn6EhP0ICfsREvYjJOxHSNiPkLAfIWE/QsJ+hIT9CAn7LQs/b/979ZctC9+uprYqPG2ndjosCfeHy6kdvpaEZxbh/AjnRzg/wvkRzo9wfoTzI5zf+Qu/AdcNeWeRqPaZAAAAAElFTkSuQmCC" alt="green"width="40px" height="60px"/>
               

                
                 <li value="blue"> Blue = Bored </li>
                 <img onClick={this.changeColorClick}  src="https://www.freeiconspng.com/uploads/blue-square-image-3.png"alt="blue"  width="40px" height="60px"/>
                 

                
                 <li value="purple" > Purple = Studying </li>
                 <img onClick={this.changeColorClick} src="https://www.slumpys.com/GBS-142_family.jpg"  
               alt="purple" width="40px" height="60px"/>
                
                 
             </ul>
            </div>
        
          
        )
    }
}

export default NavBar2
