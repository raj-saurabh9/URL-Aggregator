import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import img from "./img.png"

function Home() {
  return (
    <>
    
      <h1>Home </h1>

      <div class="img">
        <p>ALL LINKS AT ONE PLACE </p>
        <img src={img} align="center" />
      </div>

      <div class="Buttons">
        <div class="login">
          <button type="button" class="btn btn-dark">
            <Link to="/login">Login</Link>
          </button>
        </div>
       
        <div class="signup">
          <Link to="/signup">
            <button type="button" class="btn btn-dark">
              SignUp
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
