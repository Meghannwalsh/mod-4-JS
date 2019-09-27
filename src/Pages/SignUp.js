import React, { Component } from 'react'

export class SignUp extends Component {
    render() {
        return (
            
            <div className="sign-up-page">
               
                <h1>Create an Account</h1>
                <br/>
                <br/>
                <form className="sign-up-form">
                    <div className="form-control">
                        <label htmlFor="users-name">Name:</label>
                        <input name="user[name]" type="text"/>
                    </div>
                    <br/>
                    <br/>
                    <div className="form-control">
                        <label htmlFor="users-password">Password:</label>
                        <input name="user[password]" type="text"/>
                    </div>
                    
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
