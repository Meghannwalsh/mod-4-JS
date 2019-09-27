import React from 'react'

export default function Login(props) {
    return (
        <div className="login-page">
           <h1>Login</h1> 
            <form className="sign-up-form">
                <div className="form-control">
                    <label htmlFor="users-name">Name:</label>
                    <input type="text" name="name"/>
                </div>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}
