import React, { Fragment } from "react";
import Logo from "../../Photos/media/1.718c1ec8.png";
import "../../CSS/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      {/* <!-- Header Start --> */}
      <header className="header-2">
        <div className="top-nav top-header sticky-header sticky-header-3">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="navbar-top">
                  <NavLink to="/" className="web-logo nav-logo">
                    <img src={Logo} className="img-fluid lazyload" alt="" />
                  </NavLink>

                  <div className="search-full">
                    <div className="input-group">
                      <span className="input-group-text">
                        {/* <i data-feather="search" className="font-light"></i> */}
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control search-type"
                        placeholder="Search here.."
                      />
                      <span className="input-group-text close-search">
                        {/* <i data-feather="x" className="font-light"></i> */}
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </span>
                    </div>
                  </div>

                  <div className="middle-box">
                    <div className="center-box">
                      <div className="searchbar-box order-xl-1 d-none d-xl-block">
                        <input
                          type="search"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="search for product, delivered to your door..."
                        />
                        <button className="btn search-button">
                          <i className="fa-regular fa-magnifying-glass"></i>
                        </button>
                      </div>
                      {/* <div className="location-box-2">
                        <button
                          className="btn location-button"
                          data-bs-toggle="modal"
                          data-bs-target="#locationModal"
                        >
                          <i className="fa-regular fa-location-dot"></i>
                          <span className="locat-name">Your Location</span>
                          <i className="fa-solid fa-angle-down"></i>
                        </button>
                      </div> */}
                    </div>
                  </div>
                  <div className="right-nav">
                    <div className="nav-number"></div>

                    {/* <NavLink
                      to="/login"
                      className="btn theme-bg-color ms-3 fire-button"
                    > */}
                      <Link to="/login"><span>Login</span></Link>
                      
                    {/* </NavLink> */}
                  </div>
                  <div className="right-nav">
                    <div className="nav-number"></div>

                    {/* <NavLink
                      to=""
                      className="btn theme-bg-color ms-3 fire-button"
                    > */}
                      {/* <Link to=""><span>Location</span></Link>
                      <i className="fa-solid fa-angle-down"></i> */}
                    {/* </NavLink> */}
                  </div>
                  <div className="rightside-menu">
                    <div className="dropdown-dollar">
                  <Dropdown>
                    <Dropdown.Toggle variant="white" id="dropdown-basic">
                    Language
                    <i className="fa-solid fa-angle-down"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="">English</Dropdown.Item>
                      <Dropdown.Item href="">Hindi</Dropdown.Item>
                      <Dropdown.Item href="">Gujarati</Dropdown.Item>
                      <Dropdown.Item href="">Arbic</Dropdown.Item>
                      <Dropdown.Item href="">Rusia</Dropdown.Item>
                      <Dropdown.Item href="">Chinese</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>
                 <Dropdown>
                          <Dropdown.Toggle variant="white" id="dropdown-basic">
                          Dollar
                          <i className="fa-solid fa-angle-down"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                              <Dropdown.Item href="#/action-2"> INR</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">EUR</Dropdown.Item>
                              <Dropdown.Item href="#/action-3">AUD</Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown> 
                  {/* <div className="rightside-menu">
                    <div className="dropdown-dollar"> */}
                      
                      {/* <div className="dropdown">
                        <button
                          className="dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>Language</span>
                          <i className="fa-solid fa-angle-down"></i>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              id="eng"
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              English
                            </a>
                          </li>
                          <li>
                            <a
                              id="hin"
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Hindi
                            </a>
                          </li>
                          <li>
                            <a
                              id="guj"
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Gujarati
                            </a>
                          </li>
                          <li>
                            <a
                              id="arb"
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Arbic
                            </a>
                          </li>
                          <li>
                            <a
                              id="rus"
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Rusia
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              Chinese
                            </a>
                          </li>
                        </ul>
                      </div> */}
                      {/* <div className="dropdown">
                        <button
                          className="dropdown-toggle m-0"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span>Dollar</span>
                          <i className="fa-solid fa-angle-down"></i>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              id="usd"
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              USD
                            </a>
                          </li>
                          <li>
                            <a
                              id="inr"
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              INR
                            </a>
                          </li>
                          <li>
                            <a
                              id="eur"
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              EUR
                            </a>
                          </li>
                          <li>
                            <a
                              id="aud"
                              className="dropdown-item"
                              href="javascript:void(0)"
                            >
                              AUD
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </div>

                    <div className="option-list">
                      <ul>
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="header-icon user-icon search-icon"
                          >
                            <i className="fa-regular fa-cart-shopping icon_color"></i>
                          </a>
                        </li>

                        <li>
                          <a
                            href="javascript:void(0)"
                            className="header-icon search-box search-icon"
                          >
                            <i className="fa-regular fa-magnifying-glass"></i>
                          </a>
                        </li>

                        <li className="onhover-dropdown">
                          <Link to="/wishlist"
                            className="header-icon swap-icon"
                          >
                            <i className="fa-regular fa-heart icon_color"></i>
                          </Link>
                        </li>

                        <li className="onhover-dropdown">
                          <NavLink to="/cart" className="header-icon bag-icon ">
                            <small className="badge-number">2</small>
                            <i className="fa-regular fa-cart-shopping icon_color"></i>
                          </NavLink>
                          <div className="onhover-div">
                            <ul className="cart-list">
                              <li>
                                <div className="drop-cart">
                                  <a
                                    href="./product-detail"
                                    className="drop-image"
                                  >
                                    <img
                                      src="../public/vegetable/product/1.png"
                                      className="lazyload"
                                      alt=""
                                    />
                                  </a>

                                  <div className="drop-contain">
                                    <a href="./product-detail">
                                      <h5>
                                        Fantasy Crunchy Choco Chip Cookies
                                      </h5>
                                    </a>
                                    <h6>
                                      <span>1 x</span> $80.58
                                    </h6>
                                    <button className="close-button">
                                      <i className="fa-solid fa-xmark"></i>
                                    </button>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="drop-cart">
                                  <a
                                    href="./product-detail"
                                    className="drop-image"
                                  >
                                    <img
                                      src="../public/vegetable/product/2.png"
                                      className="lazyload"
                                      alt=""
                                    />
                                  </a>

                                  <div className="drop-contain">
                                    <a href="./product-detail">
                                      <h5>
                                        Peanut Butter Bite Premium Butter
                                        Cookies 600 g
                                      </h5>
                                    </a>
                                    <h6>
                                      <span>1 x</span> $25.68
                                    </h6>
                                    <button className="close-button">
                                      <i className="fa-solid fa-xmark"></i>
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>

                            <div className="price-box">
                              <h5>Price :</h5>
                              <h4 className="theme-color fw-bold">$106.58</h4>
                            </div>

                            <div className="button-group">
                              <NavLink
                                to="/cart"
                                className="btn btn-sm cart-button"
                              >
                                View Cart
                              </NavLink>
                              <NavLink
                                to="/checkout"
                                className="btn btn-sm cart-button theme-bg-color
                                                    text-white"
                              >
                                Checkout
                              </NavLink>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="main-nav">
                <div className="header-nav-left">
                  <button className="dropdown-category dropdown-category-2">
                    <i className="fa-sharp fa-solid fa-bars pe-2 mt-1"></i>
                    <span>All Categories</span>
                  </button>

                  <div className="category-dropdown">
                    <div className="category-title">
                      <h5>Categories</h5>
                      <button
                        type="button"
                        className="btn p-0 close-button text-content"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>

                    <ul className="category-list">
                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="../public/svg/1/vegetable.svg" alt="" />
                          <h6>Vegetables & Fruit</h6>
                          <i className="fa-solid fa-chevron-right"></i>
                        </a>

                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Organic Vegetables</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Potato & Tomato</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Cucumber & Capsicum
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Leafy Vegetables
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Root Vegetables</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Beans & Okra</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Cabbage & Cauliflower
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Gourd & Drumstick
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Specialty</a>
                              </li>
                            </ul>
                          </div>

                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Fresh Fruit</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Banana & Papaya</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Kiwi, Citrus Fruit
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Apples & Pomegranate
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Seasonal Fruits</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Mangoes</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Fruit Baskets</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="../public/svg/1/cup.svg" alt="" />
                          <h6>Beverages</h6>
                          <i className="fa-solid fa-chevron-right"></i>
                        </a>

                        <div className="onhover-category-box w-100">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Energy & Soft Drinks</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">
                                  Soda & Cocktail Mix
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Soda & Cocktail Mix
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Sports & Energy Drinks
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Non Alcoholic Drinks
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Packaged Water</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Spring Water</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Flavoured Water</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="../public/svg/1/meats.svg" alt="" />
                          <h6>Meats & Seafood</h6>
                          <i className="fa-solid fa-chevron-right"></i>
                        </a>

                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Meat</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Fresh Meat</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Frozen Meat</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Marinated Meat</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Fresh & Frozen Meat
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Seafood</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">
                                  Fresh Water Fish
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Dry Fish</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Frozen Fish & Seafood
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Marine Water Fish
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Canned Seafood</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Prawans & Shrimps
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Other Seafood</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="../public/svg/1/breakfast.svg" alt="" />
                          <h6>Breakfast & Dairy</h6>
                          <i className="fa-solid fa-chevron-right"></i>
                        </a>

                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Breakfast Cereals</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Oats & Porridge</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Kids Cereal</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Muesli</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Flakes</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Granola & Cereal Bars
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Instant Noodles</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Pasta & Macaroni
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Frozen Non-Veg Snacks
                                </a>
                              </li>
                            </ul>
                          </div>

                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Dairy</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Milk</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Curd</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Paneer, Tofu & Cream
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Butter & Margarine
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Condensed, Powdered Milk
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Buttermilk & Lassi
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Yogurt & Shrikhand
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Flavoured, Soya Milk
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="../public/svg/1/frozen.svg" alt="" />
                          <h6>Frozen Foods</h6>
                          <i className="fa-solid fa-chevron-right"></i>
                        </a>

                        <div className="onhover-category-box w-100">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Noodle, Pasta</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Instant Noodles</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Hakka Noodles</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Cup Noodles</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Vermicelli</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Instant Pasta</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="../public/svg/1/biscuit.svg" alt="" />
                          <h6>Biscuits & Snacks</h6>
                          <i className="fa-solid fa-chevron-right"></i>
                        </a>

                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Biscuits & Cookies</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">Salted Biscuits</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Marie, Health, Digestive
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Cream Biscuits & Wafers
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Glucose & Milk Biscuits
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Cookies</a>
                              </li>
                            </ul>
                          </div>

                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Bakery Snacks</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">
                                  Bread Sticks & Lavash
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Cheese & Garlic Bread
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Puffs, Patties, Sandwiches
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Breadcrumbs & Croutons
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li className="onhover-category-list">
                        <a href="javascript:void(0)" className="category-name">
                          <img src="../public/svg/1/grocery.svg" alt="" />
                          <h6>Grocery & Staples</h6>
                          <i className="fa-solid fa-chevron-right"></i>
                        </a>

                        <div className="onhover-category-box">
                          <div className="list-1">
                            <div className="category-title-box">
                              <h5>Grocery</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">
                                  Lemon, Ginger & Garlic
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Indian & Exotic Herbs
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Organic Vegetables
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Organic Fruits</a>
                              </li>
                            </ul>
                          </div>

                          <div className="list-2">
                            <div className="category-title-box">
                              <h5>Organic Staples</h5>
                            </div>
                            <ul>
                              <li>
                                <a href="javascript:void(0)">
                                  Organic Dry Fruits
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Organic Dals & Pulses
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Organic Millet & Flours
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Organic Sugar, Jaggery
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Organic Masalas & Spices
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Organic Rice, Other Rice
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">Organic Flours</a>
                              </li>
                              <li>
                                <a href="javascript:void(0)">
                                  Organic Edible Oil, Ghee
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                  <div
                    className="offcanvas offcanvas-collapse order-xl-2"
                    id="primaryMenu"
                  >
                    <div className="offcanvas-header navbar-shadow">
                      <h5>Menu</h5>
                      <button
                        className="btn-close lead"
                        type="button"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown dropdown-mega">
                          <a
                            className="nav-link dropdown-toggle ps-xl-2 ps-0"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Home
                          </a>

                          <div className="dropdown-menu dropdown-menu-2 dropdown-image dropdown-menu-left">
                            <div className="dropdown-column">
                              <a className="dropdown-item" href="index.html">
                                <img
                                  src="../public/theme/1.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <span>Kartshop</span>
                              </a>

                              <a className="dropdown-item" href="index-2.html">
                                <img
                                  src="../public/theme/2.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <span>Sweetshop</span>
                              </a>

                              <a className="dropdown-item" href="index-3.html">
                                <img
                                  src="../public/theme/3.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <span>Organic</span>
                              </a>

                              <a className="dropdown-item" href="index-4.html">
                                <img
                                  src="../public/theme/4.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <span>Supershop</span>
                              </a>

                              <a className="dropdown-item" href="index-5.html">
                                <img
                                  src="../public/theme/5.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <span>Slicktech</span>
                              </a>
                            </div>
                          </div>
                        </li>

                        <li className="nav-item dropdown">
                          <NavLink
                            to="/shop"
                            className="nav-link dropdown-toggle"
                          >
                            Shop
                          </NavLink>

                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-category-slider.html"
                              >
                                Shop Category Slider
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-category.html"
                              >
                                Shop Category Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-banner.html"
                              >
                                Shop Banner
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Shop Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-list.html"
                              >
                                Shop List
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-right-sidebar.html"
                              >
                                Shop Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="shop-top-filter.html"
                              >
                                Shop Top Filter
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown">
                          <NavLink
                            to="/product-detail"
                            className="nav-link dropdown-toggle"
                          >
                            Product
                          </NavLink>

                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="product-4-image.html"
                              >
                                Product 4 Image
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-bottom-thumbnail.html"
                                className="dropdown-item"
                              >
                                Product Bottom Thumbnail
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-left-thumbnail.html"
                                className="dropdown-item"
                              >
                                Product Left Thumbnail
                              </a>
                            </li>
                            <li>
                              <a
                                href="./product-detail"
                                className="dropdown-item"
                              >
                                Product Left
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-right-thumbnail.html"
                                className="dropdown-item"
                              >
                                Product Right Thumbnail
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-slider.html"
                                className="dropdown-item"
                              >
                                Product Slider
                              </a>
                            </li>
                            <li>
                              <a
                                href="product-sticky.html"
                                className="dropdown-item"
                              >
                                Product Sticky
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown dropdown-mega">
                          <a
                            className="nav-link dropdown-toggle ps-xl-2 ps-0"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Mega Menu
                          </a>

                          <div className="dropdown-menu dropdown-menu-2 row g-3">
                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">
                                Daily Vegetables
                              </h5>
                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Beans & Brinjals
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Broccoli & Cauliflower
                              </a>

                              <a
                                href="shop-left-sidebar.html"
                                className="dropdown-item"
                              >
                                Chilies, Garlic
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Vegetables & Salads
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Gourd, Cucumber
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Herbs & Sprouts
                              </a>

                              <a
                                href="demo-personal-portfolio.html"
                                className="dropdown-item"
                              >
                                Lettuce & Leafy
                              </a>
                            </div>

                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">Baby Tender</h5>
                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Beans & Brinjals
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Broccoli & Cauliflower
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Chilies, Garlic
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Vegetables & Salads
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Gourd, Cucumber
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Potatoes & Tomatoes
                              </a>

                              <a
                                href="shop-left-sidebar.html"
                                className="dropdown-item"
                              >
                                Peas & Corn
                              </a>
                            </div>

                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">
                                Exotic Vegetables
                              </h5>
                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Asparagus & Artichokes
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Avocados & Peppers
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Broccoli & Zucchini
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Celery, Fennel & Leeks
                              </a>

                              <a
                                className="dropdown-item"
                                href="shop-left-sidebar.html"
                              >
                                Chilies & Lime
                              </a>
                            </div>

                            <div className="dropdown-column dropdown-column-img col-3"></div>
                          </div>
                        </li>

                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Blog
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a
                                className="dropdown-item"
                                href="blog-detail.html"
                              >
                                Blog Detail
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="blog-grid.html"
                              >
                                Blog Grid
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="blog-list.html"
                              >
                                Blog List
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                          >
                            Pages
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="404.html">
                                404
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="about-us.html">
                                About Us
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="./cart">
                                Cart
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="checkout.html">
                                Checkout
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="coming-soon.html"
                              >
                                Coming Soon
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="compare.html">
                                Compare
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="faq.html">
                                Faq
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="order-success.html"
                              >
                                Order Success
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="order-tracking.html"
                              >
                                Order Tracking
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="otp.html">
                                OTP
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="search.html">
                                Search
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="user-dashboard.html"
                              >
                                User Dashboard
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="wishlist.html">
                                Wishlist
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <a className="nav-link nav-link-2" href="#">
                            Contact
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="right-nav">
                  <div className="nav-number">
                    {/* <img
                      src="../public/icon/music.png"
                      className="img-fluid lazyload"
                      alt=""
                    /> */}
                    <span>(123) 456 7890</span>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="btn theme-bg-color ms-3 fire-button"
                    data-bs-toggle="modal"
                    data-bs-target="#deal-box"
                  >
                    {/* <div className="fire">
                                            <img src="../public/icon/hot-sale.png" className="img-fluid" />
                                        </div> */}
                    <span>Hot Deals</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Header End --> */}
    </Fragment>
  );
};
export default Header;
