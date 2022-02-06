import React from "react";
import "./App.css";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
const App = () => {
  return (
    <div>
      <br /> <br />
      <div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
