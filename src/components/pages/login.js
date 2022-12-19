import React, { Fragment, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Banner from "../../Photos/login.png";
import Footer from "../common/footer";
import Header from "../common/header";
import Breadcumb from "../common/beadcumb";
import "../../CSS/style.css";
import axios from "axios";

const Login = () => {
  const [error,setError]=useState(true);
  const navigate = useNavigate();
  const [credentailval , setcredentailval] = useState({
    user_email:"",
    user_password:""
  })
  const onCredentialChange= (e)=>{
    setcredentailval({...credentailval, [e.target.name]:e.target.value})
  }
  const onSubmitClick = (e) =>{
    // e.prevantDefault();

    console.log("credentailval=====--->"+credentailval)
    axios.post(`http://192.168.29.108:5000/user_login`,credentailval)
    .then(response => {
      if(response.data === false){
      console.log("___------false------"+JSON.stringify(response.data));
      setError(false);
      }
      else{
        console.log("___--------true------"+JSON.stringify(response.data));
        localStorage.setItem("useridd",response.data.user_id);
        navigate('/');
        setError(false);
      }
      // return response;
    }).catch(error => {
      console.log(error.response.data.error)
    })
  }
 
  return (
    <Fragment>
      <Header />
      <Breadcumb pageName={"Login"} pageTitle={"Login"} pageHref={"/"} />
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
                        
                  {/* <form className="row g-4" onSubmit={undefined}> */}
                    <div className="col-12">
                      <div className="form-floating theme-form-floating log-in-form">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          name='user_email'
                          onChange={(e)=>onCredentialChange(e)}
                          value={credentailval.user_email}
                        />
                        
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>

                    <div className="col-12">
                      {/* <div
                        id="otp"
                        className="inputs d-flex flex-row justify-content-center"
                      >
                        <input
                          className="text-center form-control rounded"
                          type="text"
                          id="first"
                          maxLength="1"
                          placeholder="0"
                        />
                        <input
                          className="text-center form-control rounded"
                          type="text"
                          id="second"
                          maxLength="1"
                          placeholder="0"
                        />
                        <input
                          className="text-center form-control rounded"
                          type="text"
                          id="third"
                          maxLength="1"
                          placeholder="0"
                        />
                        <input
                          className="text-center form-control rounded"
                          type="text"
                          id="fourth"
                          maxLength="1"
                          placeholder="0"
                        />
                        <input
                          className="text-center form-control rounded"
                          type="text"
                          id="fifth"
                          maxLength="1"
                          placeholder="0"
                        />
                        <input
                          className="text-center form-control rounded"
                          type="text"
                          id="sixth"
                          maxLength="1"
                          placeholder="0"
                        />
                      </div> */}
                       <div className="form-floating theme-form-floating log-in-form">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="user_password"
                          placeholder="Your Password"
                          onChange={(e)=>onCredentialChange(e)}
                        value={credentailval.user_password}

                        />
                         {error===false ?
                           <p className="mt-1 ms-2 text-danger" type="invalid">
                      Please Enter Correct Password
                    </p>:null}
                        <label htmlFor="password">Password</label>
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
                            htmlFor="flexCheckDefault"
                          >
                            Remember me
                          </label>
                        </div>
                        <NavLink to="/forgot"  className="forgot">
                          Forgot Password? 
                        </NavLink>
                      </div>
                    </div>

                    <div className="col-12">
                      <button
                        className="btn btn-animation w-100 justify-content-center"
                        // type="submit"
                        onClick={(e)=>onSubmitClick(e)}
                      >
                        Log In
                      </button>
                    </div>
                  {/* </form> */}
                </div>

                <div className="other-log-in">
                  <h6>or</h6>
                </div>

                <div className="log-in-button">
                  <ul>
                    <li>
                      <Link
                        to="https://www.google.com/"
                        className="btn google-button w-100"
                      >
                        Log In with Google
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.facebook.com/"
                        className="btn google-button w-100"
                      >
                        Log In with Facebook
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="other-log-in"></div>

                <div className="sign-up-box">
                  <h4>Don't have an account?</h4>
                  <NavLink to="/signup">Sign Up</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};
export default Login;
