import React from "react";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

function Fotter() {
  return (
    <div className="fotter">
      <div className="fotterTop">
        <div className="lists">
          <div>
            <ul>
              <li className="first">Menu</li>
              <li>New arrivals</li>
              <li>Best Sellers</li>
              <li>Recently viewd</li>
              <li>Populat this week</li>
              <li>All Products</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="first">Categories</li>
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
              <li>Crockery</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="first">Our company</li>
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Return policy</li>
            </ul>
          </div>
        </div>

        <div className="buttonFotter">
          <p>Join our maliling list</p>
          <div>
            <input type="email" placeholder="your@email.com"></input>
            <button>Sign up</button>
          </div>
        </div>
      </div>
      <div className="fotterBot">
        <p>Copyright 2022 Avion LTD</p>
        <div className="social">
          <CiLinkedin />
          <AiOutlineFacebook />
          <AiOutlineInstagram />
          <CiTwitter />
        </div>
      </div>
    </div>
  );
}

export default Fotter;
