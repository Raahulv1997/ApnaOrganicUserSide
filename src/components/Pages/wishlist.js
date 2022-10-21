import React from 'react'
import Header from '../part/header'
import Breadcumb from '../UI/beadcumb'
import Footer from '../part/footer'
import ProductBox from "../UI/product-box";
import data from "../Pages/data";
function wishlist() {
    var product = data.product;
    console.log(product);
  return (
      <React.Fragment>
      <Header/>
      <Breadcumb pageName={'Wishlist'} pageTitle={'Wishlist'} pageHref={"/"} />

 
<div className="container-fluid-lg my-5">
      <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="all"
                  role="tabpanel"
                  aria-labelledby="all-tab"
                >
                  <div className="row w-100">
                    {product.map((product) => {
                      return (
                        <div
                          key={product.id}
                          className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                        >
                          <ProductBox
                            image={product.image}
                            name={product.name}
                            productPrice={product.productPrice}
                            productMRF={product.productMRF}
                            
                          />
                          <ProductBox
                            image={product.image}
                            name={product.name}
                            productPrice={product.productPrice}
                            productMRF={product.productMRF}

                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              </div>



  <div className="modal location-modal fade theme-modal" id="locationModal" tabindex="-1"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Choose your Delivery Location</h5>
                  <p className="mt-1 text-content">Enter your address and we will specify the offer for your area.</p>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <i className="fa-solid fa-xmark"></i>
                  </button>
              </div>
              <div className="modal-body">
                  <div className="location-list">
                      <div className="search-input">
                          <input type="search" className="form-control" placeholder="Search Your Area"/>
                          <i className="fa-solid fa-magnifying-glass"></i>
                      </div>

                      <div className="disabled-box">
                          <h6>Select a Location</h6>
                      </div>

                      <ul className="location-select custom-height">
                          <li>
                              <a href="javascript:void(0)">
                                  <h6>Alabama</h6>
                                  <span>Min: $130</span>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <h6>Arizona</h6>
                                  <span>Min: $150</span>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <h6>California</h6>
                                  <span>Min: $110</span>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <h6>Colorado</h6>
                                  <span>Min: $140</span>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <h6>Florida</h6>
                                  <span>Min: $160</span>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <h6>Georgia</h6>
                                  <span>Min: $120</span>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <h6>Kansas</h6>
                                  <span>Min: $170</span>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <h6>Minnesota</h6>
                                  <span>Min: $120</span>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <h6>New York</h6>
                                  <span>Min: $110</span>
                              </a>
                          </li>

                          <li>
                              <a href="javascript:void(0)">
                                  <h6>Washington</h6>
                                  <span>Min: $130</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>


 
  
  <div className="modal fade theme-modal deal-modal" id="deal-box" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
          <div className="modal-content">
              <div className="modal-header">
                  <div>
                      <h5 className="modal-title w-100" id="deal_today">Deal Today</h5>
                      <p className="mt-1 text-content">Recommended deals for you.</p>
                  </div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                      <i className="fa-solid fa-xmark"></i>
                  </button>
              </div>
              <div className="modal-body">
                  <div className="deal-offer-box">
                      <ul className="deal-offer-list">
                          <li className="list-1">
                              <div className="deal-offer-contain">
                                  <a href="shop-left-sidebar.html" className="deal-image">
                                      <img src="../assets/images/vegetable/product/10.png" className="blur-up lazyload"
                                          alt=""/>
                                  </a>

                                  <a href="shop-left-sidebar.html" className="deal-contain">
                                      <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                      <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                  </a>
                              </div>
                          </li>

                          <li className="list-2">
                              <div className="deal-offer-contain">
                                  <a href="shop-left-sidebar.html" className="deal-image">
                                      <img src="../assets/images/vegetable/product/11.png" className="blur-up lazyload"
                                          alt=""/>
                                  </a>

                                  <a href="shop-left-sidebar.html" className="deal-contain">
                                      <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                      <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                  </a>
                              </div>
                          </li>

                          <li className="list-3">
                              <div className="deal-offer-contain">
                                  <a href="shop-left-sidebar.html" className="deal-image">
                                      <img src="../assets/images/vegetable/product/12.png" className="blur-up lazyload"
                                          alt=""/>
                                  </a>

                                  <a href="shop-left-sidebar.html" className="deal-contain">
                                      <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                      <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                  </a>
                              </div>
                          </li>

                          <li className="list-1">
                              <div className="deal-offer-contain">
                                  <a href="shop-left-sidebar.html" className="deal-image">
                                      <img src="../assets/images/vegetable/product/13.png" className="blur-up lazyload"
                                          alt=""/>
                                  </a>

                                  <a href="shop-left-sidebar.html" className="deal-contain">
                                      <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                      <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                  </a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div className="theme-option">
      <div className="setting-box">
          <button className="btn setting-button">
              <i className="fa-solid fa-gear"></i>
          </button>

          <div className="theme-setting-2">
              <div className="theme-box">
                  <ul>
                      <li>
                          <div className="setting-name">
                              <h4>Color</h4>
                          </div>
                          <div className="theme-setting-button color-picker">
                              <form className="form-control">
                                  <label for="colorPick" className="form-label mb-0">Theme Color</label>
                                  <input type="color" className="form-control form-control-color" id="colorPick"
                                      value="#0da487" title="Choose your color"/>
                              </form>
                          </div>
                      </li>

                      <li>
                          <div className="setting-name">
                              <h4>Dark</h4>
                          </div>
                          <div className="theme-setting-button">
                              <button className="btn btn-2 outline" id="darkButton">Dark</button>
                              <button className="btn btn-2 unline" id="lightButton">Light</button>
                          </div>
                      </li>

                      <li>
                          <div className="setting-name">
                              <h4>RTL</h4>
                          </div>
                          <div className="theme-setting-button rtl">
                              <button className="btn btn-2 rtl-unline">LTR</button>
                              <button className="btn btn-2 rtl-outline">RTL</button>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>

      <div className="back-to-top">
          <a id="back-to-top" href="#">
              <i className="fas fa-chevron-up"></i>
          </a>
      </div>
  </div>
  <Footer/>
  </React.Fragment>
  )
}

export default wishlist