import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SeeUsers from './Pages/SeeUsers'
import MapContainer from './containers/MapContainer.js'
import Login from './Pages/Login'
import CurrentLocation from './containers/Map';
import NavBar from './components/Navbar';
import SignUp from './Pages/SignUp';



class App extends Component {
  state = {
    userList: [],
    usersLocation: {}
  }
  

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(resp => resp.json())
    .then(output => {
      this.setState({
        userList: output
      })
    })
  }

  managingState = (currentlocation, user) => { 
    // console.log("manage state location", currentlocation)
    // console.log("user list state", this.state.userList)
    // console.log("user from user", user)
      let newList = []
      this.state.userList.forEach(oneUser => {
      if (oneUser.id === user.id) {
        oneUser.current_location = currentlocation
        newList.push(oneUser)
      } else   {
        newList.push(oneUser)
      }
    })
    return newList
  }

  markingCurrentLocation = (currentlocation, user) => {
    // console.log("user from user in marking", user)
   const newList = this.managingState(currentlocation , user)
    this.setState({
      userList: newList
    })

  }


  render() {
    console.log(this.state)
    debugger
    console.log("app state", this.state.userList)
      return (
        <div className="App">
          <NavBar />
          <SeeUsers userList={this.state.userList}/>
          <MapContainer markingCurrentLocation={this.markingCurrentLocation}  userList={this.state.userList}/>
          <Login />
          <SignUp/>
     
          
        </div>
      );
    }
  }

export default App;
