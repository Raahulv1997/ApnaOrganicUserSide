import React, { Fragment} from "react";
import Logo from "../../Photos/media/1.718c1ec8.png";
import "../../CSS/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import Accordion from "react-bootstrap/Accordion";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import axios from "axios";
const Header = () => {
  const useridd = localStorage.getItem("userid")

  const[categorydata,setCategoryData]=useState([]);
  const[pdata,setPdata]=useState([]);
  const navigate= useNavigate()
  const [click, setclick] = useState(false);
  const [search, setsearch] = useState('');
  // const [cat_list, setcat_list] = useState(false);
  const open_Category = () => {
    setclick(true);
  };
  useEffect(() => {
    function getCategoryData() {
      try {
        axios
          .get(`${process.env.REACT_APP_BASEURL}/get_all_category`)
          .then((response) => {
            let data = response.data;
            // console.log("category---------------"+JSON.stringify(data))
            setCategoryData(data)
            // setsearchData(data);

          });
      } catch (err) {}
    }

    getCategoryData();
  }, []);
  const result = categorydata.filter((thing, index, self) =>
        index === self.findIndex((t,x) => (
          t.root_category_name == thing.root_category_name,
        x.down1_category_name==thing.down1_category_name
        )))
  const searchProduct=(e)=>{
    e.preventDefault();
    // let search=e.target.formSearchInputBox.value;
    // console.log("------->>>"+search=`${search}`)
    navigate(`/shop?search=${search}`)
  }
  useEffect(() => {
    function getProductData() {
      try {
        axios
        .get(`${process.env.REACT_APP_BASEURL}/cart?user_id=${useridd}`)
        .then((response) => {
            let data = response.data;
            setPdata(data);
            // setapicall(false);
          });
      } catch (err) {}
    }

    getProductData();
  }, []);

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

                  {/* <div className="search-full">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </span>
                      <input
                        onChange={(e)=>{setsearch(e.target.value)}}
                        type="text"
                        className="form-control search-type"
                        placeholder="Search here.."
                        value={search}
                      />
                      <span className="input-group-text close-search">
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </span>
                    </div>
                  </div> */}

                  <div className="middle-box">
                    <form onSubmit={searchProduct}>
                      <div className="center-box">
                        <div className="searchbar-box order-xl-1 d-none d-xl-block">
                          <input
                            onChange={(e)=>{setsearch(e.target.value)}}
                            type="search"
                            className="form-control"
                            // id="formSearchInputBox"
                            name="formSearchInputBox"
                            placeholder="search for product, delivered to your door..."
                            value={search}
                            onKeyPress={event => {
                              if (event.key === "Enter") {
                                searchProduct(event)
                              }}}
                          />
                          <button className="btn search-button" onClick={searchProduct}>
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
                    </form>
                  </div>
                  <div className="right-nav">
                    <div className="nav-number"></div>

                    {/* <NavLink
                      to="/login"
                      className="btn theme-bg-color ms-3 fire-button"
                    > */}
                    <Link to="/login">
                      <span>Login</span>
                    </Link>

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
                          <Dropdown.Item>English</Dropdown.Item>
                          <Dropdown.Item>Hindi</Dropdown.Item>
                          <Dropdown.Item>Gujarati</Dropdown.Item>
                          <Dropdown.Item>Arbic</Dropdown.Item>
                          <Dropdown.Item>Rusia</Dropdown.Item>
                          <Dropdown.Item>Chinese</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Dropdown>
                        <Dropdown.Toggle variant="white" id="dropdown-basic">
                          Dollar
                          <i className="fa-solid fa-angle-down"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>USD</Dropdown.Item>
                          <Dropdown.Item> INR</Dropdown.Item>
                          <Dropdown.Item>EUR</Dropdown.Item>
                          <Dropdown.Item>AUD</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="option-list">
                      <ul className="m-0">
                        <li>
                          <Link to="/"
                            className="header-icon user-icon search-icon"
                          >
                            <i className="fa-regular fa-cart-shopping icon_color"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/"
                            className="header-icon search-box search-icon"
                          >
                            <i className="fa-regular fa-magnifying-glass"></i>
                          </Link>
                        </li>
                        <li className="onhover-dropdown">
                          <Link
                            to="/wishlist"
                            className="header-icon swap-icon"
                          >
                            <i className="fa-regular fa-heart icon_color"></i>
                          </Link>
                        </li>
                        <li className="onhover-dropdown ">
                          <NavLink to="/cart" className="header-icon bag-icon ">
                            <small className="badge-number">{pdata.length === 0 || pdata.length === '' || pdata.length === '0' ? '0' :pdata.length}</small>
                            <i className="fa-regular fa-cart-shopping icon_color"></i>
                          </NavLink>
                          <div className="onhover-div">
                            <ul className="cart-list " style={{flexDirection: "column"}}>
                            {(pdata || []).map((data)=>{
                                 return(
                              <li >
                                <div className="drop-cart ">
                                    <Link to="/"
                                    className="drop-image"
                                  >
                                    <img
                                      src="../public/vegetable/product/1.png"
                                      className="lazyload"
                                      alt=""
                                    />
                                  </Link>

                                  <div className="drop-contain">
                                   
                                    <Link to="/">
                                      <h5>
                                        {data.product_title_name}
                                      </h5>
                                    </Link>
                                    <h6>
                                      <span className="im=block">{data.quantity}x</span> <span>
                                      ₹{data.product_price}
                                        </span>
                                      {/* <span>{data.sale_price}</span> */}
                                    </h6>
                                    <button className="close-button">
                                      <i className="fa-solid fa-xmark"></i>
                                    </button>
                                  </div>
                                </div>
                              </li>
                              )
                            })}
                              </ul>
                            <div className="price-box">
                              <h5>Price :</h5>
                              <h4 className="theme-color fw-bold">₹106.58</h4>
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
                                className="btn btn-sm cart-button theme-bg-color text-white"
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

                  <div
                    className={
                      click === true
                        ? "category-dropdown show"
                        : "category-dropdown"
                    }
                  >
                    <div className="category-title">
                      <h5>Categories</h5>
                      <button
                        type="button"
                        className="btn p-0 close-button text-content"
                      >
                        <i
                          className="fa-solid fa-xmark"
                          onClick={() => setclick(false)}
                        ></i>
                      </button>
                    </div>
                    <Accordion>
                       
                        {result.map((catdata)=>{
                      return(
                        <>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>{catdata.root_category_name}</Accordion.Header>
                        <Accordion.Body>
                          <div className="onhover-category-box">
                            <div className="list-1">
                              <div className="category-title-box">
                                <div>
                                  <h5>{catdata.down1_category_name}</h5>
                                </div>

                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">
                                  {catdata.down2_category_name}
                                  </Link>
                                </li>
                                {/* <li>
                                  <Link to="/">
                                    Cucumber & Capsicum
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Leafy Vegetables
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Root Vegetables
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">Beans & Okra</Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Cabbage & Cauliflower
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Gourd & Drumstick
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">Specialty</Link>
                                </li> */}
                              </ul>
                            </div>
                            {/* <div className="list-2">
                              <div className="category-title-box">
                                <h5>Fresh Fruit</h5>
                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">
                                    Banana & Papaya
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Kiwi, Citrus Fruit
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Apples & Pomegranate
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Seasonal Fruits
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">Mangoes</Link>
                                </li>
                                <li>
                                  <Link to="/">Fruit Baskets</Link>
                                </li>
                              </ul>
                            </div> */}
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      </>
 )})}
   </Accordion>
                      {/* <Accordion.Item eventKey="1">
                        <Accordion.Header>Beverages</Accordion.Header>
                        <Accordion.Body>
                          <div className="onhover-category-box">
                            <div className="list-1 single_list">
                              <div className="category-title-box">
                                <h5>Energy & Soft Drinks</h5>
                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">
                                    Soda & Cocktail Mix
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Soda & Cocktail Mix
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Sports & Energy Drinks
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Non Alcoholic Drinks
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">Packaged Water</Link>
                                </li>
                                <li>
                                  <Link to="/">Spring Water</Link>
                                </li>
                                <li>
                                  <Link to="/">Flavoured Water</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Meats & Seafood</Accordion.Header>
                        <Accordion.Body>
                          <div className="onhover-category-box">
                            <div className="list-1">
                              <div className="category-title-box">
                                <h5>Meat</h5>
                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">Fresh Meat</Link>
                                </li>
                                <li>
                                  <Link to="/">Frozen Meat</Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Marinated Meat
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Fresh & Frozen Meat
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="list-2">
                              <div className="category-title-box">
                                <h5>Seafood</h5>
                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">
                                    Fresh Water Fish
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">Dry Fish</Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Frozen Fish & Seafood
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Marine Water Fish
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Canned Seafood
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Prawans & Shrimps
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">Other Seafood</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Breakfast & Dairy</Accordion.Header>
                        <Accordion.Body>
                          <div className="onhover-category-box">
                            <div className="list-1">
                              <div className="category-title-box">
                                <h5>Breakfast Cereals</h5>
                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">
                                    Oats & Porridge
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">Kids Cereal</Link>
                                </li>
                                <li>
                                  <Link to="/">Muesli</Link>
                                </li>
                                <li>
                                  <Link to="/">Flakes</Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Granola & Cereal Bars
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Instant Noodles
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Pasta & Macaroni
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Frozen Non-Veg Snacks
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="list-2">
                              <div className="category-title-box">
                                <h5>Dairy</h5>
                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">Milk</Link>
                                </li>
                                <li>
                                  <Link to="/">Curd</Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Paneer, Tofu & Cream
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Butter & Margarine
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Condensed, Powdered Milk
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Buttermilk & Lassi
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Yogurt & Shrikhand
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Flavoured, Soya Milk
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>Frozen Foods</Accordion.Header>
                        <Accordion.Body>
                          <div className="onhover-category-box w-100">
                            <div className="list-1 single_list">
                              <div className="category-title-box">
                                <h5>Noodle, Pasta</h5>
                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">
                                    Instant Noodles
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">Hakka Noodles</Link>
                                </li>
                                <li>
                                  <Link to="/">Cup Noodles</Link>
                                </li>
                                <li>
                                  <Link to="/">Vermicelli</Link>
                                </li>
                                <li>
                                  <Link to="/">Instant Pasta</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>Biscuits & Snacks</Accordion.Header>
                        <Accordion.Body>
                          <div className="onhover-category-box">
                            <div className="list-1">
                              <div className="category-title-box">
                                <h5>Biscuits & Cookies</h5>
                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">
                                    Salted Biscuits
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Marie, Health, Digestive
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Cream Biscuits & Wafers
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Glucose & Milk Biscuits
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">Cookies</Link>
                                </li>
                              </ul>
                            </div>

                            <div className="list-2">
                              <div className="category-title-box">
                                <h5>Bakery Snacks</h5>
                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">
                                    Bread Sticks & Lavash
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Cheese & Garlic Bread
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Puffs, Patties, Sandwiches
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Breadcrumbs & Croutons
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>Grocery & Staples</Accordion.Header>
                        <Accordion.Body>
                          <div className="onhover-category-box">
                            <div className="list-1">
                              <div className="category-title-box">
                                <h5>Grocery</h5>
                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">
                                    Lemon, Ginger & Garlic
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Indian & Exotic Herbs
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Organic Vegetables
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Organic Fruits
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="list-2">
                              <div className="category-title-box">
                                <h5>Organic Staples</h5>
                              </div>
                              <ul className="p-0">
                                <li>
                                  <Link to="/">
                                    Organic Dry Fruits
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Organic Dals & Pulses
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Organic Millet & Flours
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Organic Sugar, Jaggery
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Organic Masalas & Spices
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Organic Rice, Other Rice
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Organic Flours
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    Organic Edible Oil, Ghee
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item> */}
                     
                     
                  
                    
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
                          <Link
                            className="nav-link dropdown-toggle ps-xl-2 ps-0"
                            to="/"
                            data-bs-toggle="dropdown"
                          >
                            Home
                          </Link>

                          <div className="dropdown-menu dropdown-menu-2 dropdown-image dropdown-menu-left">
                            <div className="dropdown-column">
                              <Link to="/" className="dropdown-item">
                                <img
                                  src="../public/theme/1.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <span>Kartshop</span>
                              </Link>

                              <Link to="/" className="dropdown-item">
                                <img
                                  src="../public/theme/2.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <span>Sweetshop</span>
                              </Link>

                              <Link to="/" className="dropdown-item">                                <img
                                src="../public/theme/3.jpg"
                                className="img-fluid"
                                alt=""
                              />
                                <span>Organic</span>
                              </Link>

                              <Link to="/" className="dropdown-item">
                                <img
                                  src="../public/theme/4.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <span>Supershop</span>
                              </Link>

                              <Link to="/" className="dropdown-item">
                                <img
                                  src="../public/theme/5.jpg"
                                  className="img-fluid"
                                  alt=""
                                />
                                <span>Slicktech</span>
                              </Link>
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

                          <ul className="dropdown-menu ps-4">
                            <li>
                              <Link to="/"
                                className="dropdown-item"
                              >
                                Shop Category Slider
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Shop Category Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Shop Banner
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Shop Left Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Shop List
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Shop Right Sidebar
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Shop Top Filter
                              </Link>
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

                          <ul className="dropdown-menu ps-4">
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Product 4 Image
                              </Link>
                            </li>
                            <li>
                              <Link to="/"

                                className="dropdown-item"
                              >
                                Product Bottom Thumbnail
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"
                              >
                                Product Left Thumbnail
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"
                              >
                                Product Left
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"
                              >
                                Product Right Thumbnail
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"
                              >
                                Product Slider
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"
                              >
                                Product Sticky
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown dropdown-mega">
                          <Link to="/"
                            className="nav-link dropdown-toggle ps-xl-2 ps-0"

                            data-bs-toggle="dropdown"
                          >
                            Mega Menu
                          </Link>

                          <div className="dropdown-menu dropdown-menu-2 row g-3">
                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">
                                Daily Vegetables
                              </h5>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Beans & Brinjals
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Broccoli & Cauliflower
                              </Link>

                              <Link to="/"

                                className="dropdown-item"
                              >
                                Chilies, Garlic
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Vegetables & Salads
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Gourd, Cucumber
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Herbs & Sprouts
                              </Link>

                              <Link to="/"

                                className="dropdown-item"
                              >
                                Lettuce & Leafy
                              </Link>
                            </div>

                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">Baby Tender</h5>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Beans & Brinjals
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Broccoli & Cauliflower
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Chilies, Garlic
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Vegetables & Salads
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Gourd, Cucumber
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Potatoes & Tomatoes
                              </Link>

                              <Link to="/"

                                className="dropdown-item"
                              >
                                Peas & Corn
                              </Link>
                            </div>

                            <div className="dropdown-column col-xl-3">
                              <h5 className="dropdown-header">
                                Exotic Vegetables
                              </h5>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Asparagus & Artichokes
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Avocados & Peppers
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Broccoli & Zucchini
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Celery, Fennel & Leeks
                              </Link>

                              <Link to="/"
                                className="dropdown-item"

                              >
                                Chilies & Lime
                              </Link>
                            </div>

                            <div className="dropdown-column dropdown-column-img col-3"></div>
                          </div>
                        </li>

                        <li className="nav-item dropdown">
                          <Link to="/"
                            className="nav-link dropdown-toggle"

                            data-bs-toggle="dropdown"
                          >
                            Blog
                          </Link>
                          <ul className="dropdown-menu ps-4">
                            <li>
                              <NavLink
                                to="/blog_detail"
                                className="dropdown-item"
                              >
                                {" "}
                                Blog Detail
                              </NavLink>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Blog Grid
                              </Link>
                            </li>
                            <li>
                              <NavLink
                                to="/blog_list"
                                className="dropdown-item"
                              >
                                Blog List
                              </NavLink>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropdown">
                          <Link to="/"
                            className="nav-link dropdown-toggle"

                            data-bs-toggle="dropdown"
                          >
                            Pages
                          </Link>
                          <ul className="dropdown-menu ps-4">
                            <li>
                              <Link to="/" className="dropdown-item" >
                                404
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/aboutus">
                                About Us
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/cart">
                                Cart
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item">
                                Checkout
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Coming Soon
                              </Link>
                            </li>
                            <li>
                              <Link to="/" className="dropdown-item">
                                Compare
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/faq">
                                Faq
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Order Success
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                Order Tracking
                              </Link>
                            </li>
                            <li>
                              <Link to="/otp_verification" className="dropdown-item">
                                OTP
                              </Link>
                            </li>
                            <li>
                              <Link to="/" className="dropdown-item">
                                Search
                              </Link>
                            </li>
                            <li>
                              <Link to="/"
                                className="dropdown-item"

                              >
                                User Dashboard
                              </Link>
                            </li>
                            <li>
                              <Link to="/" className="dropdown-item">
                                Wishlist
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link nav-link-2" to="/contactus">
                            Contact
                          </Link>
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
                  {/* <a
                    href="#"
                    className="btn theme-bg-color ms-3 fire-button"
                    data-bs-toggle="modal"
                    data-bs-target="#deal-box"
                  >
                    <div className="fire">
                                            <img src="../public/icon/hot-sale.png" className="img-fluid" />
                                        </div> 
                    <span>Hot Deals</span>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-menu d-md-none d-block mobile-cart">
        <ul className="p-0">
          <li className="mobile-category" onClick={open_Category}>
            <Link to="">
              <BiCategory />
              <span>Category</span>
            </Link>
          </li>
          <li className="active">
            <Link to="/">
              <AiOutlineHome className="" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="" className="search-box">
              <AiOutlineSearch />
              <span>Search</span>
            </Link>
          </li>

          <li>
            <Link to="/wishlist" className="notifi-wishlist">
              <AiOutlineHeart />
              <span>My Wish</span>
            </Link>
          </li>

          <li>
            <Link to="/cart">
              <AiOutlineShoppingCart />
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- Header End --> */}
    </Fragment>
  );
};
export default Header;
