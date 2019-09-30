import React, { Component } from 'react'
import Navbar2 from '../components/NavBar2';

export class SignUp extends Component {
    state = {
         name: '',
         password: '',
         color: ''

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newPerson = {
            name: this.state.name,
            password: this.state.password,
            color: this.state.color,
            current_location: null
        }
        this.props.currentUserHandlerSignUp(newPerson)
    }

    render() {
        console.log("signUp", this.state)
        return (
            
            <div className="sign-up-page">
               
                <h1>Create an Account</h1>
                <form onSubmit={this.handleSubmit} className="sign-up-form"   >
                    <div className="form-control">
                        <label htmlFor="users-name"> Name: </label>
                        <input name="name" onChange={this.handleChange} type="text" value={this.state.name}/>
                        <br/>
                        <br/>
                        <label htmlFor="users-password"> Password: </label>
                        <input name="password" onChange={this.handleChange} type="text" value={this.state.passwrod} />
                        <br/>
                        <br/>
                        <label htmlFor="users-color"> Status/Color: </label>
                        <input name="color" onChange={this.handleChange} type="text" value={this.state.color} />
                        <br/>
                    </div>
                    
                    <br/>
                   
                    
                <br/>
                    <button type="submit">Sign Up </button>
                </form>
                <br/>
                <img src = "https://i.stack.imgur.com/Ndsyl.gif" width="50px"/>
                <br/>
                <br/>
                <Navbar2/>
            </div>
        )
    }
}

export default SignUp
