import React from "react";
import "./App.css";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Body from "./body/Body";
import Nav from "./nav/Nav";
const App = () => {
  return (
    <div>
      <br /> <br />
      <div>
        <Nav />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<Body />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
