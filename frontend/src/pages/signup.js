import React, { useState } from 'react';
import logoWide from '../images/Veda_Logo_Wide.png';
// import google from '../google.png';
// import github from '../github.png';
// import linkedin from '../linkedin.png';
// import facebook from '../facebook.png';
import '../styles/Signup.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
      fullname: '',
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
      e.preventDefault()
      try {
        const response = await axios.post('http://localhost:8081/signup', formData);
        console.log(response.data);
        alert('Signup successful');
      } catch (error) {
        console.error('Error signing up:', error);
        alert('Signup failed');
      }
    };


  return (
    <>
        <div className="SignupComponent">
            <form onSubmit={handleSubmit} className="signupForm">
                <div className = "logo-background">
                    <img src= {logoWide} className = "logoWide" alt="logoWide" />
                </div>
                <div className="title">
                    <h2>Sign Up</h2>
                </div>
                <div>
                    <input type="text" name="fullname" id="fullname" placeholder = "Full Name" value={formData.fullname} onChange={handleChange} required/>
                </div>
                <div>
                    <input type="text" name="email" id="email" placeholder = "Email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div>
                    <input type="password" name="password" id="password" placeholder = "Password" value={formData.password} onChange={handleChange} required/>
                </div>
                <div>
                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder = "Confirm Password" value={formData.password} onChange={handleChange} required/>
                </div>
                <div>
                    <p><input type="checkbox"></input> I agree to the terms & conditions.</p>
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
                <div>
                    <p>Already have an account? 
                    <Link to="/login" style={{ textDecoration: 'none' }}> Login</Link>
                    </p>
                </div>
                <p> </p>
                {/* <div class="alternate-login">
                    <img src= {google} alt="Google" class="login-icon"></img>
                    <img src={facebook} alt="Facebook" class="login-icon"></img>
                    <img src={github} alt="GitHub" class="login-icon"></img>
                    <img src={linkedin} alt="Linkedin" class="login-icon" style={{width: "50px"}}></img>
                </div> */}
            </form>
        </div>
    </>
  )
}

export default Signup