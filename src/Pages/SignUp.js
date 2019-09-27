import React, { Component } from 'react'

export class SignUp extends Component {
    render() {
        return (
            <div className="sign-up-page">
                <h1>Create an Account</h1>
                <form className="sign-up-form">
                    <div className="form-control">
                        <label htmlFor="users-name">Name:</label>
                        <input name="user[name]" type="text"/>
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
                
            </div>
        )
    }
}

export default SignUp
