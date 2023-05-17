import React, { useState } from "react";
import NewProducts from "./main-components/NewProducts";
import Features from "./main-components/Features";
import Join from "./main-components/Join";
import ProductNavbar from "./ProductNavbar";

function ProductsPage({ products }) {
  const [count, setCount] = useState(1);
  const handleClick = (sign) => {
    console.log(sign);
    sign === "+"
      ? setCount((prev) => prev + 1)
      : count > 0 && setCount((prev) => prev - 1);
  };
  return (
    <div className="productsPage">
      <ProductNavbar />
      <div className="productDetails">
        <div className="productImgDiv">
          <img src={products[3].img} alt="pigulica"></img>
        </div>
        <div className="productDesc">
          <h2>{products[3].name}</h2>
          <h2>${products[3].price}</h2>
          <p>Description</p>
          <p>{products[3].description}</p>
          <div className="dimensionDiv">
            <p>Dimesions</p>
            <div className="dimension">
              <p>Height</p>
              <p>Width</p>
              <p>Depth</p>
              <p>110cm</p>
              <p>75cm</p>
              <p>50cm</p>
            </div>
          </div>
          <div className="buyDiv">
            <div>
              <h2>Amount : </h2>
              <div className="countDiv">
                <button onClick={(e) => handleClick(e.target.innerText)}>
                  -
                </button>
                <p>{count}</p>
                <button onClick={(e) => handleClick(e.target.innerText)}>
                  +
                </button>
              </div>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <NewProducts products={products} />
      <Features />
      <Join />
    </div>
  );
}

export default ProductsPage;
