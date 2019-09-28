import React, { Component } from 'react'

export class SignUp extends Component {
    state = {
         name: '',
         password: ''

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
            color: "blue",
            current_location: null
        }
        this.props.currentUserHandler(newPerson)
    }

    render() {
        console.log("signUp", this.state)
        return (
            
            <div className="sign-up-page">
               
                <h1>Create an Account</h1>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <div className="form-control">
                        <label htmlFor="users-name">Name:</label>
                        <input name="name" onChange={this.handleChange} type="text" value={this.state.name}/>
                        <label htmlFor="users-password">Password:</label>
                        <input name="password" onChange={this.handleChange} type="text" value={this.state.passwrod} />
                    </div>
                    <br/>
                    <br/>
                   
                    
                <br/>
                    <button type="submit">Sign Up</button>
                </form>
                <br/>
                <img src = "https://i.stack.imgur.com/Ndsyl.gif" width="50px"/>
                <br/>
                <br/>
               
            </div>
        )
    }
}

export default SignUp
