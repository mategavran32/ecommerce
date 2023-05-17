import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

function ProductNavbar() {
  return (
    <div className="navbar navbarProduct">
      <div className="navbarDiv navbarDivProduct">
        <div className="name nameProduct">Avion</div>
        <div className="links linksProduct">
          <a href="/">Plant pots</a>
          <a href="/">Ceramics</a>
          <a href="/">Tables</a>
          <a href="/">Chairs</a>
          <a href="/">Crockery</a>
          <a href="/">Tableware</a>
          <a href="/">Cutlery</a>
        </div>
        <div className="otherIconsDiv otherIconsDivProduct">
          <BsSearch />
          <AiOutlineShoppingCart />
          <BiUserCircle />
        </div>
      </div>
    </div>
  );
}

export default ProductNavbar;
