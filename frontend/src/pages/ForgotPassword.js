import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logoWide from '../images/Veda_Logo_Wide.png';
import '../styles/ForgotPassword.css';
//import Signup from '../styles/signup';

function ForgotPassword() {

  return (
    <>
        <div className="PasswordComponent">
            <form className="PasswordForm">
                <div className = "logo-background">
                    <img src= {logoWide} className = "logoWide" alt="logoWide" />
                </div>
                <div className="title">
                    <h2>Forgot Password</h2>
                </div>
                <div>
                    <input type="text" name="email" id="email" placeholder = "Email"/>
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder = "Password" />
                </div>
                <div>
                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder = "Confirm Password"/>
                </div>
                <div>
                    <button type="submit">Update Password</button>
                </div>
                <div>
                    <p>Already have an account? 
                    <Link to="/login" style={{ textDecoration: 'none' }}> Login</Link>
                    </p>
                </div>
            </form>
        </div>
    </>
  )
}

export default ForgotPassword