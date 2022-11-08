import React from "react";
import "./App.css";
import Home from "./home";
import Cart from "./components/pages/cart";
import Checkout from './components/pages/checkout';
import Forgot from './components/pages/forgot';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import Shop from './components/pages/shop';
import Aboutus from './components/pages/aboutus';
import Contactus from './components/pages/contactus';
import Faq from './components/pages/faq';
import Termcondition from './components/pages/term_condition'
import ProductDetail from "./components/pages/product-detail";
import {Route, BrowserRouter, Routes } from "react-router-dom";
import Wishlist from './components/pages/wishlist'
import Tracking from "./components/pages/order_tracking";
import Orders from "./components/pages/your_orders";
import Account from "./components/pages/your_account";
import BlogList from "./components/pages/blog_list";
import BlogDetail from "./components/pages/blog_detail";
import Otp from "./components/pages/otp_verification";
import Careers from "./components/pages/careers";




function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product-detail" element={<ProductDetail/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/term_condition" element={<Termcondition/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/order_tracking" element={<Tracking/>} />
        <Route path="/your_orders" element={<Orders/>} />
        <Route path="/your_account" element={<Account/>} />
        <Route path="/blog_list" element={<BlogList/>} />
        <Route path="/blog_detail" element={<BlogDetail/>} />
        <Route path="/otp_verification" element={<Otp/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
