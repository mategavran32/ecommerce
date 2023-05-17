import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero">
      <div className="leftPart">
        <h2>The furnitre brand for the future,with timless designs</h2>
        <div className="button">
          <button>
            <Link to="/product">View Collection</Link>
          </button>
        </div>

        <p>
          A new era in eco friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors and a beautiful way to
          display things digitally using modern web technologies.
        </p>
      </div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1682999028840-2457da56071c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt="pigulica"
        ></img>
      </div>
    </div>
  );
}

export default Hero;
