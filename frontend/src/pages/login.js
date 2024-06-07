import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../styles/login.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import logoWide from '../images/Veda_Logo_Wide.png';
//import google from '../images/google.png';
import github from '../images/github.png';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';


//import './Signup.css';

const Login = () => {
        const [formData, setFormData] = useState({
          email: '',
          password: '',
        });

      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post('http://localhost:8081/login', formData);
            console.log(response.data);
            alert('Login successful');
          } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed');
          }
        };



        const handleSuccess = (credentialResponse) => {
          console.log(credentialResponse);
        }

        const handleError = () => {
          console.log('Login Failed');
        };

    
  return (
    <>
        <div className="loginComponent">
            <form onSubmit={handleSubmit} className="loginForm">
                <div className = "logo-background">
                    <img src= {logoWide} className = "logoWide" alt="logoWide" />
                </div>
                <div className="title">
                    <h2>Login</h2>
                </div>
                <div>
                    <input type="text" name="email" id="email" placeholder = "Email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder = "Password" value={formData.password} onChange={handleChange} required/>
                </div>
                <div>
                  <Link to="/ForgotPassword" style={{ textDecoration: 'none' }}> Forgot Password?</Link>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                <div>
                    <p>Don't have an account? 
                    <Link to="/signup" style={{ textDecoration: 'none' }}> Sign Up</Link>
                    </p>
                </div>
                <div className="alternate-login">
                  <GoogleOAuthProvider clientId = "YOUR_CLIENT_ID">
                    <GoogleLogin onSuccess = {handleSuccess} onError = {handleError} />
                  </GoogleOAuthProvider>
                    <a href="https://www.facebook.com/login/" target='_blank' rel="noreferrer">
                    <img src={facebook} alt="Facebook" className="login-icon"></img>
                    </a>
                    <a href="https://github.com/login" target='_blank' rel="noreferrer">
                    <img src={github} alt="GitHub" className="login-icon"></img>
                    </a>
                    <a href="https://twitter.com/login" target='_blank' rel="noreferrer">
                    <img src={twitter} alt="Twitter" className="login-icon"></img>
                    </a>
                </div>
            </form>
        </div>
    </>
  )
};

export default Login

{/* <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi_gKPSwrmGAxWFb2wGHUkjCL8QFnoECBoQAQ&url=https%3A%2F%2Faccounts.google.com%2Fservicelogin%3Fhl%3Den-gb&usg=AOvVaw2A5O795DiQmOiXvDazhDqw&opi=89978449" target='_blank' rel="noreferrer"> */}
                    {/* <img src= {google} alt="Google" className="login-icon"></img> */}
                                        {/* </a> */}
                                                            {/* <p><a href="#">Forgot Password?</a></p> */}
                                                                                    {/* <a href="signup.js">Sign Up</a> */}