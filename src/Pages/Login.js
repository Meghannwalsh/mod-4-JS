import React, { Component } from 'react'

export class Login extends Component {

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
        const currentPerson = this.props.userList.filter(user => {
            return this.state.name === user.name
        })
        this.props.currentUserHandler(currentPerson)
    }

    render(){
        
        return (
            <div className = "login-page">
            <h1>Login</h1>
            <br/>
            <br/>
            <form onSubmit={this.handleSubmit} className="login-form">
                <div className="form-control">
                    <label htmlFor="users-name">Name:</label>
                    <input onChange={this.handleChange} name="name" type="text" value={this.state.name}/>
                </div>
                <br/>
                <br/>
                <div className="form-control">
                    <label htmlFor="users-password">Password:</label>
                    <input onChange={this.handleChange} name="password" type="text" value={this.state.password}/>
                </div>
                
            <br/>
                <button type="submit"> Login </button>
            </form>
            <br/>
            <img src = "https://i.stack.imgur.com/Ndsyl.gif" width="50px"/>
            <img src="https://media3.giphy.com/media/7J1jQSyYkCa93MH1PH/source.gif" width="800px" />
            </div>
    
        
        )
    }
}

export default Login
