import React from "react";
import Hero from "./main-components/Hero";
import Features from "./main-components/Features";
import Products from "./main-components/Products";
import Join from "./main-components/Join";
import NewProducts from "./main-components/NewProducts";
import BottomDesc from "./main-components/BottomDesc";
import Navbar from "./Navbar.js";
function Main({ products }) {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Features />
      <NewProducts products={products} />
      <Products products={products} />
      <Join />
      <BottomDesc />
    </div>
  );
}

export default Main;
