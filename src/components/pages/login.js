import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../../Photos/login.png'
import Footer from '../common/footer'
import Header from '../common/header'
import Breadcumb from '../common/beadcumb'
import '../../CSS/style.css'

const Login=()=>{
    return (
        <Fragment>
            <Header />
            <Breadcumb pageName={'Login'} pageTitle={'Login'} pageHref={"/"} />
            {/* <!-- log in section start --> */}
            <section className="log-in-section background-image-2 section-b-space">
                <div className="container-fluid-lg w-100">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
                            <div className="image-contain">
                                <img src={Banner} className="img-fluid w-100" alt="" />
                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-5 col-lg-6 me-auto">
                            <div className="log-in-box">
                                <div className="log-in-title">
                                    <h3>Welcome To Apna Organic</h3>
                                    <h4>Log In Your Account</h4>
                                </div>

                                <div className="input-box">
                                    <form className="row g-4">
                                        <div className="col-12">
                                            <div className="form-floating theme-form-floating log-in-form">
                                                <input type="email" className="form-control" id="email" placeholder="Your Phone Number" />
                                                <label for="email">Phone Number</label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                        <div
                    id="otp"
                    className="inputs d-flex flex-row justify-content-center"
                  >
                    <input
                      className="text-center form-control rounded"
                      type="text"
                      id="first"
                      maxlength="1"
                      placeholder="0"
                    />
                    <input
                      className="text-center form-control rounded"
                      type="text"
                      id="second"
                      maxlength="1"
                      placeholder="0"
                    />
                    <input
                      className="text-center form-control rounded"
                      type="text"
                      id="third"
                      maxlength="1"
                      placeholder="0"
                    />
                    <input
                      className="text-center form-control rounded"
                      type="text"
                      id="fourth"
                      maxlength="1"
                      placeholder="0"
                    />
                    <input
                      className="text-center form-control rounded"
                      type="text"
                      id="fifth"
                      maxlength="1"
                      placeholder="0"
                    />
                    <input
                      className="text-center form-control rounded"
                      type="text"
                      id="sixth"
                      maxlength="1"
                      placeholder="0"
                    />
                  </div>
                                            {/* <div className="form-floating theme-form-floating log-in-form">
                                                <input type="password" className="form-control" id="password"
                                                    placeholder="Password" />
                                                <label for="password">Password</label>
                                            </div> */}
                                        </div>

                                        <div className="col-12">
                                            <div className="forgot-box">
                                                <div className="form-check ps-0 m-0 remember-box">
                                                    <input className="checkbox_animated check-box" type="checkbox"
                                                        id="flexCheckDefault" />
                                                    <label className="form-check-label" for="flexCheckDefault">Remember me</label>
                                                </div>
                                                <NavLink to="/forgot" className="forgot">Forgot Password?</NavLink>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="btn btn-animation w-100 justify-content-center" type="submit">Log
                                                In</button>
                                        </div>
                                    </form>
                                </div>

                                <div className="other-log-in">
                                    <h6>or</h6>
                                </div>

                                <div className="log-in-button">
                                    <ul>
                                        <li>
                                            <a href="https://www.google.com/" className="btn google-button w-100">
                                                 Log In with Google
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/" className="btn google-button w-100">
                                                Log In with Facebook
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="other-log-in">
                                    <h6></h6>
                                </div>

                                <div className="sign-up-box">
                                    <h4>Don't have an account?</h4>
                                    <NavLink to="/signup">Sign Up</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- log in section end --> */}
            <Footer />
        </Fragment>
    )
}
export default Login;