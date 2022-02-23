import React from 'react';
import {Link}  from "react-router-dom";
import Login from "./Login";
function Home() {
    return (
     <>
     <h1>home </h1>
      <Link to = "/login">Login</Link>
      <Link to = "/signup">SignUp</Link>
     </>
    );
  }
  
  export default Home;