import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import User from "./components/User";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
     <Route path='/user' element={<User/>} />
      </Routes>
    </Router >
  );
}

export default App;