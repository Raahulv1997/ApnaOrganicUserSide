import React from "react";
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
import Wishlist from './components/Pages/wishlist'
import Tracking from "./components/Pages/order_tracking";
import Orders from "./components/Pages/your_orders";
import Account from "./components/Pages/your_account";


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
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/order_tracking" element={<Tracking/>} />
        <Route path="/your_orders" element={<Orders/>} />
        <Route path="/your_account" element={<Account/>} />


      </Routes>
     
          </BrowserRouter>
  );
}

export default App;
