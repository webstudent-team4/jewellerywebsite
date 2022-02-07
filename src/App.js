import React from "react";
import "./App.css";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-up/SignUp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Body from "./body/Body";

const App = () => {
  return (

      <div>
        <Navbar/>
		<br/>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<Body />} />
        </Routes>
		<Footer/>
      </div>
 
  );
};

export default App;
