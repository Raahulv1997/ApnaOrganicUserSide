import React, { Fragment } from "react";
import Banner from "../../Photos/login.png";
import Footer from "../common/footer";
import Header from "../common/header";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Countdown from "react-countdown";
// import Breadcumb from "../common/beadcumb";
import "../../CSS/style.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Singup = () => {
  const [otp, setotp] = useState(0);
  const [email, setemail] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [otperror, setOtperror] = useState(false);
  const [passval, setpassval] = useState("");
  const [validated, setValidated] = useState(false);
  // countdown
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      setOtperror("resend");
      // Render a complete state
      // return <Completionist />;
    } else {
      // Render a countdown
      return (
        <h4 className="mt-2 ms-2 text-danger mx-3">
          {hours}:{minutes}:{seconds}
        </h4>
      );
    }
  };
  // end countdown
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };


  const navigate = useNavigate();

  const SignUpUser = (e) => {
    e.preventDefault();
    setemail(e.target.email.value);
    setemailerror("spinner");
    axios
      .post(`${process.env.REACT_APP_BASEURL}/sign_up`, {
        email: e.target.email.value,
      })
      .then((response) => {
        if (response.data.response === "Email Already Exist") {
          setemailerror("Already");
          e.target.password.value = "";
        } else {
          setotp("signup");
          setemailerror("");
        }
        return response;
      })
      .catch((error) => {});
  };

  const onPasswordChange = (e) => {
    setpassval(e.target.value);
    if (otperror === "resend") {
      setpassval("");
    }
    setemailerror("");
  };
  const OnOTpChange = (e) => {
    setotp(e.target.value);
    setemailerror("");
    setOtperror("");
  };


  const VerifyOTP = (e) => {
    e.preventDefault();
    // if (e.target.otpinput.value == otp) {
    if (otp === "" || otp === "signup") {
      setOtperror("blank");
    } else {
      setOtperror("timer");
      axios
        .post(`${process.env.REACT_APP_BASEURL}/otp_verification`, {
          email: email,
          otp: Number(otp),
          password: passval,
        })
        .then((response) => {
          if (response.data.message === "otp not matched") {
            setOtperror("invalid otp");
          } else {
            localStorage.setItem("userid", response.data.user_id.insertId);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("upassword", passval);
            navigate("/your_account");
            return response;
          }
        })
        .catch((error) => {});
    }
  };

  return (
    <Fragment>
      <Header />
      {/* <Breadcumb pageName={"Register"} pageTitle={"Register"} /> */}
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
                  <form
                    className="row g-4"
                    onSubmit={
                      otp === 0 || otperror === "resend"
                        ? SignUpUser
                        : VerifyOTP
                    }
                  >
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="email"
                          className={
                            otp === 0 ? "form-control" : "form-control d-none"
                          }
                          id="email"
                          placeholder="Email Address"
                          name="emailid"
                          required
                          onChange={(e) => onPasswordChange(e)}
                        />{" "}
                        {emailerror === "Already" ? (
                          <p className="text-danger">
                            User Already Exist. Please Login
                          </p>
                        ) : null}
                        <input
                          type="number"
                          className={
                            otp === 0 ? "form-control d-none" : "form-control"
                          }
                          id="otp"
                          placeholder="Enter OTP"
                          name="otpinput"
                          onChange={(e) => OnOTpChange(e)}
                        />
                        <label className="text-start" htmlFor="email">
                          {otp === 0 ? "Email Address" : "Enter OTP"}
                        </label>
                      </div>
                      {otperror === "timer" ? (
                        <Countdown
                          date={Date.now() + 30000}
                          renderer={renderer}
                        />
                      ) : null}
                      {otperror === "invalid otp" ? (
                        <p className="text-danger">{"Invalid Otp"}</p>
                      ) : otperror === "blank" ? (
                        <p className="text-danger">{"Please Fill Otp"}</p>
                      ) : null}
                    </div>

                    {otp === 0 ? (
                      <div className="col-12">
                        <div className="form-floating theme-form-floating">
                          <input
                            required
                            type="password"
                            name="password"
                            className={"form-control"}
                            id="password"
                            placeholder="Password"
                            onChange={(e) => onPasswordChange(e)}
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                      </div>
                    ) : null}

                    <div className={otp === 0 ? "col-12" : "col-12 d-none"}>
                      <div className="forgot-box">
                        <div className="form-check ps-0 m-0 remember-box">
                          <input
                            className="checkbox_animated check-box"
                            type="checkbox"
                            id="flexCheckDefault"
                            name="termscheck"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            I agree with
                            <span>Terms</span> and <span>Privacy</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      {emailerror === "spinner" ? (
                        <button
                          className="btn btn-animation w-100"
                          type="submit"
                          disabled
                        >
                          <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </Spinner>
                        </button>
                      ) : otperror === "timer" ? (
                        <button
                          className="btn btn-animation w-100"
                          type="submit"
                          disabled
                        >
                          {otp === 0 ? "Sign Up" : "Verify Otp"}
                        </button>
                      ) : (
                        <button
                          className="btn btn-animation w-100"
                          type="submit"
                        >
                          {otp === 0
                            ? "Sign Up"
                            : otperror === "resend"
                            ? "Resend"
                            : "Verify Otp"}
                        </button>
                      )}
                    </div>
                  </form>
                </div>

                <div
                  className={otp === 0 ? "other-log-in" : "other-log-in d-none"}
                >
                  <h6>or</h6>
                </div>

                <div
                  className={
                    otp === 0 ? "log-in-button" : "log-in-button d-none"
                  }
                >
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

                <div className="other-log-in"></div>

                <div className="sign-up-box">
                  <h4>Already have an account?</h4>

                  
                  
                  <button
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="btn btn-success my-1"
                  >
                    {" "}
                    Log In
                  </button>
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
