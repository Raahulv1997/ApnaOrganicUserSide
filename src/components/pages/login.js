import React, { Fragment, useState } from "react";
import { Link, NavLink, useNavigate,useLocation } from "react-router-dom";
import Banner from "../../Photos/login.png";
import Footer from "../common/footer";
import Header from "../common/header";
import Breadcumb from "../common/beadcumb";
import "../../CSS/style.css";
import axios from "axios";

const Login = ({ logIn }) => {
  const [error,setError]=useState(true);
  const [loginerror,setLoginerror]=useState(true);
  const { state } = useLocation();
  const navigate = useNavigate();
  const [credentailval , setcredentailval] = useState({
    user_email:"",
    user_password:""
  })
  const onCredentialChange= (e)=>{
    setcredentailval({...credentailval, [e.target.name]:e.target.value})
  }
  const onSubmitClick = (e) =>{
    const { from } = state || {};
    axios.post(`http://192.168.29.108:5000/user_login`,credentailval)
    .then(response => {
      console.log("--"+response.data.message)
      if(response.data.message === "check_credintials"){
        e.target.user_email.value='';
        e.target.user_password.value='';

      setLoginerror(false)
      }
      if(response.data === false){
        setError(false)
      }
      else if(from === undefined){
        localStorage.setItem("userid",response.data.user_id);
        console.log("----fromelse-------"+from)
        navigate('/');
      //  setError(false);
      }
      else{
        localStorage.setItem("userid",response.data.user_id);
          const { from } = state || {};
          // callback to update state
          console.log("----from-------"+response.data.user_id)
          console.log("-------from.pathname----"+from.pathname)
          console.log("----state-------"+state)
          logIn();
          // redirect back to protected route being accessed
          navigate(from.pathname, { replace: true });
        // }
        // setError(false);
      }
       

      // return response;
    }).catch(error => {

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
                          className="form-control mb-2"
                          id="email"
                          placeholder="Your Email"
                          name='user_email'
                          onChange={(e)=>onCredentialChange(e)}
                          value={credentailval.user_email}
                        />
                        
                        <label htmlFor="email" className="bg-transparent">Email</label>
                        {loginerror===false ?
                           <p className="mt-1 ms-2 text-danger" type="invalid">
                      Please Sign In First
                    </p>:null}
                      </div>
                    </div>

                    <div className="col-12">
                      
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
                        <label htmlFor="password" className="bg-transparent">Password</label>
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
                      <a
                      target={"blank"}
                        href="https://www.google.com/"
                        className="btn google-button w-100"
                      >
                        Log In with Google
                      </a>
                    </li>
                    <li>
                      <a
                      target={"blank"}
                        href="https://www.facebook.com/"
                        className="btn google-button w-100"
                      >
                        Log In with Facebook
                      </a>
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
