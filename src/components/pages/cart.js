import React, { Fragment } from "react";
// import data from './Pages/data';
import Footer from "../common/footer";
import Header from "../common/header";
//import ProductImg1 from "../../Photos/product/1.png";
import Breadcumb from "../common/beadcumb";
import {data1} from './data';
import "../../CSS/style.css";
import { NavLink } from "react-router-dom";
import  {useState} from 'react';
const Cart = (props) => {
  var product1=data1.product1;
  let [count, setCount] = useState(0);
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
  return (
    <Fragment>
      <Header />
      <Breadcumb pageName={"Cart"} pageTitle={"Cart page"} pageHref={"/"} />
      {/* <!-- Cart Section Start --> */}
      <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-5 g-3">
            <div className="col-xxl-9">
              <div className="cart-table">
                <div className="table-responsive-xl">
                  <table className="table">
                    {product1.map((product1)=>{
                       return(
                        <tbody>
                            <tr key={product1.id} className="product-box-contain">
                          <td className="product-detail">
                            <div className="product border-0">
                              <a
                                href="./product-detail"
                                className="product-image"
                              >
                                <img
                                  src={product1.image}
                                  className="img-fluid lazyload"
                                  alt=""
                                />
                              </a>
                              <div className="product-detail">
                                <ul>
                                  <li className="name">
                                    <a href="./product-detail">{product1.name}</a>
                                  </li>
  
                                  <li className="text-content">
                                    <span className="text-title">Sold By:{product1.seller_detail}</span>
                                  </li>
  
                                  <li className="text-content">
                                    <span className="text-title">Quality:{product1.quantity}</span>
                                  </li>
  
                                  <li>
                                    <h5 className="text-content d-inline-block">
                                      Price:
                                    </h5>
                                    <span>{product1.productPrice}</span>
                                    <span className="text-content">{product1.productMRF}</span>
                                  </li>
  
                                  <li>
                                    <h5 className="saving theme-color">{product1.saving}</h5>
                                  </li>
  
                                  <li className="quantity-price-box">
                                    <div className="cart_qty">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="btn qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                      
                                        >
                                          <i className="fa-regular fa-minus"></i>
                                        </button>
                                        <input
                                          className="form-control input-number qty-input"
                                          type="text"
                                          name="quantity"
                                          value="1"
                                        />
                                        <button
                                          type="button"
                                          className="btn qty-right-plus"
                                          data-type="plus"
                                          data-field=""
                                         
                                        >
                                          <i className="fa-regular fa-plus"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </li> 
                                </ul>
                              </div>
                            </div>
                          </td>
  
                          <td className="price">
                            <h4 className="table-title text-content">Price</h4>
                            <h5>
                              {product1.productPrice} <del className="text-content">{product1.productMRF}</del>
                            </h5>
                            <h6 className="theme-color">You Save : {product1.saving}</h6>
                          </td>
  
                          <td className="quantity">
                            <h4 className="table-title text-content">Qty</h4>
                            <div className="quantity-price">
                              <div className="cart_qty">
                                <div className="input-group">
                                  <button
                                    type="button"
                                    className="btn qty-left-minus"
                                    data-type="minus"
                                    data-field=""
                                    onClick={decrementCount}
                                  >
                                    <i className="fa-regular fa-minus"></i>
                                  </button>
                                  <input
                                    className="form-control input-number qty-input"
                                    type="text"
                                    name="quantity"
                                    value={count}
                                  />
                                  <button
                                    type="button"
                                    className="btn qty-right-plus"
                                    data-type="plus"
                                    data-field=""
                                    onClick={incrementCount}
                                  >
                                    <i className="fa-regular fa-plus"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
  
                          <td className="subtotal">
                            <h4 className="table-title text-content">Total</h4>
                            <h5>{product1.total}</h5>
                          </td>
  
                          <td className="save-remove">
                            <h4 className="table-title text-content">Action</h4>
                            <a
                              className="save notifi-wishlist"
                              href="javascript:void(0)"
                            >
                              Save for later
                            </a>
                            <a
                              className="remove close_button"
                              href="javascript:void(0)"
                            >
                              Remove
                            </a>
                          </td>
                        </tr>
                        </tbody>
                      )                       
                    })}
                  </table>
                </div>
              </div>
            </div>

            <div className="col-xxl-3">
              <div className="summery-box p-sticky">
                <div className="summery-header">
                  <h3>Cart Total</h3>
                </div>

                <div className="summery-contain">
                  <div className="coupon-cart">
                    <h6 className="text-content mb-2">Coupon Apply</h6>
                    <div className="mb-3  coupon-box input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Coupon Code Here..."
                      />
                      <button className="btn-apply">Apply</button>
                    </div>
                  </div>
                  <ul className="p-0">
                    <li>
                      <h4>Subtotal</h4>
                      <h4 className="price">₹125.65</h4>
                    </li>

                    <li>
                      <h4>Coupon Discount</h4>
                      <h4 className="price">(-) 0.00</h4>
                    </li>

                    <li className="align-items-start">
                      <h4>Shipping</h4>
                      <h4 className="price text-end">₹6.90</h4>
                    </li>
                  </ul>
                </div>

                <ul className="summery-total">
                  <li className="list-total border-top-0">
                    <h4>Total (USD)</h4>
                    <h4 className="price theme-color">₹132.58</h4>
                  </li>
                </ul>

                <div className="button-group cart-button">
                  <ul className="p-0">
                    <li className="w-100">
                      <NavLink
                        to="/checkout"
                        className="btn btn-animation proceed-btn fw-bold w-100"
                      >
                        Process To Checkout
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/"
                        className="btn btn-light shopping-button text-dark w-100"
                      >
                        <i className="fa-solid fa-arrow-left-long me-3"></i>Return To
                        Shopping
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Cart Section End --> */}
      <Footer />
    </Fragment>
  );
};
export default Cart;
