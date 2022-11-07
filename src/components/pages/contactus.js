import React, { Fragment } from "react";
import Footer from "../common/footer";
import Header from '../common/header'
import Breadcumb from '../common/beadcumb';
import { useState } from "react";
const Contactus=()=>{
   
    return(
        <Fragment>
            <Header/>
            <Breadcumb pageName={'Contact us'} pageTitle={'Contact us'}  pageHref="/"/>
            {/* <!-- Contact Box Section Start --> */}
            <section className="contact-box-section">
        <div className="container-fluid-lg">
            <div className="row g-lg-5 g-3">
                <div className="col-xxl-6">
                    <div className="left-sidebar-box">
                        <div className="contact-image">
                            <img src="https://media.istockphoto.com/vectors/young-woman-working-on-laptop-computer-and-talking-on-mobile-phone-vector-id1190332135?k=20&m=1190332135&s=170667a&w=0&h=KeIa8a2pkfcUHhP5pAIOuNcNOFIyNBYmRxQW-tK4g0Q=" className="img-fluid lazyload"
                                alt=""/>
                        </div>
                        <div className="contact-title">
                            <h3>Get In Touch</h3>
                        </div>

                        <div className="contact-detail">
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="contact-detail-box">
                                        <div className="contact-icon">
                                            <i className="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="contact-detail-title">
                                            <h4>Phone</h4>
                                        </div>

                                        <div className="contact-detail-contain">
                                            <p>(+1) 618 190 496</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="contact-detail-box">
                                        <div className="contact-icon">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="contact-detail-title">
                                            <h4>Email</h4>
                                        </div>

                                        <div className="contact-detail-contain">
                                            <p>geweto9420@chokxus.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="contact-detail-box">
                                        <div className="contact-icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="contact-detail-title">
                                            <h4>London Office</h4>
                                        </div>

                                        <div className="contact-detail-contain">
                                            <p>Cruce Casa de Postas 29</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="contact-detail-box">
                                        <div className="contact-icon">
                                            <i className="fa-solid fa-building"></i>
                                        </div>
                                        <div className="contact-detail-title">
                                            <h4>Bournemouth Office</h4>
                                        </div>

                                        <div className="contact-detail-contain">
                                            <p>Visitación de la Encina 22</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xxl-6">
                    <div className="title d-xxl-none d-block">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="right-sidebar-box" >
                        <div className="row" >
                            <div className="col-md-6">
                                {/* <form onSubmit={formSubmit}></form> */}
                                <div className="mb-md-4 mb-3 custom-form" >
                                    <label htmlFor="exampleFormControlInput" className="form-label">First Name</label>
                                    <div className="custom-input">
                                        <input type="text" className="form-control" 
                                       id="name"
                                            placeholder="Enter First Name"/>
                                           
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                                    <div className="custom-input">
                                        <input type="text" className="form-control" 
                                        id="name"
                                            placeholder="Enter Last Name"/>
                                            
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-12 col-md-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Email Address</label>
                                    <div className="custom-input">
                                        <input type="email" className="form-control" id="exampleFormControlInput2"
                                            placeholder="Enter Email Address"/>
                                            <div className="error" id="emailErr"></div>
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-12 col-md-6">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label htmlFor="exampleFormControlInput3" className="form-label">Phone Number</label>
                                    <div className="custom-input">
                                        <input type="tel"className="form-control" id="exampleFormControlInput3"
                                            placeholder="Enter Your Phone Number" maxLength="10"/>
                                            
                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="mb-md-4 mb-3 custom-form">
                                    <label htmlFor="exampleFormControlTextarea" className="form-label">Message</label>
                                    <div className="custom-textarea">
                                        <textarea className="form-control" id="exampleFormControlTextarea"
                                            placeholder="Enter Your Message" rows="6"></textarea>
                                        <i className="fa-solid fa-message"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button className="btn btn-animation btn-md fw-bold ms-auto">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Contact Box Section End --> */}
            <Footer/>
        </Fragment>
    )
}
export default Contactus;