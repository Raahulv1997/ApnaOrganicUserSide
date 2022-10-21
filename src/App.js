import React from "react";
import "./App.css";
import Home from "./components/Home/home";
import Cart from "./components/Pages/cart";
import Checkout from './components/Pages/checkout';
import Forgot from './components/Pages/forgot';
import Login from './components/Pages/login';
import Signup from './components/Pages/signup';
import Shop from './components/Pages/shop';
import Aboutus from './components/Pages/aboutus';
import Contactus from './components/Pages/contactus';
import Faq from './components/Pages/faq';
import Term_condition from './components/Pages/term_condition'
import Product_Detail from "./components/Pages/product-detail";
import {Route, BrowserRouter, Routes } from "react-router-dom";
import Careers from "./components/Pages/careers";


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
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/term_condition" element={<Term_condition/>} />
        <Route path="/careers" element={<Careers/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
