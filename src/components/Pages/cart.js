import React, { Fragment } from "react";
import Footer from "../part/footer";
import Header from "../part/header";
import ProductImg1 from "../../Photos/product/1.png";
import Breadcumb from "../UI/beadcumb";
import "../../CSS/style.css";
import { NavLink } from "react-router-dom";

const Cart = () => {
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
                    <tbody>
                      <tr className="product-box-contain">
                        <td className="product-detail">
                          <div className="product border-0">
                            <a
                              href="./product-detail"
                              className="product-image"
                            >
                              <img
                                src={ProductImg1}
                                className="img-fluid lazyload"
                                alt=""
                              />
                            </a>
                            <div className="product-detail">
                              <ul>
                                <li className="name">
                                  <a href="./product-detail">Bell pepper</a>
                                </li>

                                <li className="text-content">
                                  <span className="text-title">Sold By:</span>{" "}
                                  Fresho
                                </li>

                                <li className="text-content">
                                  <span className="text-title">Quantity</span> -
                                  500 g
                                </li>

                                <li>
                                  <h5 className="text-content d-inline-block">
                                    Price :
                                  </h5>
                                  <span>$35.10</span>
                                  <span className="text-content">$45.68</span>
                                </li>

                                <li>
                                  <h5 className="saving theme-color">
                                    Saving : $20.68
                                  </h5>
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
                                        <i class="fa-regular fa-minus"></i>
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
                                        <i class="fa-regular fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <h5>Total: $35.10</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>

                        <td className="price">
                          <h4 className="table-title text-content">Price</h4>
                          <h5>
                            $35.10 <del className="text-content">$45.68</del>
                          </h5>
                          <h6 className="theme-color">You Save : $20.68</h6>
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
                                >
                                  <i class="fa-regular fa-minus"></i>
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
                                  <i class="fa-regular fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="subtotal">
                          <h4 className="table-title text-content">Total</h4>
                          <h5>$35.10</h5>
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

                      <tr className="product-box-contain">
                        <td className="product-detail">
                          <div className="product border-0">
                            <a
                              href="./product-detail"
                              className="product-image"
                            >
                              <img
                                src={ProductImg1}
                                className="img-fluid lazyload"
                                alt=""
                              />
                            </a>
                            <div className="product-detail">
                              <ul>
                                <li className="name">
                                  <a href="./product-detail">Eggplant</a>
                                </li>

                                <li className="text-content">
                                  <span className="text-title">Sold By:</span>{" "}
                                  Nesto
                                </li>

                                <li className="text-content">
                                  <span className="text-title">Quantity</span> -
                                  250 g
                                </li>

                                <li>
                                  <h5 className="text-content d-inline-block">
                                    Price :
                                  </h5>
                                  <span>$35.10</span>
                                  <span className="text-content">$45.68</span>
                                </li>

                                <li>
                                  <h5 className="saving theme-color">
                                    Saving : $20.68
                                  </h5>
                                </li>

                                <li className="quantity">
                                  <div className="quantity-price">
                                    <div className="cart_qty">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="btn qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-minus ms-0"
                                            aria-hidden="true"
                                          ></i>
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
                                          <i
                                            className="fa fa-plus ms-0"
                                            aria-hidden="true"
                                          ></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <h5>Total: $52.95</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>

                        <td className="price">
                          <h4 className="table-title text-content">Price</h4>
                          <h5>
                            $52.95 <del className="text-content">$68.49</del>
                          </h5>
                          <h6 className="theme-color">You Save : $15.14</h6>
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
                                >
                                  <i class="fa-regular fa-minus"></i>
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
                                  <i class="fa-regular fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="subtotal">
                          <h4 className="table-title text-content">Total</h4>
                          <h5>$52.95</h5>
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

                      <tr className="product-box-contain">
                        <td className="product-detail">
                          <div className="product border-0">
                            <a
                              href="./product-detail"
                              className="product-image"
                            >
                              <img
                                src={ProductImg1}
                                className="img-fluid lazyload"
                                alt=""
                              />
                            </a>
                            <div className="product-detail">
                              <ul>
                                <li className="name">
                                  <a href="./product-detail">Onion</a>
                                </li>

                                <li className="text-content">
                                  <span className="text-title">Sold By:</span>{" "}
                                  Basket
                                </li>

                                <li className="text-content">
                                  <span className="text-title">Quantity</span> -
                                  750 g
                                </li>

                                <li>
                                  <h5 className="text-content d-inline-block">
                                    Price :
                                  </h5>
                                  <span>$35.10</span>
                                  <span className="text-content">$45.68</span>
                                </li>

                                <li>
                                  <h5 className="saving theme-color">
                                    Saving : $20.68
                                  </h5>
                                </li>

                                <li className="quantity">
                                  <div className="quantity-price">
                                    <div className="cart_qty">
                                      <div className="input-group">
                                        <button
                                          type="button"
                                          className="btn qty-left-minus"
                                          data-type="minus"
                                          data-field=""
                                        >
                                          <i
                                            className="fa fa-minus ms-0"
                                            aria-hidden="true"
                                          ></i>
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
                                          <i
                                            className="fa fa-plus ms-0"
                                            aria-hidden="true"
                                          ></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>

                                <li>
                                  <h5>Total: $67.36</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>

                        <td className="price">
                          <h4 className="table-title text-content">Price</h4>
                          <h5>
                            $67.36 <del className="text-content">$96.58</del>
                          </h5>
                          <h6 className="theme-color">You Save : $29.22</h6>
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
                                >
                                  <i class="fa-regular fa-minus"></i>
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
                                  <i class="fa-regular fa-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="subtotal">
                          <h4 className="table-title text-content">Total</h4>
                          <h5>$67.36</h5>
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
                    <div className="mb-3 coupon-box input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Coupon Code Here..."
                      />
                      <button className="btn-apply">Apply</button>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <h4>Subtotal</h4>
                      <h4 className="price">$125.65</h4>
                    </li>

                    <li>
                      <h4>Coupon Discount</h4>
                      <h4 className="price">(-) 0.00</h4>
                    </li>

                    <li className="align-items-start">
                      <h4>Shipping</h4>
                      <h4 className="price text-end">$6.90</h4>
                    </li>
                  </ul>
                </div>

                <ul className="summery-total">
                  <li className="list-total border-top-0">
                    <h4>Total (USD)</h4>
                    <h4 className="price theme-color">$132.58</h4>
                  </li>
                </ul>

                <div className="button-group cart-button">
                  <ul>
                    <li>
                      <NavLink
                        to="/checkout"
                        className="btn btn-animation proceed-btn fw-bold"
                      >
                        Process To Checkout
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/"
                        className="btn btn-light shopping-button text-dark"
                      >
                        <i className="fa-solid fa-arrow-left-long"></i>Return To
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
