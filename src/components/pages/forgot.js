import React, { Fragment } from "react";
import Banner from "../../Photos/login.png";
import Footer from "../common/footer";
import Header from "../common/header";
import Breadcumb from "../common/beadcumb";
import "../../CSS/style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Forgot = () => {
  const navigate = useNavigate();
  const[email,setEmail]=useState([]);
  const handleFormChange =(e)=>{
    setEmail(e.target.value);
    
    // setForgotInfo({...forgotInfo,[e.target.name]: e.target.value})
  }
  const forgotPassword=()=>{
    axios.post(`http://192.168.29.108:5000/user_forgot_password`,{
      email:`${email}`
    }).then(response => {
      // localStorage.setItem("useridd" , response.data.user_id)
      navigate('/login')
     
      // return response;
    })
  }
  return (
    <Fragment>
      <Header />
      <Breadcumb pageName={"Forgot Passwrod"} pageTitle={"Forgot Passwrod"} />
      {/* <!-- log in section start --> */}
      <section className="log-in-section section-b-space forgot-section">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img src={Banner} className="img-fluid" alt=""/>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6 me-auto">
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="log-in-box">
                  <div className="log-in-title">
                    <h3>Welcome To Apna Organic</h3>
                    <h4>Forgot your password</h4>
                  </div>

                  <div className="input-box">
                    <form className="row g-4">
                      <div className="col-12">
                        <div className="form-floating theme-form-floating log-in-form">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email Address"
                            onChange={(e) => handleFormChange(e)} value={email} name={'email'}
                          />
                          <label htmlFor="email">Email Address</label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button
                          className="btn btn-animation w-100"
                          type="button" onClick={forgotPassword}
                        >
                          Forgot Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- log in section end --> */}
      <Footer />
    </Fragment>
  );
};
export default Forgot;
