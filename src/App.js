import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SeeUsers from './containers/SeeUsers.js'
import MapContainer from './containers/MapContainer.js'
import Login from './components/Login.js'

class App extends Component {
  state = {
    userList: []
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

  render() {
    console.log(this.state)
      return (
        <div className="App">
          <SeeUsers userList={this.state.userList}/>
          <MapContainer />
          <Login />
          
        </div>
      );
    }
  }

export default App;
