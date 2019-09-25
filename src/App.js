import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SeeUsers from './containers/SeeUsers.js'
import Map from './containers/Map.js'
import Login from './components/Login.js'

class App extends Component {
  state = {
    userList: []
  }

  componentDidMount(){
    fetch('http://localhost:3000', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

    })
    .then(resp => resp.json())
    .then(output => {
      this.setState({
        userList: output
      })
    })
  }

  render() {
    console.log(this.state)
      return (
        <div className="App">
          <SeeUsers />
          <Map />
          <Login />
          
        </div>
      );
    }
  }

export default App;
