import React from "react";
import { Link } from "react-router-dom";
function Products({ products }) {
  const firstThree = products.slice(0, 3);
  return (
    <div className="products">
      <div>
        <h1 className="popular">Our pouplar products</h1>
      </div>
      <div className="productsDiv">
        {firstThree.map((element) => (
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

export default Products;
