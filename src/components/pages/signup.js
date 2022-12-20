import React, { Fragment } from "react";
import Banner from "../../Photos/login.png";
import Footer from "../common/footer";
import Header from "../common/header";
import axios from "axios";
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
    // alert("SINGNNN"+email)
    axios
      .post(`${process.env.REACT_APP_BASEURL}/sign_up`, {
        email: e.target.email.value,
      })
      .then((response) => {
        if (response.data === false) {
          setemailerror("already");
          e.target.email.value = "";
        } else {
          setotp(response.data);
        }
        console.log("shiguppp"+response.data);
        return response;
      })
      .catch((error) => {
      });
  };
  const onPasswordChange = (e) => {
    setpassval(e.target.value);
  };
  const VerifyOTP = (e) => {
    e.preventDefault();
    if (e.target.otpinput.value == otp) {
      axios
        .post(`${process.env.REACT_APP_BASEURL}/otp_verification`, {
          email: email,
          otp: otp,
          password: passval,
        })
        .then((response) => {
          localStorage.setItem("userid", response.data.insertId);          
          localStorage.setItem("upassword", passval);

          navigate("/your_account");
          return response;
        })
        .catch((error) => {
        });

    } else {
      setOtperror(true);
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
                    onSubmit={otp === 0 ? SignUpUser : VerifyOTP}
                  >
                    {/* <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          placeholder="Full Name"
                        />
                        <label htmlFor="fullname">Full Name</label>
                      </div>
                    </div> */}
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
                        />
                        {emailerror === "already" ? (
                          <p className="text-danger">
                            {"User Already Exist. Please Login"}
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
                        />
                        <label className="text-start" htmlFor="email">
                          {otp === 0 ? "Email Address" : "Enter OTP"}
                        </label>
                      </div>
                      {otperror ? (
                        <p className="text-danger">{"Invalid Otp"}</p>
                      ) : null}
                    </div>
                    {otp === 0 ?
                    <div className="col-12">
                      <div className="form-floating theme-form-floating">
                        <input
                          type="password"
                          name="password"
                          className={
                          "form-control"
                          }
                          id="password"
                          placeholder="Password"
                          onChange={(e) => onPasswordChange(e)}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div> : null}

                    <div className={otp === 0 ? "col-12" : "col-12 d-none"}>
                      <div className="forgot-box">
                        <div className="form-check ps-0 m-0 remember-box">
                          <input
                            className="checkbox_animated check-box"
                            type="checkbox"
                            id="flexCheckDefault"
                            name="termscheck"
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
                      <button className="btn btn-animation w-100" type="submit">
                        {otp === 0 ? "Sign Up" : "Verify Otp"}
                      </button>
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
