import Fotter from "./components/Fotter.js";
import Main from "./components/Main.js";
import ProductsPage from "./components/ProductsPage.js";
import { Route, Routes } from "react-router-dom";

function App() {
  const products = [
    {
      name: "The Polar suede sofa",
      price: 1000,
      description:
        "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.Premium material Handmade upholstery Quality timeless classic",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: 1,
    },
    {
      name: "The Dandy chair",
      price: 240,
      description:
        "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.Premium material Handmade upholstery Quality timeless classic",
      img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      id: 2,
    },
    {
      name: "The big chair",
      price: 199,
      description:
        "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.Premium material Handmade upholstery Quality timeless classic",
      img: "https://images.unsplash.com/photo-1594224457860-23bdb45f8e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      id: 3,
    },
    {
      name: "The chairomatic",
      price: 399,
      description:
        "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.Premium material Handmade upholstery Quality timeless classic",
      img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      id: 4,
    },
    {
      name: "The golden lamps",
      price: 999,
      description:
        "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.Premium material Handmade upholstery Quality timeless classic",
      img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      id: 5,
    },
  ];
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main products={products} />} />
        <Route
          exact
          path="/product"
          element={<ProductsPage products={products} />}
        />
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
