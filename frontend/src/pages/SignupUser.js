import React, {useState} from 'react';
import logoWide from '../images/Veda_Logo_Wide.png';
import '../styles/signupuser.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function SignupCopy() {

    


  return (
    <>
        <div class="signupuser">
            <div class = "row">
                    <div class="left-side">
                        <img src= {logoWide} class = "logoWide" alt="logoWide" />
                    </div>
                    <div class="right-side">
                        <form class="SignupUserForm">
                            <div class="title">
                                <h2>SELECT YOUR ACCOUNT TYPE</h2>
                            </div>
                            <div class="userTypes">
                            <div>
                                <button type="submit">
                                <Link to="/signup" style={{ textDecoration: 'none' }}>Student</Link></button>
                            </div>
                            <div>
                                <button type="submit">
                                <Link to="/signup" style={{ textDecoration: 'none' }}>Trainer</Link></button>
                            </div>
                            <div>
                                <button type="submit"><Link to="/signup" style={{ textDecoration: 'none' }}>Admin</Link></button>
                            </div>
                            <div>
                                <button type="submit"><Link to="/signup" style={{ textDecoration: 'none' }}>Management</Link></button>
                            </div>
                            </div>
                            <div className="loginOption">
                                <p>Already have an account? 
                                <Link to="/login" style={{ textDecoration: 'none' }}> Login</Link></p>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </>
  )
}

export default SignupCopy

                            {/* <div>
                                <input type="text" name="student" placeholder = "I am a student"/>
                            </div>
                            <div>
                                <input type="text" name="trainer" placeholder = "I am a trainer"/>
                            </div>
                            <div>
                                <input type="text" name="admin" placeholder = "I am an admin"/>
                            </div>
                            <div>
                                <input type="text" name="management" placeholder = "I am management"/>
                            </div>
                            <div>
                                <p><input type="checkbox"></input> I agree to the terms & conditions.</p>
                            </div> */}