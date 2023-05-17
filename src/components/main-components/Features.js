import React from "react";
import { BsTruck, BsCreditCard } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TbLeaf } from "react-icons/tb";
function Features() {
  return (
    <div className="features">
      <h3 className="title">What makes our brand different</h3>
      <div className="featuresData">
        <div className="featureContainer">
          <BsTruck />
          <h4>Next day as standard</h4>
          <p>Order before 3pm and get your order the next day as standard</p>
        </div>
        <div className="featureContainer">
          <AiOutlineCheckCircle />
          <h4>Made by true artisans</h4>
          <p>Handmade crafted goods made with real passion and craftmanship</p>
        </div>
        <div className="featureContainer">
          <BsCreditCard />
          <h4>Unbeatable prices</h4>
          <p>
            For our materials and quality you won't find better prices anywhere
          </p>
        </div>
        <div className="featureContainer">
          <TbLeaf />
          <h4>Recycled packaging</h4>
          <p>
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
