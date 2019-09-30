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



class App extends Component {
  state = {
    userList: [],
    usersLocation: {},
    current_user: {}
  } 
  
  currentUserHandler = (user) => {
    this.setState({
      current_user: user
    })

    if (!this.state.userList.includes(user)){
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify({ user })
      })
    
    }
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
    console.log("amount of users", this.state.userList)
    // console.log(this.state)
    // debugger
    // console.log("app state", this.state.userList)
      return (
        <Router>
        <div className="App">
          <NavBar />
        
        <Switch>
        <Route exact path='/' component={Welcome} />
          <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={() => <SignUp currentUserHandler={this.currentUserHandler}/>} />

           
          <Route 
          exact path='/map' 
          component={() => <MapContainer markingCurrentLocation={this.markingCurrentLocation}  userList={this.state.userList} /> }>
          </Route>
          
          <Route 
          exact path='/map' 
          component={() => <MapContainer markingCurrentLocation={this.markingCurrentLocation}  userList={this.state.userList} /> }>
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
