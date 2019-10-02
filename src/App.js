import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SeeUsers from './Pages/SeeUsers'
import MapContainer from './containers/MapContainer.js'
import Login from './Pages/Login'
import CurrentLocation from './containers/Map';
import NavBar from './components/Navbar';
import SignUp from './Pages/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Welcome from './Pages/Welcome';
import Errors from './components/Errors.js'
import NavBar2 from './components/NavBar2';

// import Map from './Map.js'



class App extends Component {
  state = {
    userList: [],
    usersLocation: {},
    current_user: {},
    
  } 
  
  currentUserHandlerSignUp = (user) => {
   
    this.setState({
      current_user: user
    })
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      
        },
        body: JSON.stringify({ user })
      })
  }

  currentUserHandlerLogin = (user) => {

    this.setState({
      current_user: user
    })
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
        oneUser.lng = currentlocation.lng 
        oneUser.lat = currentlocation.lat
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

  
    console.log("currentlocation in app", currentlocation)

    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        lat: currentlocation.lat,
        lng: currentlocation.lng
       })
    })

  }

  changingCurrentColor = color => {
    const user = this.state.current_user
    // console.log(color)
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        color: color
       })
      
    })
  }
  
    
  
  
  


  render() {
    console.log("UserList", this.state.userList)
    console.log("current user", this.state.current_user)
    console.log("current state", this.state)
    
    

    // console.log(this.state)
    // debugger
    // console.log("app state", this.state.userList)
      return (
        <Router>
        <div className="App">
          <NavBar />
         

        
        <Switch>
        <Route exact path='/' component={Welcome} />

              <Route exact path='/login' component={() => <Login userList={this.state.userList} currentUserHandlerLogin={this.currentUserHandlerLogin}/>} />
             
              <Route exact path='/signup' component={() => <SignUp currentUserHandlerSignUp={this.currentUserHandlerSignUp} />} />

           
          <Route 
          exact path='/map' 
          component={() => <MapContainer current_user={this.state.current_user} markingCurrentLocation={this.markingCurrentLocation}  userList={this.state.userList} changingCurrentColor={this.changingCurrentColor} changingCurrentColor={this.changingCurrentColor}/> }>
          </Route>
          
          
          <Route
           exact path='/users' 
          component={() => <SeeUsers userList={this.state.userList} />} />
        </Switch>
          
          
        </div>
        </Router>
      );
    }
  }

export default App;