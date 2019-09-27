import React from 'react'

export default function Login(props) {
    return (
        <div className="login-page">
        <h1>Login</h1>
        <br/>
        <br/>
        <form className="login-form">
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
            <button type="submit"> Login </button>
        </form>
        <br/>
        <img src = "https://i.stack.imgur.com/Ndsyl.gif" width="50px"/>
    </div>
    )
}
