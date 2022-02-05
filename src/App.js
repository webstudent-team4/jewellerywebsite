import React from 'react';
import './App.css';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';
import Body from './body/Body';
import Nav from './nav/Nav';
import { Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <div >
      <br/>  <br/> 
      <div>
        <Nav/>
      <Routes>
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/signin" element={ <SignIn/> } />
        <Route path="/" element={ <Body/> } />
      </Routes>
      </div>
    </div>
  );
}

export default App;
