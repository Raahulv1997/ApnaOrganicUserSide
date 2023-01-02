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
  const [otp, setotp] = useState(0);
  const [otperror, setOtperror] = useState(false);
  const [passval, setpassval] = useState("");
  const handleFormChange =(e)=>{
    setEmail(e.target.value);
    
    // setForgotInfo({...forgotInfo,[e.target.name]: e.target.value})
  }
  const onPasswordChange = (e) => {
    setpassval(e.target.value);
  };
  const forgotPassword=()=>{
    axios.post(`http://192.168.29.108:5000/user_forgot_password`,{
      email:`${email}`
    }).then(response => {
<<<<<<< HEAD
      // sessionStorage.setItem("useridd" , response.data.user_id)
      navigate('/forgot')
=======
      // localStorage.setItem("useridd" , response.data.user_id)
      navigate('/login')
>>>>>>> 1cc97ff57b7d87f442dcb5a49ee25a123b315aba
     
      // return response;
    })
  }
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
          sessionStorage.setItem("userid", response.data.insertId);
          sessionStorage.setItem("upassword", passval);
          navigate("/your_account");
          return response;
        })
        .catch((error) => {});
    } else {
      setOtperror(true);
    }
  };
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
                    <form className="row g-4"  onSubmit={otp === 0 ? forgotPassword : VerifyOTP}>
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
                        <div className="col-12 mt-3">
                        <button
                          className="btn btn-animation w-100"
                          type="button" onClick={forgotPassword}
                        >
                          Forgot Password
                        </button>
                      </div>
                      </div>
                      <div className="log-in-title">
                      <h4>Enter one time otp</h4>
                    <h5 className="text-content">
                      A code has been sent to your email
                    </h5>
                  </div>
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
                  <div className="col-12 mt-3">
                        <button
                          className="btn btn-animation w-100"
                          type="button" onClick={VerifyOTP}
                        >
                          VerifyOTP
                        </button>
                      </div>
                  {otp === 0 ? (
                      <div className="col-12">
                        <div className="form-floating theme-form-floating">
                          <input
                            type="password"
                            name="password"
                            className={"form-control"}
                            id="password"
                            placeholder="New Password"
                            onChange={(e) => onPasswordChange(e)}
                          />
                          <label htmlFor="password">Enter New Password</label>
                        </div>
                      </div>
                    ) : null}
                      <div className="col-12 mt-3">
                        <button
                          className="btn btn-animation w-100"
                          type="button" onClick={VerifyOTP}
                        >
                          Forgot
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
