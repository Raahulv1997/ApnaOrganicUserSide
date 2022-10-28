import React from "react";
import Header from "../common/header";
import Breadcumb from "../common/beadcumb";
import Footer from "../common/footer";
import Product1 from "../../Photos/vegetable/product/1.png";
import Product2 from "../../Photos/vegetable/product/2.png";
import Product3 from "../../Photos/vegetable/product/3.png";
// import ProductBox from "../common/product-box";

function Orders() {
  return (
    <React.Fragment>
      <Header />
      <Breadcumb
        pageName={"Your Order"}
        pageTitle={"Your Order"}
        pageHref={"/"}
      />

      <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-9 col-lg-8">
              <div className="cart-table order-table">
                <div className="table-responsive">
                  <table className="table mb-0">
                    <tbody>
                      <tr>
                        <td className="product-detail">
                          <div className="product border-0">
                            <a
                              href="product.left-sidebar.html"
                              className="product-image"
                            >
                              <img
                                src={Product1}
                                className="img-fluid lazyload"
                                alt=""
                              />
                            </a>
                            <div className="product-detail">
                              <ul>
                                <li className="name">
                                  <a href="product-left.html">Bell pepper</a>
                                </li>

                                <li className="text-content">
                                  Sold By: Fresho
                                </li>

                                <li className="text-content">
                                  Quantity - 500 g
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>

                        <td className="price">
                          <h4 className="table-title text-content">Price</h4>
                          <h6 className="theme-color">$20.68</h6>
                        </td>

                        <td className="quantity">
                          <h4 className="table-title text-content">Qty</h4>
                          <h4 className="text-title">01</h4>
                        </td>

                        <td className="subtotal">
                          <h4 className="table-title text-content">Total</h4>
                          <h5>$35.10</h5>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-detail">
                          <div className="product border-0">
                            <a
                              href="product.left-sidebar.html"
                              className="product-image"
                            >
                              <img
                                src={Product2}
                                className="img-fluid lazyload"
                                alt=""
                              />
                            </a>
                            <div className="product-detail">
                              <ul>
                                <li className="name">
                                  <a href="product-left.html">Eggplant</a>
                                </li>

                                <li className="text-content">Sold By: Nesto</li>

                                <li className="text-content">
                                  Quantity - 250 g
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>

                        <td className="price">
                          <h4 className="table-title text-content">Price</h4>
                          <h6 className="theme-color">$15.14</h6>
                        </td>

                        <td className="quantity">
                          <h4 className="table-title text-content">Qty</h4>
                          <h4 className="text-title">01</h4>
                        </td>

                        <td className="subtotal">
                          <h4 className="table-title text-content">Total</h4>
                          <h5>$52.95</h5>
                        </td>
                      </tr>

                      <tr>
                        <td className="product-detail">
                          <div className="product border-0">
                            <a
                              href="product.left-sidebar.html"
                              className="product-image"
                            >
                              <img
                                src={Product3}
                                className="img-fluid lazyload"
                                alt=""
                              />
                            </a>
                            <div className="product-detail">
                              <ul>
                                <li className="name">
                                  <a href="product-left.html">Onion</a>
                                </li>

                                <li className="text-content">
                                  Sold By: Basket
                                </li>

                                <li className="text-content">
                                  Quantity - 750 g
                                </li>
                              </ul>
                            </div>
                          </div>
                        </td>

                        <td className="price">
                          <h4 className="table-title text-content">Price</h4>
                          <h6 className="theme-color">$29.22</h6>
                        </td>

                        <td className="quantity">
                          <h4 className="table-title text-content">Qty</h4>
                          <h4 className="text-title">01</h4>
                        </td>

                        <td className="subtotal">
                          <h4 className="table-title text-content">Total</h4>
                          <h5>$67.36</h5>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-lg-4">
              <div className="row g-4">
                <div className="col-lg-12 col-sm-6">
                  <div className="summery-box">
                    <div className="summery-header">
                      <h3>Price Details</h3>
                      <h5 className="ms-auto theme-color">(3 Items)</h5>
                    </div>

                    <ul className="summery-contain">
                      <li>
                        <h4>Vegetables Total</h4>
                        <h4 className="price">$32.34</h4>
                      </li>

                      <li>
                        <h4>Vegetables Saving</h4>
                        <h4 className="price theme-color">$12.23</h4>
                      </li>

                      <li>
                        <h4>Coupon Discount</h4>
                        <h4 className="price text-danger">$6.27</h4>
                      </li>
                    </ul>

                    <ul className="summery-total">
                      <li className="list-total">
                        <h4>Total (USD)</h4>
                        <h4 className="price">$19.28</h4>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-12 col-sm-6">
                  <div className="summery-box">
                    <div className="summery-header d-block">
                      <h3>Shipping Address</h3>
                    </div>

                    <ul className="summery-contain pb-0 border-bottom-0">
                      <li className="d-block">
                        <h4>8424 James Lane South</h4>
                        <h4 className="mt-2">San Francisco, CA 94080</h4>
                      </li>

                      <li className="pb-0">
                        <h4>Expected Date Of Delivery:</h4>
                        <h4 className="price theme-color">
                          <a href="order-tracking.html" className="text-danger">
                            Track Order
                          </a>
                        </h4>
                      </li>
                    </ul>

                    <ul className="summery-total">
                      <li className="list-total border-top-0 pt-2">
                        <h4 className="fw-bold">Oct 21, 2021</h4>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12">
                  <div className="summery-box">
                    <div className="summery-header d-block">
                      <h3>Payment Method</h3>
                    </div>

                    <ul className="summery-contain pb-0 border-bottom-0">
                      <li className="d-block pt-0">
                        <p className="text-content">
                          Pay on Delivery (Cash/Card). Cash on delivery (COD)
                          available. Card/Net banking acceptance subject to
                          device availability.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </React.Fragment>
  );
}

export default Orders;
