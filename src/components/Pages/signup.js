import React, { Fragment } from "react";
import Banner from "../../Photos/login.png";
import Footer from "../part/footer";
import Header from "../part/header";
import Breadcumb from "../UI/beadcumb";
import "../../CSS/style.css";

const Singup = () => {
  return (
    <Fragment>
      <Header />
      <Breadcumb pageName={"Register"} pageTitle={"Register"} />
      {/* <!-- log in section start --> */}
      <section className="log-in-section section-b-space">
        <div className="container-fluid-lg w-100">
          <div className="row">
            <div className="col-xxl-6 col-xl-5 col-lg-6 d-lg-block d-none ms-auto">
              <div className="image-contain">
                <img src={Banner} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-xxl-4 col-xl-5 col-lg-6 me-auto">
              <div className="log-in-box">
                <div className="log-in-title">
                  <h3>Welcome To Apna Organic</h3>
                  <h4>Create New Account</h4>
                </div>

                <div className="input-box">
                  <form className="row g-4">
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          placeholder="Full Name"
                        />
                        <label for="fullname">Full Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email Address"
                        />
                        <label for="email">Email Address</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                        />
                        <label for="password">Password</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="forgot-box">
                        <div className="form-check ps-0 m-0 remember-box">
                          <input
                            className="checkbox_animated check-box"
                            type="checkbox"
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            for="flexCheckDefault"
                          >
                            I agree with
                            <span>Terms</span> and <span>Privacy</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-animation w-100" type="submit">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>

                <div className="other-log-in">
                  <h6>or</h6>
                </div>

                <div className="log-in-button">
                  <ul>
                    <li>
                      <a
                        href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&amp;flowEntry=ServiceLogin"
                        className="btn google-button w-100"
                      >
                        <img
                          src="../assets/images/inner-page/google.png"
                          className="blur-up lazyload"
                          alt=""
                        />
                        Sign up with Google
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        className="btn google-button w-100"
                      >
                        <img
                          src="../assets/images/inner-page/facebook.png"
                          className="blur-up lazyload"
                          alt=""
                        />{" "}
                        Sign up with Facebook
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="other-log-in">
                  <h6></h6>
                </div>

                <div className="sign-up-box">
                  <h4>Already have an account?</h4>
                  <a href="log-in.html">Log In</a>
                </div>
              </div>
            </div>

            <div className="col-xxl-7 col-xl-6 col-lg-6"></div>
          </div>
        </div>
      </section>
      {/* <!-- log in section end --> */}
      <Footer />
    </Fragment>
  );
};
export default Singup;
