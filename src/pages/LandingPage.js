import React from "react";
import "./styling/LandingPage.css";

const LandingPage = () => {
    return (
      <div className="landing-container">
        <nav className="navbar">
          <div className="logo">REVyourSTARTUP</div>
          <div className="nav-links">
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <button className="get-started">Get Started</button>
          </div>
        </nav>
        <header className="header-content">
          <h1>REVyourSTARTUP</h1>
          <h2>Reverse evaluation of your start up: </h2>
           <h2> Fast, Accurate, Everywhere.</h2>
          <div className="buttons">
            <button className="get-started">Get Started</button>
            <button className="about-us">About Us</button>
          </div>
          {/* You'll need to add the image here */}
          <div className="image-container">
            {/* Image goes here */}
          </div>
        </header>
      </div>
    );
  }
  
  export default LandingPage;