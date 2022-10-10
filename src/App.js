import "./App.css";
import Home from "./components/Home/home";
import Cart from "./components/Pages/cart";
import Checkout from './components/Pages/checkout'
import Forgot from './components/Pages/forgot'
import Login from './components/Pages/login'
import Signup from './components/Pages/signup'
import Shop from './components/Pages/shop'
import Product_Detail from "./components/Pages/product-detail";
import {Route, BrowserRouter, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product-detail" element={<Product_Detail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
     
          </BrowserRouter>
  );
}

export default App;
