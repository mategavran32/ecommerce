import React from "react";

function BottomDesc() {
  return (
    <div className="bottDiv">
      <div className="textBottDiv">
        <div className="innerDiv">
          <h2>
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p>
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market. Handmade,
            and lovingly crafted furniture and homeware is what we live, breathe
            and design so our Chelsea boutique become the hotbed for the London
            interior design community.
          </p>
          <button>Get in touch</button>
        </div>
      </div>
      <div className="imgBottDiv">
        <img
          alt="pigulica"
          src="https://images.unsplash.com/photo-1636490416068-6a9d104bacc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
        ></img>
      </div>
    </div>
  );
}

export default BottomDesc;
