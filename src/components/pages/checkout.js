import React, { Fragment } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Breadcumb from "../common/beadcumb";
import {data1,data2} from './data';
import Accordion from 'react-bootstrap/Accordion';
import { Form, Button } from "react-bootstrap";
import "../../CSS/style.css";

const Checkout = (props) => {
  var product1=data1.product1
  var address=data2.address
  return (
    <Fragment>
      <Header />
      <Breadcumb pageName={"Cart"} pageTitle={"Cart page"} pageHref={"/"} />
      {/* <!-- Checkout section Start --> */}
      <section className="checkout-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3 checkout-section">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <div className="col-xxl-3 col-lg-4">
                  <Nav className="flex-column custom-navtab">
                    <div className="row">
                      <div className="col-6 d-lg-flex">
                      <Nav.Item >
                      <Nav.Link eventKey="first">
                        <li className="nav-link" role="presentation">
                          <div
                            className="nav-item"
                            id="shopping-cart"
                            data-bs-toggle="tab"
                            data-bs-target="#s-cart"
                            role="tab"
                          >
                            <div className="nav-item-box">
                              <div>
                                <span>STEP 1</span>
                                <h4>Shopping Cart</h4>
                              </div>
                              <lord-icon
                                target=".nav-item"
                                src="https://cdn.lordicon.com/ggihhudh.json"
                                trigger="loop-on-hover"
                                colors="primary:#121331,secondary:#646e78,tertiary:#0baf9a"
                                className="lord-icon"
                              ></lord-icon>
                            </div>
                          </div>
                        </li>
                      </Nav.Link>
                    </Nav.Item>
                      </div>
                    </div>
                   
                    <Nav.Item>
                      <Nav.Link eventKey="second">
                        <li className="nav-link" role="presentation">
                          <div
                            className="nav-item"
                            id="delivery-address"
                            data-bs-toggle="tab"
                            data-bs-target="#d-address"
                            role="tab"
                          >
                            <div className="nav-item-box">
                              <div>
                                <span>STEP 2</span>
                                <h4>Delivery Address</h4>
                              </div>
                              <lord-icon
                                target=".nav-item"
                                src="https://cdn.lordicon.com/oaflahpk.json"
                                trigger="loop-on-hover"
                                colors="primary:#0baf9a"
                                className="lord-icon"
                              ></lord-icon>
                            </div>
                          </div>
                        </li>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">
                        <li className="nav-link" role="presentation">
                          <div
                            className="nav-item"
                            id="delivery-option"
                            data-bs-toggle="tab"
                            data-bs-target="#d-options"
                            role="tab"
                          >
                            <div className="nav-item-box">
                              <div>
                                <span>STEP 3</span>
                                <h4>Delivery Options</h4>
                              </div>
                              <lord-icon
                                target=".nav-item"
                                src="https://cdn.lordicon.com/jyijxczt.json"
                                trigger="loop-on-hover"
                                colors="primary:#3a3347,secondary:#0baf9a,tertiary:#ebe6ef,quaternary:#646e78"
                                className="lord-icon"
                              ></lord-icon>
                            </div>
                          </div>
                        </li>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">
                        <li className="nav-link" role="presentation">
                          <div
                            className="nav-item"
                            id="payment-option"
                            data-bs-toggle="tab"
                            data-bs-target="#p-options"
                            role="tab"
                          >
                            <div className="nav-item-box">
                              <div>
                                <span>STEP 4</span>
                                <h4>Payment Options</h4>
                              </div>
                              <lord-icon
                                target=".nav-item"
                                src="https://cdn.lordicon.com/qmcsqnle.json"
                                trigger="loop-on-hover"
                                colors="primary:#0baf9a,secondary:#0baf9a"
                                className="lord-icon"
                              ></lord-icon>
                            </div>
                          </div>
                        </li>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="col-xxl-9 col-lg-8">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h2 className="tab-title">Shopping Cart</h2>
                      <div className="cart-table p-0">
                        <div className="table-responsive">
                          <table className="table">
                            {product1.map((product1)=>{
                              return(
                                <tbody>
                                <tr key={product1.id} className="product-box-contain">
                              <td className="product-detail">
                                <div className="product border-0">
                                  <a
                                    href={product1.image}
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
                                        <a
                                          href="./product-detail"
                                          className="text-title"
                                        >
                                          {product1.name}
                                        </a>
                                      </li>

                                      <li className="text-content">
                                        <span className="text-title">
                                          Sold By :{product1.seller_detail}
                                        </span>
                                      </li>

                                      <li className="text-content">
                                        <span className="text-title">
                                          {product1.quantity}
                                        </span>
                                      </li>

                                      <li>
                                        <h5 className="text-content d-inline-block">
                                          Price :
                                        </h5>
                                        <span>{product1.productPrice}</span>
                                        <span className="text-content">
                                        {product1.productMRF}
                                        </span>
                                      </li>
                                      <li className="quantity-price-box">
                                        <div className="cart_qty">
                                          <div className="input-group">
                                            <button
                                              type="button"
                                              className="qty-left-minus"
                                              data-type="minus"
                                              data-field=""
                                            >
                                              <i
                                                className="fa fa-minus"
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
                                              className="qty-right-plus"
                                              data-type="plus"
                                              data-field=""
                                            >
                                              <i
                                                className="fa fa-plus"
                                                aria-hidden="true"
                                              ></i>
                                            </button>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </td>

                              <td className="price">
                                <h4 className="table-title text-content">
                                  Price
                                </h4>
                                <h5>
                                <span>{product1.productPrice}</span>
                                <del className="text-content">₹45.68</del>
                          
                                  
                                </h5>
                                <h6 className="theme-color">
                                  You Save :{product1.saving}
                                </h6>
                              </td>

                              <td className="quantity">
                                <h4 className="table-title text-content">
                                  Qty
                                </h4>
                                <div className="quantity-price">
                                  <div className="cart_qty">
                                    <div className="input-group">
                                      <button
                                        type="button"
                                        className="qty-left-minus"
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
                                        className="qty-right-plus"
                                        data-type="plus"
                                        data-field=""
                                      >
                                        <i className="fa-regular fa-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </td>

                              <td className="subtotal">
                                <h4 className="table-title text-content">
                                  Total
                                </h4>
                                <h5>{product1.total}</h5>
                              </td>

                              <td className="save-remove">
                                <h4 className="table-title text-content">
                                  Action
                                </h4>
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

                      <div className="button-group">
                        <ul className="button-group-list">
                          <li>
                            <a
                              href="./home"
                              className="btn btn-light shopping-button text-dark"
                            >
                              <i className="fa-solid fa-arrow-left-long ms-0"></i>
                              Continue Shopping
                            </a>
                          </li>

                          <li>
                            <button
                              className="btn btn-animation proceed-btn"
                              eventKey="second"
                            >
                              Continue Delivery Address
                            </button>
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="d-flex align-items-center mb-3">
                      <h2 className="tab-title mb-0">Delivery Address</h2>
                        <button
                          className="btn btn-animation btn-sm fw-bold ms-auto"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#add-address"
                        >
                          <i className="fa-solid fa-plus d-block d-sm-none m-0"></i>
                          <span className="d-none d-sm-block">+ Add New</span>
                        </button>
                      </div>
                      <div className="row">

                      <div className="col-6">
                        {address.map((address)=>{
                          return(
                            <div className="">
                          <div className="delivery-address-box">
                            <div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="jack"
                                  id="flexRadioDefault1"
                                />
                              </div>

                              <div className="label">
                                <label>Office</label>
                              </div>
                                      <ul key={address.id} className="delivery-address-detail">
                                        <li>
                                          <h4 className="fw-500">{address.name}</h4>
                                        </li>
                                        <li>
                                          <p className="text-content">
                                          <span className="text-title">
                                            Address:{address.address}
                                          </span> 
                                          </p>
                                        </li>
                                        <li>
                                          <h6 className="text-content">
                                          <span className="text-title">
                                            Pin Code :{address.pincode}
                                          </span>
                                          </h6>
                                        </li>
                                        <li>
                                          <h6 className="text-content mb-0">
                                          <span className="text-title">Phone :{address.phone}</span>
                                          </h6>
                                        </li>
                                      </ul>
                                    </div>
                            </div>
                          </div>
                             
                           )
                          })}
                        </div>
                        <div className="col-6">
                        {address.map((address)=>{
                          return(
                            <div className="">
                          <div className="delivery-address-box">
                            <div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="jack"
                                  id="flexRadioDefault1"
                                />
                              </div>

                              <div className="label">
                                <label>Home</label>
                              </div>
                                      <ul key={address.id} className="delivery-address-detail">
                                        <li>
                                          <h4 className="fw-500">{address.name}</h4>
                                        </li>
                                        <li>
                                          <p className="text-content">
                                          <span className="text-title">
                                            Address:{address.address}
                                          </span> 
                                          </p>
                                        </li>
                                        <li>
                                          <h6 className="text-content">
                                          <span className="text-title">
                                            Pin Code :{address.pincode}
                                          </span>
                                          </h6>
                                        </li>
                                        <li>
                                          <h6 className="text-content mb-0">
                                          <span className="text-title">Phone :{address.phone}</span>
                                          </h6>
                                        </li>
                                      </ul>
                                    </div>
                            </div>
                          </div>
                             
                           )
                          })}
                        </div>
                        </div>
                        {/* <div className="col-xxl-6 col-lg-12 col-md-6">
                          <div className="delivery-address-box">
                            <div>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="jack"
                                  id="flexRadioDefault2"
                                  checked="checked"
                                />
                              </div>

                              <div className="label">
                                <label>Office</label>
                              </div>

                              <ul className="delivery-address-detail">
                                <li>
                                  <h4 className="fw-500">Jack Jennas</h4>
                                </li>

                                <li>
                                  <p className="text-content">
                                    <span className="text-title">
                                      Address :
                                    </span>
                                    Nakhimovskiy R-N / Lastovaya Ul., bld. 5/A,
                                    appt. 12
                                  </p>
                                </li>

                                <li>
                                  <h6 className="text-content">
                                    <span className="text-title">
                                      Pin Code :
                                    </span>
                                    +380
                                  </h6>
                                </li>

                                <li>
                                  <h6 className="text-content mb-0">
                                    <span className="text-title">Phone :</span>{" "}
                                    + 380 (0564) 53 - 29 - 68
                                  </h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>  */}
                      <div className="button-group">
                        <ul className="button-group-list">
                          <li>
                            <button className="btn btn-light shopping-button backward-btn text-dark">
                              <i className="fa-solid fa-arrow-left-long ms-0"></i>
                              Return To Shopping Cart
                            </button>
                          </li>

                          <li>
                            <button className="btn btn-animation proceed-btn">
                              Continue Delivery Option
                            </button>
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h2 className="tab-title">Delivery Option</h2>
                      <div className="row g-4">
                        <div className="col-12">
                          <div className="delivery-option">
                            <div className="row g-4">
                              <div className="col-xxl-4 col-sm-6">
                                <div className="delivery-category">
                                  <div className="shipment-detail">
                                    <div className="form-check custom-form-check">
                                      {/* <input
                                        className="form-check-input"
                                        type="radio"
                                        name="standard"
                                        id="standard"
                                        checked
                                      /> */}
                                      <input className="form-check-input mt-0" type="radio" value="choice1" name="button" />
                                      <label
                                        className="form-check-label"
                                        for="standard"
                                      >
                                        Standard Delivery Option
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xxl-4 col-sm-6">
                                <div className="delivery-items">
                                  <div>
                                    <h5 className="items text-content">
                                      <span>3 Items</span> @ ₹693.48
                                    </h5>
                                    <h5 className="charge text-content">
                                      Delivery Charge ₹28.12
                                      <button
                                        type="button"
                                        className="btn p-0"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Extra Charge"
                                      >
                                        <i className="fa-solid fa-circle-exclamation"></i>
                                      </button>
                                    </h5>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xxl-4 col-md-12">
                                <div className="select-option">
                                  <div className="form-floating theme-form-floating">
                                    <select
                                      className="form-select"
                                      aria-label="Default select example"
                                    >
                                      <option value="1">
                                        TOMORROW 10:00 PM - 6:00 PM
                                      </option>
                                      <option value="2">
                                        Tuesday 11:00 AM - 6:45 PM
                                      </option>
                                      <option value="3">
                                        Wednesday 10:30 AM - 8:00 PM
                                      </option>
                                    </select>
                                    <label>Select Timing</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="delivery-option">
                            <div className="row g-4">
                              <div className="col-xxl-4 col-sm-6">
                                <div className="delivery-category">
                                  <div className="shipment-detail">
                                    <div className="form-check custom-form-check">
                                      {/* <input
                                        className="form-check-input"
                                        type="radio"
                                        name="standard"
                                        id="sameDay"
                                      /> */}
                                      <input className="form-check-input mt-0" type="radio" value="choice2" name="button" />
                                      <label
                                        className="form-check-label"
                                        for="sameDay"
                                      >
                                        Same Day Delivery Option
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xxl-4 col-sm-6">
                                <div className="delivery-items">
                                  <div>
                                    <h5 className="items text-content">
                                      <span>3 Items</span> @ ₹693.48
                                    </h5>
                                    <h5 className="charge text-content">
                                      Delivery Charge ₹32.15
                                      <button
                                        type="button"
                                        className="btn p-0"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Extra Charge"
                                      >
                                        <i className="fa-solid fa-circle-exclamation"></i>
                                      </button>
                                    </h5>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xxl-4 col-md-12">
                                <div className="select-option">
                                  <div className="form-floating theme-form-floating">
                                    <select
                                      className="form-select theme-form-select"
                                      aria-label="Default select example"
                                    >
                                      <option value="1">
                                        TOMORROW 10:00 PM - 6:00 PM
                                      </option>
                                      <option value="2">
                                        Tuesday 11:00 AM - 6:45 PM
                                      </option>
                                      <option value="3">
                                        Wednesday 10:30 AM - 8:00 PM
                                      </option>
                                    </select>
                                    <label>Select Timing</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="delivery-option">
                            <div className="row g-4">
                              <div className="col-xxl-4 col-sm-6">
                                <div className="delivery-category">
                                  <div className="shipment-detail">
                                    <div className="form-check mb-0 custom-form-check">
                                      {/* <input
                                        className="form-check-input"
                                        type="radio"
                                        name="standard"
                                        id="future"
                                      /> */}
                                      <input className="form-check-input mt-0" type="radio" value="choice3" name="button" />
                                      <label
                                        className="form-check-label"
                                        for="future"
                                      >
                                        Future Delivery Option
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xxl-4 col-sm-6">
                                <div className="delivery-items">
                                  <div>
                                    <h5 className="items text-content">
                                      <span>3 Items</span> @ ₹693.48
                                    </h5>
                                    <h5 className="charge text-content">
                                      Delivery Charge ₹34.67
                                      <button
                                        type="button"
                                        className="btn p-0"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title="Extra Charge"
                                      >
                                        <i className="fa-solid fa-circle-exclamation"></i>
                                      </button>
                                    </h5>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xxl-4 col-md-12">
                                <form className="form-floating theme-form-floating date-box">
                                  <input type="date" className="form-control" />
                                  <label>Select Date</label>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="button-group">
                        <ul className="button-group-list">
                          <li>
                            <button className="btn btn-light shopping-button backward-btn text-dark">
                              <i className="fa-solid fa-arrow-left-long ms-0"></i>
                              Return To Delivery Address
                            </button>
                          </li>

                          <li>
                            <button className="btn btn-animation proceed-btn">
                              Continue Payment Option
                            </button>
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                     
                       <h2 className="tab-title">Payment Option</h2>
                      <div className="row g-sm-4 g-2">
                        <div className="col-xxl-4 col-lg-12 col-md-5 order-xxl-2 order-lg-1 order-md-2">
                          <div className="summery-box">
                            <div className="summery-header bg-white">
                              <h3>Order Summery</h3>
                              <a href="./cart">Edit Cart</a>
                            </div>

                            <ul className="summery-contain bg-white custom-height">
                              <li>
                                <h4>
                                  Bell pepper <span>X 1</span>
                                </h4>
                                <h4 className="price">₹32.34</h4>
                              </li>

                              <li>
                                <h4>
                                  Eggplant <span>X 3</span>
                                </h4>
                                <h4 className="price">₹12.23</h4>
                              </li>

                              <li>
                                <h4>
                                  Onion <span>X 2</span>
                                </h4>
                                <h4 className="price">₹18.27</h4>
                              </li>

                              <li>
                                <h4>
                                  Potato <span>X 1</span>
                                </h4>
                                <h4 className="price">₹26.90</h4>
                              </li>

                              <li>
                                <h4>
                                  Baby Chili <span>X 1</span>
                                </h4>
                                <h4 className="price">₹19.28</h4>
                              </li>

                              <li>
                                <h4>
                                  Broccoli <span>X 2</span>
                                </h4>
                                <h4 className="price">₹29.69</h4>
                              </li>
                            </ul>

                            <ul className="summery-total bg-white">
                              <li>
                                <h4>Subtotal</h4>
                                <h4 className="price">₹111.81</h4>
                              </li>

                              <li>
                                <h4>Shipping</h4>
                                <h4 className="price">₹8.90</h4>
                              </li>

                              <li>
                                <h4>Tax</h4>
                                <h4 className="price">₹29.498</h4>
                              </li>

                              <li>
                                <h4>Coupon/Code</h4>
                                <h4 className="price">₹-23.10</h4>
                              </li>

                              <li className="list-total">
                                <h4>Total (USD)</h4>
                                <h4 className="price">₹19.28</h4>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="col-xxl-8 col-lg-12 col-md-7 order-xxl-1 order-lg-2 order-md-1">
                          <div
                            className="accordion accordion-flush custom-accordion"
                            id="accordionFlushExample"
                          >
                            <div className="accordion-item">
                              <Accordion>
                                <Accordion.Item eventKey="2">
                                   <Accordion.Header ><div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      for="credit"
                                    >

                                       {/* <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="credit"
                                        checked
                                      /> */}
                                      <input className="form-check-input mt-0" type="radio" value="choice7" name="button" />
                                      Credit or Debit Card
                                    </label>
                                  </div> </Accordion.Header> 
                                  <Accordion.Body>
                                  <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <div className="row g-2">
                                    <div className="col-12">
                                      <div className="payment-method">
                                        <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="credit2"
                                            placeholder="Enter Credit & Debit Card Number"
                                          />
                                          <label for="credit2">
                                            Enter Credit & Debit Card Number
                                          </label>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="expiry"
                                          placeholder="Enter Expiry Date"
                                        />
                                        <label for="expiry">Expiry Date</label>
                                      </div>
                                    </div>

                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="cvv"
                                          placeholder="Enter CVV Number"
                                        />
                                        <label for="cvv">CVV Number</label>
                                      </div>
                                    </div>

                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="password"
                                          className="form-control"
                                          id="password"
                                          placeholder="Enter Password"
                                        />
                                        <label for="password">Password</label>
                                      </div>
                                    </div>

                                    <div className="button-group mt-0">
                                      <ul>
                                        <li>
                                          <button className="btn btn-light shopping-button">
                                            Cancel
                                          </button>
                                        </li>

                                        <li>
                                          <button className="btn btn-animation">
                                            Use This Card
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                               {/* <div
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                <div
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseOne"
                                >
                                  <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      for="credit"
                                    >

                                       <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="credit"
                                        checked
                                      />{" "} 
                                      Credit or Debit Card
                                    </label>
                                  </div>
                                </div>
                              </div>  */}
                              {/* <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <div className="row g-2">
                                    <div className="col-12">
                                      <div className="payment-method">
                                        <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="credit2"
                                            placeholder="Enter Credit & Debit Card Number"
                                          />
                                          <label for="credit2">
                                            Enter Credit & Debit Card Number
                                          </label>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="expiry"
                                          placeholder="Enter Expiry Date"
                                        />
                                        <label for="expiry">Expiry Date</label>
                                      </div>
                                    </div>

                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="text"
                                          className="form-control"
                                          id="cvv"
                                          placeholder="Enter CVV Number"
                                        />
                                        <label for="cvv">CVV Number</label>
                                      </div>
                                    </div>

                                    <div className="col-xxl-4">
                                      <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                        <input
                                          type="password"
                                          className="form-control"
                                          id="password"
                                          placeholder="Enter Password"
                                        />
                                        <label for="password">Password</label>
                                      </div>
                                    </div>

                                    <div className="button-group mt-0">
                                      <ul>
                                        <li>
                                          <button className="btn btn-light shopping-button">
                                            Cancel
                                          </button>
                                        </li>

                                        <li>
                                          <button className="btn btn-animation">
                                            Use This Card
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>

                            <div className="accordion-item">
                              <Accordion>
                                <Accordion.Item eventKey="2">
                                  <Accordion.Header> <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      for="banking"
                                    >
                                    {/* <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="banking"
                                      /> */}
                                      <input className="form-check-input mt-0" type="radio" value="choice8" name="button" />
                                      Net Banking
                                    </label>
                                  </div></Accordion.Header>
                                    <Accordion.Body>
                                      {/* <div
                                id="flush-collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                              > */}
                                <div className="accordion-body">
                                  <h5 className="text-uppercase mb-4">
                                    Select Your Bank
                                  </h5>
                                  <div className="row g-2">
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        {/* <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank1"
                                        /> */}
                                        <input className="form-check-input mt-0" type="radio" value="choice1" name="button" />
                                        <label
                                          className="form-check-label"
                                          for="bank1"
                                        >
                                          Industrial & Commercial Bank
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        {/* <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank2"
                                        /> */}
                                        <input className="form-check-input mt-0" type="radio" value="choice2" name="button" />
                                        <label
                                          className="form-check-label"
                                          for="bank2"
                                        >
                                          Agricultural Bank
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        {/* <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank3"
                                        /> */}
                                         <input className="form-check-input mt-0" type="radio" value="choice3" name="button" />
                                        <label
                                          className="form-check-label"
                                          for="bank3"
                                        >
                                          Bank of America
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        {/* <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank4"
                                        /> */}
                                         <input className="form-check-input mt-0" type="radio" value="choice4" name="button" />
                                        <label
                                          className="form-check-label"
                                          for="bank4"
                                        >
                                          Construction Bank Corp.
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        {/* <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank5"
                                        /> */}
                                         <input className="form-check-input mt-0" type="radio" value="choice5" name="button" />
                                        <label
                                          className="form-check-label"
                                          for="bank5"
                                        >
                                          HSBC Holdings
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        {/* <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank6"
                                        /> */}
                                         <input className="form-check-input mt-0" type="radio" value="choice6" name="button" />
                                        <label
                                          className="form-check-label"
                                          for="bank6"
                                        >
                                          JPMorgan Chase & Co.
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-12">
                                      <div className="select-option">
                                        <div className="form-floating theme-form-floating">
                                          <select
                                            className="form-select theme-form-select"
                                            aria-label="Default select example"
                                          >
                                            <option value="hsbc">
                                              HSBC Holdings
                                            </option>
                                            <option value="loyds">
                                              Lloyds Banking Group
                                            </option>
                                            <option value="natwest">
                                              Nat West Group
                                            </option>
                                            <option value="Barclays">
                                              Barclays
                                            </option>
                                            <option value="other">
                                              Others Bank
                                            </option>
                                          </select>
                                          <label>Select Other Bank</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div> 
                              {/* </div> */}
                              </Accordion.Body>
                              </Accordion.Item>
                              </Accordion>
                              {/* <div
                                className="accordion-header"
                                id="flush-headingTwo"
                              > */}
                                {/* <div
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseTwo"
                                > */}
                                  {/* <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      for="banking"
                                    >
                                    <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="banking"
                                      />{" "}
                                      Net Banking
                                    </label>
                                  </div> */}
                                {/* </div>
                              </div> */}
                              {/* <div
                                id="flush-collapseTwo"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <h5 className="text-uppercase mb-4">
                                    Select Your Bank
                                  </h5>
                                  <div className="row g-2">
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank1"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="bank1"
                                        >
                                          Industrial & Commercial Bank
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank2"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="bank2"
                                        >
                                          Agricultural Bank
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank3"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="bank3"
                                        >
                                          Bank of America
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank4"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="bank4"
                                        >
                                          Construction Bank Corp.
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank5"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="bank5"
                                        >
                                          HSBC Holdings
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="bank6"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="bank6"
                                        >
                                          JPMorgan Chase & Co.
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-12">
                                      <div className="select-option">
                                        <div className="form-floating theme-form-floating">
                                          <select
                                            className="form-select theme-form-select"
                                            aria-label="Default select example"
                                          >
                                            <option value="hsbc">
                                              HSBC Holdings
                                            </option>
                                            <option value="loyds">
                                              Lloyds Banking Group
                                            </option>
                                            <option value="natwest">
                                              Nat West Group
                                            </option>
                                            <option value="Barclays">
                                              Barclays
                                            </option>
                                            <option value="other">
                                              Others Bank
                                            </option>
                                          </select>
                                          <label>Select Other Bank</label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>

                            <div className="accordion-item">
                              <Accordion>
                                <Accordion.Item eventKey="2">
                                  <Accordion.Header>
                                  <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      for="wallet"
                                    >
                                      {/* <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="wallet"
                                      />{" "} */}
                                      <input className="form-check-input mt-0" type="radio" value="choice9" name="button" />
                                      My Wallet
                                    </label>
                                  </div>
                                  </Accordion.Header>
                                    <Accordion.Body>
                                    {/* <div
                                id="flush-collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                              > */}
                                
                              <div className="accordion-body">
                                  <h5 className="text-uppercase mb-4">
                                    Select Your Wallet
                                  </h5>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <label
                                          className="form-check-label"
                                          for="amazon"
                                        >
                                          {/* <input
                                            className="form-check-input mt-0"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="amazon"
                                          />{" "} */}
                                          <input className="form-check-input mt-0" type="radio" value="choice10" name="button" />
                                          Amazon Pay
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        {/* <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="gpay"
                                        /> */}
                                        <input className="form-check-input mt-0" type="radio" value="choice11" name="button" />
                                        <label
                                          className="form-check-label"
                                          for="gpay"
                                        >
                                          Google Pay
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        {/* <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="airtel"
                                        /> */}
                                        <input className="form-check-input mt-0" type="radio" value="choice12" name="button" />
                                        <label
                                          className="form-check-label"
                                          for="airtel"
                                        >
                                          Airtel Money
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        {/* <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="paytm"
                                        /> */}
                                        <input className="form-check-input mt-0" type="radio" value="choice12" name="button" />
                                        <label
                                          className="form-check-label"
                                          for="paytm"
                                        >
                                          Paytm Pay
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        {/* <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="jio"
                                        /> */}
                                        <input className="form-check-input mt-0" type="radio" value="choice13" name="button" />
                                        <label
                                          className="form-check-label"
                                          for="jio"
                                        >
                                          JIO Money
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        {/* <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="free"
                                        /> */}
                                        <input className="form-check-input mt-0" type="radio" value="choice14" name="button" />
                                        <label
                                          className="form-check-label"
                                          for="free"
                                        >
                                          Freecharge
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div> 
                              {/* </div> */}
                                    </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                              {/* <div
                                className="accordion-header"
                                id="flush-headingThree"
                              > */}
                                {/* <div
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseThree"
                                > */}
                                  {/* <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      for="wallet"
                                    >
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="wallet"
                                      />{" "}
                                      My Wallet
                                    </label>
                                  </div> */}
                                {/* </div>
                              </div> */}
                              {/* <div
                                id="flush-collapseThree"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <h5 className="text-uppercase mb-4">
                                    Select Your Wallet
                                  </h5>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <label
                                          className="form-check-label"
                                          for="amazon"
                                        >
                                          <input
                                            className="form-check-input mt-0"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="amazon"
                                          />{" "}
                                          Amazon Pay
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="gpay"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="gpay"
                                        >
                                          Google Pay
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="airtel"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="airtel"
                                        >
                                          Airtel Money
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="paytm"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="paytm"
                                        >
                                          Paytm Pay
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="jio"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="jio"
                                        >
                                          JIO Money
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="free"
                                        />
                                        <label
                                          className="form-check-label"
                                          for="free"
                                        >
                                          Freecharge
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>

                            <div className="accordion-item">
                              <Accordion>
                                <Accordion.Item eventKey="2">
                                  <Accordion.Header><div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      for="cash"
                                    >
                                      {/* <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="cash"
                                      />{" "} */}
                                      <input className="form-check-input mt-0" type="radio" value="choice15" name="button" />
                                      Cash On Delivery
                                    </label>
                                  </div></Accordion.Header>
                                  <Accordion.Body>
                                  {/* <div
                                id="flush-collapseFour"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                              > */}
                                <div className="accordion-body">
                                  <h5 className="cod-review">
                                    Pay digitally with SMS Pay Link. Cash may
                                    not be accepted in COVID restricted areas.{" "}
                                    <a href="javascript:void(0)">Know more.</a>
                                  </h5>
                                </div>
                              {/* </div> */}
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                              {/* <div
                                className="accordion-header"
                                id="flush-headingFour"
                              > */}
                                {/* <div
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseFour"
                                > */}
                                  {/* <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      for="cash"
                                    >
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="cash"
                                      />{" "}
                                      Cash On Delivery
                                    </label>
                                  </div> */}
                                {/* </div>
                              </div> */}
                              {/* <div
                                id="flush-collapseFour"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                              >
                                <div className="accordion-body">
                                  <h5 className="cod-review">
                                    Pay digitally with SMS Pay Link. Cash may
                                    not be accepted in COVID restricted areas.{" "}
                                    <a href="javascript:void(0)">Know more.</a>
                                  </h5>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="button-group">
                        <ul className="button-group-list">
                          <li>
                            <button className="btn btn-light shopping-button backward-btn text-dark">
                              <i className="fa-solid fa-arrow-left-long ms-0"></i>
                              Return To Delivery Option
                            </button>
                          </li>

                          <li>
                            <button
                              onclick="location.href = 'order-success.html';"
                              className="btn btn-animation"
                            >
                              Done
                            </button>
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </section>
      {/* <!-- Checkout section End --> */}
      <Footer />
    </Fragment>
  );
};
export default Checkout;
