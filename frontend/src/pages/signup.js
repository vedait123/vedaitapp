import React from 'react';
import logoWide from '../Veda_Logo_Wide.png';
import '../App.css';

function Signup() {

    


  return (
    <>
        <div class = "row">
                <div class="left-side">
                    <img src= {logoWide} class = "logoWide" alt="logoWide" />
                </div>
                <div class="right-side">
                    <form class="signupForm">
                        <div class="title">
                            <h2>Sign Up</h2>
                        </div>
                        <div>
                            <input type="text" name="fullname" placeholder = "Full Name"/>
                        </div>
                        <div>
                            <input type="text" name="email" placeholder = "Email"/>
                        </div>
                        <div>
                            <input type="password" name="password" placeholder = "Password"/>
                        </div>
                        <div>
                            <input type="password" name="confirmpassword" placeholder = "Confirm Password"/>
                        </div>
                        <div>
                            <p><input type="checkbox"></input> I agree to the terms & conditions.</p>
                        </div>
                        <div>
                            <button type="submit">Sign Up</button>
                        </div>
                        <div>
                            <p>Already have an account? 
                                <a href="#">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
        </div>
    </>
  )
}

export default Signup