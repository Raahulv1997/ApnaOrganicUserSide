import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./home";
import Cart from "./components/pages/cart";
import Checkout from "./components/pages/checkout";
import Forgot from "./components/pages/forgot";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import Shop from "./components/pages/shop";
import Aboutus from "./components/pages/aboutus";
import Contactus from "./components/pages/contactus";
import Faq from "./components/pages/faq";
import Termcondition from "./components/pages/term_condition";
import ProductDetail from "./components/pages/product-detail";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Wishlist from "./components/pages/wishlist";
import Tracking from "./components/pages/order_tracking";
import Orders from "./components/pages/your_orders";
import Account from "./components/pages/your_account";
import BlogList from "./components/pages/blog_list";
import BlogDetail from "./components/pages/blog_detail";
import Otp from "./components/pages/otp_verification";
import Careers from "./components/pages/careers";
import AuthWrapper from "./components/authwrapper";
import SellerSignUp from "./components/pages/sellersignup";
// import Benners from "./components/common/banners";
// import Header from "./components/common/header";
function App() {
  const [userLogged, setUserLogged] = useState(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("token", userLogged);
  }, [userLogged]);

  const logIn = () => setUserLogged(true);
  const logOut = () => setUserLogged(false);
  console.log("---authapijss  " + userLogged);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login logIn={logIn} />} />
        {/* <Route path="/login" element={<Login />} /> */}

        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/sellersignup" element={<SellerSignUp />} />

        <Route element={<AuthWrapper />}>
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/term_condition" element={<Termcondition />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/order_tracking" element={<Tracking />} />
          <Route path="/your_orders" element={<Orders />} />
          <Route path="/your_account" element={<Account />} />
          <Route path="/blog_list" element={<BlogList />} />
          <Route path="/blog_detail" element={<BlogDetail />} />
          <Route path="/otp_verification" element={<Otp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
