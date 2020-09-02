import React from 'react';
import './Login.css';
import { loginurl } from './spotify';
function Login() {
    return (
        <div className = "login">
            <img src ="https://snworksceo.imgix.net/dpn-34s/022e6f08-7305-4a00-9174-6163b0412af1.sized-1000x1000.jpg?w=800" alt = ""></img>
            {/*login*/}
            <a href={ loginurl }>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
