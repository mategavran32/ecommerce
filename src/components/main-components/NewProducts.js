import React from "react";
import { Link } from "react-router-dom";
function NewProducts({ products }) {
  const firstFour = products.slice(1, 5);
  return (
    <div className="products">
      <div>
        <h1 className="popular">New products</h1>
      </div>
      <div className="productsDiv2">
        {firstFour.map((element) => (
          <div className="product" key={element.id}>
            <div className="imgDiv">
              <img src={element.img} alt="pigluica"></img>
            </div>
            <div>{element.name}</div>
            <p>${element.price}</p>
          </div>
        ))}
      </div>
      <div className="buttonDiv">
        <button>
          <Link to="/product">View Collection</Link>
        </button>
      </div>
    </div>
  );
}

export default NewProducts;
