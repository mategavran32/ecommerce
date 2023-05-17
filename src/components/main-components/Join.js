import React from "react";

function Join() {
  return (
    <div className="joinContainer">
      <div className="smallerDiv">
        <div className="textDiv">
          <h1>Join the club and get the benefits</h1>
          <p>
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
        </div>
        <div className="emailDiv">
          <input type="email" placeholder="your@email.com"></input>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Join;
