import React from 'react';
import logoWide from '../Veda_Logo_Wide.png';
import '../App.css';

function Login() {
  return (
    <>
        <div class = "row">
                <div class="left-side">
                    <img src= {logoWide} class = "logoWide" alt="logoWide" />
                </div>
                <div class="right-side">
                    <form class="loginForm">
                        <div class="title">
                            <h2>Login</h2>
                        </div>
                        <div>
                            <input type="text" name="email" placeholder = "Email"/>
                        </div>
                        <div>
                            <input type="password" name="password" placeholder = "Password"/>
                        </div>
                        <div>
                            <p><a href="#">Forgot Password?</a></p>
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                        <div>
                            <p>Don't have an account yet?
                                <a href="#">Register</a>
                            </p>
                        </div>
                    </form>
                </div>
        </div>
    </>
  )
}

export default Login



{/* <>
<form class="loginForm">
    <div>
        <h2>Log In</h2>
    </div>
    <div>
        <input type="text" name="email" placeholder = "Email"/>
    </div>
    <div>
    <input type="password" name="password" placeholder = "Password"/>
    </div>
    <div>
        <p>Forgot Password?</p>
    </div>
    <div>
        <button type="submit">Sign Up</button>
    </div>
    <div>
        <p>Don't have an account yet? 
            <a href="#">Sign Up</a>
        </p>
    </div>
</form>
</> */}