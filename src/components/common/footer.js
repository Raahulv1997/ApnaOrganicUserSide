import React, { Fragment } from 'react';
import Logo from '../../Photos/1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookF,FaGoogle,FaTwitter,FaInstagram, FaPinterestP} from 'react-icons/fa';
import '../../CSS/style.css'
import { Link } from 'react-router-dom';
const Footer=()=> {
  return (
    <Fragment>
      {/* <!-- Footer Start --> */}
      <footer className="section-t-space footer-section-2">
        <div className="container-fluid-lg">
          <div className="main-footer">
            <div className="row g-md-4 gy-sm-5 gy-2">
              <div className="col-xxl-3 col-xl-4 col-sm-6">
                <a href="index.html" className="foot-logo">
                  <img src={Logo} className="img-fluid" alt="" />
                </a>
                <p className="information-text">it is a long established fact that a reader will be distracted
                  by the readable content.</p>
                <ul className="social-icon">
                  <li>
                    <a href="www.facebook.html">
                      <FaFacebookF/>
                    </a>
                  </li>
                  <li>
                    <a href="www.goolge.html">
                      <FaGoogle/>
                    </a>
                  </li>
                  <li>
                    <a href="www.twitter.html">
                      <FaTwitter/>
                    </a>
                  </li>
                  <li>
                    <a href="www.instagram.html">
                      <FaInstagram/>
                    </a>
                  </li>
                  <li>
                    <a href="www.pinterest.html">
                      <FaPinterestP/>
                    </a>
                  </li>
                </ul>

                <div className="social-app mt-sm-4 mt-3 mb-4">
                  <ul>
                    <li>
                      <a href="https://play.google.com/store/apps" target="_blank">
                        <img src="https://themes.pixelstrap.com/Apna Organic/assets/images/playstore.svg" className="lazyload" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.apple.com/in/app-store/" target="_blank">
                        <img src="https://themes.pixelstrap.com/Apna Organic/assets/images/appstore.svg" className="lazyload" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xxl-2 col-xl-4 col-sm-6">
                <div className="footer-title">
                  <h4>About Apna Organic</h4>
                </div>
                <ul className="footer-list footer-contact mb-sm-0 mb-3">
                  <li>
                    <Link to="/aboutus" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>About Us</Link>
                  </li>
                  <li>
                    <Link to="/contactus" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/term_condition" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>Terms & Coditions</Link>
                  </li>
                  <li>
                    <Link to="/careers" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>Careers</Link>
                  </li>
                  <li>
                    <Link to="/blog_detail" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>Latest Blog</Link>
                  </li>
                </ul>
              </div>

              <div className="col-xxl-2 col-xl-4 col-sm-6">
                <div className="footer-title">
                  <h4>Useful Link</h4>
                </div>
                <ul className="footer-list footer-contact mb-sm-0 mb-3">
                  <li>
                    <Link to="/your_orders" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>Your Order</Link>
                  </li>
                  <li>
                  <Link to="/your_account" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>Your Account</Link>
                  </li>
                  <li>
                    <Link to="/order_tracking" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>Track Orders</Link>
                  </li>
                  <li>
                    <Link to="/wishlist" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>Your Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/faq" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>FAQs</Link>
                  </li>
                </ul>
              </div>

              <div className="col-xxl-2 col-xl-4 col-sm-6">
                <div className="footer-title">
                  <h4>Categories</h4>
                </div>
                <ul className="footer-list footer-contact mb-sm-0 mb-3">
                  <li>
                    <a href="vegetables-demo.html" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>Fresh Vegetables</a>
                  </li>
                  <li>
                    <a href="spice-demo.html" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>Hot Spice</a>
                  </li>
                  <li>
                    <a href="bags-demo.html" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>Brand New Bags</a>
                  </li>
                  <li>
                    <a href="bakery-demo.html" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>New Bakery</a>
                  </li>
                  <li>
                    <a href="grocery-demo.html" className="footer-contain-2">
                      <i className="fa-solid fa-chevron-right"></i>New Grocery</a>
                  </li>
                </ul>
              </div>

              <div className="col-xxl-3 col-xl-4 col-sm-6">
                <div className="footer-title">
                  <h4>Store infomation</h4>
                </div>
                <ul className="footer-address footer-contact">
                  <li>
                    <a href="javascript:void(0)">
                      <div className="inform-box flex-start-box">
                        <i data-feather="map-pin"></i>
                        <p>Apna Organic Demo Store, Demo store india 345 - 659</p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <div className="inform-box">
                        <i data-feather="phone"></i>
                        <p>Call us: 123-456-7890</p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <div className="inform-box">
                        <i data-feather="mail"></i>
                        <p>Email Us: Support@Apna Organic.com</p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a href="javascript:void(0)">
                      <div className="inform-box">
                        <i data-feather="printer"></i>
                        <p>Fax: 123456</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="sub-footer section-small-space">
            <div className="left-footer">
              <p>2022 Copyright By WE2CODE</p>
            </div>
            <div className="right-footer">
              <ul className="payment-box">
                <li>
                  <img src="../assets/images/icon/paymant/visa.png" alt="" />
                </li>
                <li>
                  <img src="../assets/images/icon/paymant/discover.png" alt="" />
                </li>
                <li>
                  <img src="../assets/images/icon/paymant/american.png" alt="" />
                </li>
                <li>
                  <img src="../assets/images/icon/paymant/master-card.png" alt="" />
                </li>
                <li>
                  <img src="../assets/images/icon/paymant/giro-pay.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </Fragment>
  )
}
export default Footer;