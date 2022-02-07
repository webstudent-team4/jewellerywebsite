import React from 'react';
import { Link } from "react-router-dom"
import '../App.css';
import {FaRegEyeSlash} from "react-icons/fa";
import { ImUser } from "react-icons/im";
import { ImMail2 } from "react-icons/im";
import SignIn from '../sign-in/SignIn';
const SignUp = () => {

  return (
    <div class="container">
        <div class="signup-content">
            <div class="signup-form">
                <h2 class="form-title">Sign up</h2>
                <form method="POST" class="register-form" id="register-form">
                    <div class="form-group">
                        <label for="name"><ImUser/></label>
                        <input type="text" name="name" id="name" placeholder="Your Name"/>
                    </div>
                    <div class="form-group">
                        <label for="email"><ImMail2/></label>
                        <input type="email" name="email" id="email" placeholder="Your Email"/>
                    </div>
                    <div class="form-group">
                        <label for="pass"><FaRegEyeSlash/></label>
                        <input type="password" name="pass" id="pass" placeholder="Password"/>
                    </div>
                    <div class="form-group">
                        <label for="re-pass"><FaRegEyeSlash/></label>
                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                    </div>
                    <Link to="/signin" className='signup-image-link'>Already menber?</Link>
                    <div class="form-group form-button">
                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                    </div>
                </form>
            </div>
            <div class="signup-image">
                <figure><img src="https://i.ibb.co/PCKn1X2/login.jpg" alt="sing up image"/></figure>
               
            </div>
        </div>
    </div>
  );
}

export default SignUp;
