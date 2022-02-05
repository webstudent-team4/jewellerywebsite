import React from 'react';
import './App.css';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';
import { Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <div >
      <br/>  <br/> 
      <div>
      <Routes>
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/" element={ <SignIn/> } />
      </Routes>
      </div>
    </div>
  );
}

export default App;
