import React from "react";
import { SocialIcon } from "react-social-icons";
import { FaRegEyeSlash } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import { Link } from "react-router-dom";
import "../App.css";
const SignIn = () => {
  let width = window.innerWidth;
  return (
    <div
      class="container"
      style={{ marginTop: width < 401 ? "100px" : "200px" }}
    >
      <div class="signin-content">
        <div class="signin-image">
          <figure>
            <img
              id="optionalimg"
              src="https://i.ibb.co/PCKn1X2/login.jpg"
              alt=" "
            />
          </figure>
        </div>

        <div class="signin-form">
          <h2 class="form-title">Login</h2>
          <form method="POST" class="register-form" id="login-form">
            <div class="form-group">
              <label for="your_name">
                <ImUser />
              </label>
              <input
                type="text"
                name="your_name"
                id="your_name"
                placeholder="Your Name"
              />
            </div>
            <div class="form-group">
              <label for="your_pass">
                {" "}
                <FaRegEyeSlash />
              </label>
              <input
                type="password"
                name="your_pass"
                id="your_pass"
                placeholder="Password"
              />
            </div>
            <Link to="/signup" className="signup-image-link">
              Create account
            </Link>

            <div class="form-group form-button">
              <input
                type="submit"
                name="signin"
                id="signin"
                class="form-submit"
                value="Log in"
              />
            </div>
          </form>
          <div class="social-login">
            <ul class="socials">
              <li>
                <SocialIcon url="https://facebook.com/#" />
              </li>
              <li>
                <SocialIcon url="https://google.com/#" />
              </li>
              <li>
                <SocialIcon url="https://twitter.com/#" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
