import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Header from "../common/header";
import Breadcumb from "../common/beadcumb";
import Footer from "../common/footer";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Profile from "../../Photos/product/user.jpg";
import Product from "../../Photos/product/2.png";
import { MdOutlineDashboard, MdOutlinePrivacyTip } from "react-icons/md";
import { BsHandbag, BsCheck2Square } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCreditCard } from "react-icons/ai";
import { GoLocation, GoMail } from "react-icons/go";
import { RiAccountCircleLine } from "react-icons/ri";
import Col from "react-bootstrap/Col";
import profile_cover from "../../Photos/media/cover-img.jpg";
import InputGroup from "react-bootstrap/InputGroup";

// import {CiMail} from 'react-icons/ci';

function Account() {
  const func=()=>{}
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Password, setPassword] = useState(false);
  const ChangepassClose = () => setPassword(false);
  const ChangepassShow = () => setPassword(true);

  const [addAdderss, setaddAdderss] = useState(false);
  const addAdderssClose = () => setaddAdderss(false);
  const addAdderssShow = () => setaddAdderss(true);

  let userjson = {
    firstName: "Isaac",
    lastName: "Brock",
    email: "isaac.brock@example.com",
    login: "isaac.brock@example.com",
    mobilePhone: "555-415-1337",
    address: "45 Universal Tower, 2nd Floor, Scheme 54 PU4, Indore",
    gender: "Male",
    DOB: "2022-11-09",
  };

  const [click, setclick] = useState(false);
  const side_bar = () => {
    setclick(true);
  };

  // edit Profile

  const [userdata, setuserdata] = useState(userjson);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    let form = event.currentTarget;
    // const name = event.target.value;
    console.log(userdata);
    // console.log("+++++++++FORMDATA"+event.target.DOB.value);

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("aa");
    }

    setValidated(true);
  };

  const OnchangeFistname = (e) => {
    let name = e.target.value;
    console.log(name);
    setuserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  // change Password

  const [changepass, setchangepass] = useState("");
  const [passvalidated, setpassValidated] = useState(false);
  const [formError, setFormError] = useState({
    currentPass: "",
    newPass: "",
    confirmPass: "",
    allPass: "",
  });
  const handlePassSubmit = (event) => {
    event.preventDefault();
    if (
      changepass.confirmpassword == undefined &&
      changepass.newPass == undefined &&
      changepass.currentpassword == undefined
    ) {
      setFormError({
        allPass: "All field are required",
      });

      return false;
    }
    if (changepass.currentpassword == undefined) {
      setFormError({
        currentPass: "Please enter current password",
      });

      return false;
    }
    if (changepass.currentpassword !== "1234") {
      setFormError({
        currentPass: "Not match with current password",
      });
      return false;
    }


    if (changepass.newpassword == undefined) {
      setFormError({
        newPass: "Please enter New password",
      });

      return false;
    }

    if (changepass.confirmpassword == undefined) {
      setFormError({
        confirmPass: "Please enter confirm password",
      });

      return false;
    }

    if (changepass.confirmpassword != changepass.newpassword) {
      setFormError({
        confirmPass: "Password & Confirm password not match",
      });
      return false;
    }
    setFormError("");
    console.log(changepass);
    ChangepassClose();
  };

  const OnchangePass = (e) => {
    let name = e.target.value;
    console.log(name);
    setchangepass({
      ...changepass,
      [e.target.name]: e.target.value,
    });
  };

  //add address
  const [addNewAdderss, setaddNewAdderss] = useState(0);
  const [addAdderssvalidated, setaddAdderssValidated] = useState(false);
  const addAdderssSubmit = (event) => {
    event.preventDefault();

    let form = event.currentTarget;
    console.log(changepass);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setpassValidated(true);
  };

  const OnaddAdderss = (e) => {
    let name = e.target.value;

    console.log(name);
    setchangepass({
      ...changepass,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <Header />
      <Breadcumb
        pageName={"Your Account"}
        pageTitle={"Your Account"}
        pageHref={"/"}
      />

      <section className="user-dashboard-section section-b-space">
        <div className="container-fluid-lg">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="row">
              <div className="col-xxl-3 col-lg-4">
                <div
                  className={
                    click == true
                      ? "dashboard-left-sidebar show"
                      : "dashboard-left-sidebar"
                  }
                >
                  <div className="close-button d-flex d-lg-none">
                    <button className="close-sidebar">
                      <span onClick={() => setclick(false)}>&times;</span>
                    </button>
                  </div>
                  <div className="profile-box">
                    <div className="cover-image">
                      <img
                        src={profile_cover}
                        className="img-fluid  lazyload"
                        alt=""
                      />
                    </div>

                    <div className="profile-contain">
                      <div className="profile-image">
                        <div className="position-relative">
                          <img
                            src={Profile}
                            className=" lazyload update_img"
                            alt=""
                          />
                          <div className="cover-icon">
                            <i className="fa-solid fa-pen">
                              <input type="file" />
                            </i>
                          </div>
                        </div>
                      </div>

                      <div className="profile-name">
                        <h3>Rajaram Patidar</h3>
                        <h6 className="text-content">rajwe2code@gmail.com</h6>
                      </div>
                    </div>
                  </div>

                  <Row>
                    <Nav className="nav nav-pills user-nav-pills">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link p-0"
                              id="pills-order-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-order"
                              type="button"
                              role="tab"
                              aria-controls="pills-order"
                              aria-selected="false"
                              onClick={() => setclick(false)}
                            >
                              <MdOutlineDashboard className="mx-2" />
                              DashBoard
                            </button>
                          </li>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          {" "}
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link p-0"
                              id="pills-order-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-order"
                              type="button"
                              role="tab"
                              aria-controls="pills-order"
                              aria-selected="false"
                              onClick={() => setclick(false)}
                            >
                              <BsHandbag className="mx-2" />
                              Order
                            </button>
                          </li>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="wishlist">
                          {" "}
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link p-0"
                              id="pills-wishlist-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-wishlist"
                              type="button"
                              role="tab"
                              aria-controls="pills-wishlist"
                              aria-selected="false"
                              onClick={() => setclick(false)}
                            >
                              <AiOutlineHeart className="mx-2" />
                              Wishlist
                            </button>
                          </li>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="card">
                          {" "}
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link p-0"
                              id="pills-card-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-card"
                              type="button"
                              role="tab"
                              aria-controls="pills-card"
                              aria-selected="false"
                              onClick={() => setclick(false)}
                            >
                              <AiOutlineCreditCard className="mx-2" /> Saved
                              Card
                            </button>
                          </li>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="address">
                          {" "}
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link p-0"
                              id="pills-address-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-address"
                              type="button"
                              role="tab"
                              aria-controls="pills-address"
                              aria-selected="false"
                              onClick={() => setclick(false)}
                            >
                              <GoLocation className="mx-2" />
                              Address
                            </button>
                          </li>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="profile">
                          {" "}
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link p-0"
                              id="pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-profile"
                              type="button"
                              role="tab"
                              aria-controls="pills-profile"
                              aria-selected="false"
                              onClick={() => setclick(false)}
                            >
                              <RiAccountCircleLine className="mx-2" />
                              Profile
                            </button>
                          </li>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="privacy">
                          {" "}
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link p-0"
                              id="pills-security-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#pills-security"
                              type="button"
                              role="tab"
                              aria-controls="pills-security"
                              aria-selected="false"
                              onClick={() => setclick(false)}
                            >
                              <MdOutlinePrivacyTip className="mx-2" />
                              Privacy
                            </button>
                          </li>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Row>
                </div>
              </div>

              <div className="col-xxl-9 col-lg-8">
                <button
                  className="btn left-dashboard-show btn-animation btn-md fw-bold d-block mb-4 d-lg-none"
                  onClick={side_bar}
                >
                  Show Menu
                </button>
                <div className="dashboard-right-sidebar">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-dashboard"
                          role="tabpanel"
                          aria-labelledby="pills-dashboard-tab"
                        >
                          <div className="dashboard-home">
                            <div className="title">
                              <h2>My Dashboard</h2>
                              <span className="title-leaf">
                                <svg className="icon-width bg-gray">//</svg>
                              </span>
                            </div>

                            <div className="dashboard-user-name">
                              <h6 className="text-content">
                                Hello,{" "}
                                <b className="text-title">Vicki E. Pope</b>
                              </h6>
                              <p className="text-content">
                                From your My Account Dashboard you have the
                                ability to view a snapshot of your recent
                                account activity and update your account
                                information. Select a link below to view or edit
                                information.
                              </p>
                            </div>

                            <div className="total-box">
                              <div className="row g-sm-4 g-3">
                                <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                  <div className="totle-contain">
                                    <img
                                      src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg"
                                      className="img-1  lazyload"
                                      alt=""
                                    />
                                    <img
                                      src="https://themes.pixelstrap.com/fastkart/assets/images/svg/order.svg"
                                      className=" lazyload"
                                      alt=""
                                    />
                                    <div className="totle-detail">
                                      <h5>Total Order</h5>
                                      <h3>3658</h3>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                  <div className="totle-contain">
                                    <img
                                      src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg"
                                      className="img-1  lazyload"
                                      alt=""
                                    />
                                    <img
                                      src="https://themes.pixelstrap.com/fastkart/assets/images/svg/pending.svg"
                                      className=" lazyload"
                                      alt=""
                                    />
                                    <div className="totle-detail">
                                      <h5>Total Pending Order</h5>
                                      <h3>254</h3>
                                    </div>
                                  </div>
                                </div>

                                <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
                                  <div className="totle-contain">
                                    <img
                                      src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg"
                                      className="img-1  lazyload"
                                      alt=""
                                    />
                                    <img
                                      src="https://themes.pixelstrap.com/fastkart/assets/images/svg/wishlist.svg"
                                      className=" lazyload"
                                      alt=""
                                    />
                                    <div className="totle-detail">
                                      <h5>Total Wishlist</h5>
                                      <h3>32158</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="dashboard-title">
                              <h3>Account Information</h3>
                            </div>

                            <div className="row g-4">
                              <div className="col-xxl-6">
                                <div className="dashboard-contant-title">
                                  <h4>
                                    Contact Information{" "}
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#editProfile"
                                      onClick={handleShow}
                                    >
                                      Edit
                                    </a>
                                  </h4>
                                </div>
                                <div className="dashboard-detail">
                                  <h6 className="text-content">MARK JECNO</h6>
                                  <h6 className="text-content">
                                    vicki.pope@gmail.com
                                  </h6>
                                  <a
                                    href="#"
                                    onClick={ChangepassShow}
                                  >
                                    Change Password
                                  </a>
                                </div>
                              </div>

                              <div className="col-xxl-6">
                                <div className="dashboard-contant-title">
                                  <h4>
                                    Newsletters{" "}
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#editProfile"
                                    >
                                      Edit
                                    </a>
                                  </h4>
                                </div>
                                <div className="dashboard-detail">
                                  <h6 className="text-content">
                                    You are currently not subscribed to any
                                    newsletter
                                  </h6>
                                </div>
                              </div>

                              <div className="col-12">
                                <div className="dashboard-contant-title">
                                  <h4>
                                    Address Book{" "}
                                    <a
                                      href="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#editProfile"
                                    >
                                      Edit
                                    </a>
                                  </h4>
                                </div>

                                <div className="row g-4">
                                  <div className="col-xxl-6">
                                    <div className="dashboard-detail">
                                      <h6 className="text-content">
                                        Default Billing Address
                                      </h6>
                                      <h6 className="text-content">
                                        You have not set a default billing
                                        address.
                                      </h6>
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                        onClick={handleShow}
                                      >
                                        Edit Address
                                      </a>
                                    </div>
                                  </div>

                                  <div className="col-xxl-6">
                                    <div className="dashboard-detail">
                                      <h6 className="text-content">
                                        Default Shipping Address
                                      </h6>
                                      <h6 className="text-content">
                                        You have not set a default shipping
                                        address.
                                      </h6>
                                      <a
                                        href="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                        onClick={handleShow}
                                      >
                                        Edit Address
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div
                        className="tab-pane fade show"
                        id="pills-order"
                        role="tabpanel"
                        aria-labelledby="pills-order-tab"
                      >
                        <div className="dashboard-order">
                          <div className="title">
                            <h2>My Orders History</h2>
                            <span className="title-leaf title-leaf-gray">
                              <svg className="icon-width bg-gray"></svg>
                            </span>
                          </div>

                          <div className="order-contain">
                            <div className="order-box dashboard-bg-box">
                              <div className="order-container">
                                <div className="order-icon">
                                  <i data-feather="box"></i>
                                </div>

                                <div className="order-detail">
                                  <h4>
                                    Delivere <span>Panding</span>
                                  </h4>
                                  <h6 className="text-content">
                                    Gouda parmesan caerphilly mozzarella cottage
                                    cheese cauliflower cheese taleggio gouda.
                                  </h6>
                                </div>
                              </div>

                              <div className="product-order-detail">
                                <a
                                  href="product-left.html"
                                  className="order-image"
                                >
                                  <img
                                    src={Product}
                                    className="lazyload"
                                    alt=""
                                  />
                                </a>

                                <div className="order-wrap">
                                  <a href="product-left.html">
                                    <h3>Fantasy Crunchy Choco Chip Cookies</h3>
                                  </a>
                                  <p className="text-content">
                                    Cheddar dolcelatte gouda. Macaroni cheese
                                    cheese strings feta halloumi cottage cheese
                                    jarlsberg cheese triangles say cheese.
                                  </p>
                                  <ul className="product-size p-0">
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Price :{" "}
                                        </h6>
                                        <h5>$20.68</h5>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Rate :{" "}
                                        </h6>
                                        <div className="product-rating ms-2">
                                          <ul className="rating">
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i data-feather="star"></i>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Sold By :{" "}
                                        </h6>
                                        <h5>Fresho</h5>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Quantity :{" "}
                                        </h6>
                                        <h5>250 G</h5>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="order-box dashboard-bg-box">
                              <div className="order-container">
                                <div className="order-icon">
                                  <i data-feather="box"></i>
                                </div>

                                <div className="order-detail">
                                  <h4>
                                    Delivered{" "}
                                    <span className="success-bg">Success</span>
                                  </h4>
                                  <h6 className="text-content">
                                    Cheese on toast cheesy grin cheesy grin
                                    cottage cheese caerphilly everyone loves
                                    cottage cheese the big cheese.
                                  </h6>
                                </div>
                              </div>

                              <div className="product-order-detail">
                                <a
                                  href="product-left.html"
                                  className="order-image"
                                >
                                  <img
                                    src={Product}
                                    alt=""
                                    className=" lazyload"
                                  />
                                </a>

                                <div className="order-wrap">
                                  <a href="product-left.html">
                                    <h3>
                                      Cold Brew Coffee Instant Coffee 50 g
                                    </h3>
                                  </a>
                                  <p className="text-content">
                                    Pecorino paneer port-salut when the cheese
                                    comes out everybody's happy red leicester
                                    mascarpone blue castello cauliflower cheese.
                                  </p>
                                  <ul className="product-size p-0">
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Price :{" "}
                                        </h6>
                                        <h5>$20.68</h5>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Rate :{" "}
                                        </h6>
                                        <div className="product-rating ms-2">
                                          <ul className="rating">
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i data-feather="star"></i>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Sold By :{" "}
                                        </h6>
                                        <h5>Fresho</h5>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Quantity :{" "}
                                        </h6>
                                        <h5>250 G</h5>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="order-box dashboard-bg-box">
                              <div className="order-container">
                                <div className="order-icon">
                                  <i data-feather="box"></i>
                                </div>

                                <div className="order-detail">
                                  <h4>
                                    Delivere <span>Panding</span>
                                  </h4>
                                  <h6 className="text-content">
                                    Cheesy grin boursin cheesy grin cheesecake
                                    blue castello cream cheese lancashire melted
                                    cheese.
                                  </h6>
                                </div>
                              </div>

                              <div className="product-order-detail">
                                <a
                                  href="product-left.html"
                                  className="order-image"
                                >
                                  <img
                                    src={Product}
                                    alt=""
                                    className=" lazyload"
                                  />
                                </a>

                                <div className="order-wrap">
                                  <a href="product-left.html">
                                    <h3>
                                      Peanut Butter Bite Premium Butter Cookies
                                      600 g
                                    </h3>
                                  </a>
                                  <p className="text-content">
                                    Cow bavarian bergkase mascarpone paneer
                                    squirty cheese fromage frais cheese slices
                                    when the cheese comes out everybody's happy.
                                  </p>
                                  <ul className="product-size p-0">
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Price :{" "}
                                        </h6>
                                        <h5>$20.68</h5>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Rate :{" "}
                                        </h6>
                                        <div className="product-rating ms-2">
                                          <ul className="rating">
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i data-feather="star"></i>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Sold By :{" "}
                                        </h6>
                                        <h5>Fresho</h5>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Quantity :{" "}
                                        </h6>
                                        <h5>250 G</h5>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="order-box dashboard-bg-box">
                              <div className="order-container">
                                <div className="order-icon">
                                  <i data-feather="box"></i>
                                </div>

                                <div className="order-detail">
                                  <h4>
                                    Delivered{" "}
                                    <span className="success-bg">Success</span>
                                  </h4>
                                  <h6 className="text-content">
                                    Caerphilly port-salut parmesan pecorino
                                    croque monsieur dolcelatte melted cheese
                                    cheese and wine.
                                  </h6>
                                </div>
                              </div>

                              <div className="product-order-detail">
                                <a
                                  href="product-left.html"
                                  className="order-image"
                                >
                                  <img
                                    src={Product}
                                    className=" lazyload"
                                    alt=""
                                  />
                                </a>

                                <div className="order-wrap">
                                  <a href="product-left.html">
                                    <h3>
                                      SnackAmor Combo Pack of Jowar Stick and
                                      Jowar Chips
                                    </h3>
                                  </a>
                                  <p className="text-content">
                                    The big cheese cream cheese pepper jack
                                    cheese slices danish fontina everyone loves
                                    cheese on toast bavarian bergkase.
                                  </p>
                                  <ul className="product-size p-0">
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Price :{" "}
                                        </h6>
                                        <h5>$20.68</h5>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Rate :{" "}
                                        </h6>
                                        <div className="product-rating ms-2">
                                          <ul className="rating">
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i
                                                data-feather="star"
                                                className="fill"
                                              ></i>
                                            </li>
                                            <li>
                                              <i data-feather="star"></i>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Sold By :{" "}
                                        </h6>
                                        <h5>Fresho</h5>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Quantity :{" "}
                                        </h6>
                                        <h5>250 G</h5>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="wishlist">
                      <div
                        className="tab-pane fade show"
                        id="pills-wishlist"
                        role="tabpanel"
                        aria-labelledby="pills-wishlist-tab"
                      >
                        <div className="dashboard-wishlist">
                          <div className="title">
                            <h2>My Wishlist History</h2>
                            <span className="title-leaf title-leaf-gray">
                              <svg className="icon-width bg-gray"></svg>
                            </span>
                          </div>
                          <div className="row g-sm-4 g-3">
                            <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                              <div className="product-box-3 theme-bg-white h-100">
                                <div className="product-header">
                                  <div className="product-image">
                                    <a href="product-left.html">
                                      <img
                                        src={Product}
                                        className="img-fluid  lazyload"
                                        alt=""
                                      />
                                    </a>

                                    <div className="product-header-top">
                                      <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="product-footer">
                                  <div className="product-detail">
                                    <span className="span-name">Vegetable</span>
                                    <a href="product-left.html">
                                      <h5 className="name">
                                        Fresh Bread and Pastry Flour 200 g
                                      </h5>
                                    </a>
                                    <p className="text-content mt-1 mb-2 product-content">
                                      Cheesy feet cheesy grin brie. Mascarpone
                                      cheese and wine hard cheese the big cheese
                                      everyone loves smelly cheese macaroni
                                      cheese croque monsieur.
                                    </p>
                                    <h6 className="unit mt-1">250 ml</h6>
                                    <h5 className="price">
                                      <span className="theme-color">
                                        $08.02
                                      </span>
                                      <del>$15.15</del>
                                    </h5>
                                    <div className="add-to-cart-box mt-2">
                                      <button className="btn btn-add-cart addcart-button">
                                        Add
                                        <i className="fa-solid fa-plus"></i>
                                      </button>
                                      <div className="cart_qty qty-box">
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
                                            value="0"
                                            onChange={func}
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                              <div className="product-box-3 theme-bg-white h-100">
                                <div className="product-header">
                                  <div className="product-image">
                                    <a href="product-left.html">
                                      <img
                                        src={Product}
                                        className="img-fluid  lazyload"
                                        alt=""
                                      />
                                    </a>

                                    <div className="product-header-top">
                                      <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="product-footer">
                                  <div className="product-detail">
                                    <span className="span-name">Vegetable</span>
                                    <a href="product-left.html">
                                      <h5 className="name">
                                        Peanut Butter Bite Premium Butter
                                        Cookies 600 g
                                      </h5>
                                    </a>
                                    <p className="text-content mt-1 mb-2 product-content">
                                      Feta taleggio croque monsieur swiss
                                      manchego cheesecake dolcelatte jarlsberg.
                                      Hard cheese danish fontina boursin melted
                                      cheese fondue.
                                    </p>
                                    <h6 className="unit mt-1">350 G</h6>
                                    <h5 className="price">
                                      <span className="theme-color">
                                        $04.33
                                      </span>
                                      <del>$10.36</del>
                                    </h5>
                                    <div className="add-to-cart-box mt-2">
                                      <button className="btn btn-add-cart addcart-button">
                                        Add
                                        <i className="fa-solid fa-plus"></i>
                                      </button>
                                      <div className="cart_qty qty-box">
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
                                            value="0"
                                            onChange={func}
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                              <div className="product-box-3 theme-bg-white h-100">
                                <div className="product-header">
                                  <div className="product-image">
                                    <a href="product-left.html">
                                      <img
                                        src={Product}
                                        className="img-fluid  lazyload"
                                        alt=""
                                      />
                                    </a>

                                    <div className="product-header-top">
                                      <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="product-footer">
                                  <div className="product-detail">
                                    <span className="span-name">Snacks</span>
                                    <a href="product-left.html">
                                      <h5 className="name">
                                        SnackAmor Combo Pack of Jowar Stick and
                                        Jowar Chips
                                      </h5>
                                    </a>
                                    <p className="text-content mt-1 mb-2 product-content">
                                      Lancashire hard cheese parmesan. Danish
                                      fontina mozzarella cream cheese smelly
                                      cheese cheese and wine cheesecake
                                      dolcelatte stilton. Cream cheese parmesan
                                      who moved my cheese when the cheese comes
                                      out everybody's happy cream cheese red
                                      leicester ricotta edam.
                                    </p>
                                    <h6 className="unit mt-1">570 G</h6>
                                    <h5 className="price">
                                      <span className="theme-color">
                                        $12.52
                                      </span>
                                      <del>$13.62</del>
                                    </h5>
                                    <div className="add-to-cart-box mt-2">
                                      <button className="btn btn-add-cart addcart-button">
                                        Add
                                        <i className="fa-solid fa-plus"></i>
                                      </button>
                                      <div className="cart_qty qty-box">
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
                                            value="0"
                                            onChange={func}
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                              <div className="product-box-3 theme-bg-white h-100">
                                <div className="product-header">
                                  <div className="product-image">
                                    <a href="product-left.html">
                                      <img
                                        src={Product}
                                        className="img-fluid  lazyload"
                                        alt=""
                                      />
                                    </a>

                                    <div className="product-header-top">
                                      <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="product-footer">
                                  <div className="product-detail">
                                    <span className="span-name">Snacks</span>
                                    <a href="product-left.html">
                                      <h5 className="name">
                                        Yumitos Chilli Sprinkled Potato Chips
                                        100 g
                                      </h5>
                                    </a>
                                    <p className="text-content mt-1 mb-2 product-content">
                                      Cheddar cheddar pecorino hard cheese hard
                                      cheese cheese and biscuits bocconcini
                                      babybel. Cow goat paneer cream cheese
                                      fromage cottage cheese cauliflower cheese
                                      jarlsberg.
                                    </p>
                                    <h6 className="unit mt-1">100 G</h6>
                                    <h5 className="price">
                                      <span className="theme-color">
                                        $10.25
                                      </span>
                                      <del>$12.36</del>
                                    </h5>
                                    <div className="add-to-cart-box mt-2">
                                      <button className="btn btn-add-cart addcart-button">
                                        Add
                                        <i className="fa-solid fa-plus"></i>
                                      </button>
                                      <div className="cart_qty qty-box">
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
                                            value="0"
                                            onChange={func}
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                              <div className="product-box-3 theme-bg-white h-100">
                                <div className="product-header">
                                  <div className="product-image">
                                    <a href="product-left.html">
                                      <img
                                        src={Product}
                                        className="img-fluid  lazyload"
                                        alt=""
                                      />
                                    </a>

                                    <div className="product-header-top">
                                      <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="product-footer">
                                  <div className="product-detail">
                                    <span className="span-name">Vegetable</span>
                                    <a href="product-left.html">
                                      <h5 className="name">
                                        Fantasy Crunchy Choco Chip Cookies
                                      </h5>
                                    </a>
                                    <p className="text-content mt-1 mb-2 product-content">
                                      Bavarian bergkase smelly cheese swiss cut
                                      the cheese lancashire who moved my cheese
                                      manchego melted cheese. Red leicester
                                      paneer cow when the cheese comes out
                                      everybody's happy croque monsieur goat
                                      melted cheese port-salut.
                                    </p>
                                    <h6 className="unit mt-1">550 G</h6>
                                    <h5 className="price">
                                      <span className="theme-color">
                                        $14.25
                                      </span>
                                      <del>$16.57</del>
                                    </h5>
                                    <div className="add-to-cart-box mt-2">
                                      <button className="btn btn-add-cart addcart-button">
                                        Add
                                        <i className="fa-solid fa-plus"></i>
                                      </button>
                                      <div className="cart_qty qty-box">
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
                                            value="0"
                                            onChange={func}
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                              <div className="product-box-3 theme-bg-white h-100">
                                <div className="product-header">
                                  <div className="product-image">
                                    <a href="product-left.html">
                                      <img
                                        src={Product}
                                        className="img-fluid  lazyload"
                                        alt=""
                                      />
                                    </a>

                                    <div className="product-header-top">
                                      <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="product-footer">
                                  <div className="product-detail">
                                    <span className="span-name">Vegetable</span>
                                    <a href="product-left.html">
                                      <h5 className="name">
                                        Fresh Bread and Pastry Flour 200 g
                                      </h5>
                                    </a>
                                    <p className="text-content mt-1 mb-2 product-content">
                                      Melted cheese babybel chalk and cheese.
                                      Port-salut port-salut cream cheese when
                                      the cheese comes out everybody's happy
                                      cream cheese hard cheese cream cheese red
                                      leicester.
                                    </p>
                                    <h6 className="unit mt-1">1 Kg</h6>
                                    <h5 className="price">
                                      <span className="theme-color">
                                        $12.68
                                      </span>
                                      <del>$14.69</del>
                                    </h5>
                                    <div className="add-to-cart-box mt-2">
                                      <button className="btn btn-add-cart addcart-button">
                                        Add
                                        <i className="fa-solid fa-plus"></i>
                                      </button>
                                      <div className="cart_qty qty-box">
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
                                            value="0"
                                            onChange={func}
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                              <div className="product-box-3 theme-bg-white h-100">
                                <div className="product-header">
                                  <div className="product-image">
                                    <a href="product-left.html">
                                      <img
                                        src={Product}
                                        className="img-fluid  lazyload"
                                        alt=""
                                      />
                                    </a>

                                    <div className="product-header-top">
                                      <button className="btn wishlist-button close_button">
                                        <i data-feather="x"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div className="product-footer">
                                  <div className="product-detail">
                                    <span className="span-name">Vegetable</span>
                                    <a href="product-left.html">
                                      <h5 className="name">
                                        Fresh Bread and Pastry Flour 200 g
                                      </h5>
                                    </a>
                                    <p className="text-content mt-1 mb-2 product-content">
                                      Squirty cheese cottage cheese cheese
                                      strings. Red leicester paneer danish
                                      fontina queso lancashire when the cheese
                                      comes out everybody's happy cottage cheese
                                      paneer.
                                    </p>
                                    <h6 className="unit mt-1">250 ml</h6>
                                    <h5 className="price">
                                      <span className="theme-color">
                                        $08.02
                                      </span>
                                      <del>$15.15</del>
                                    </h5>
                                    <div className="add-to-cart-box mt-2">
                                      <button className="btn btn-add-cart addcart-button">
                                        Add
                                        <i className="fa-solid fa-plus"></i>
                                      </button>
                                      <div className="cart_qty qty-box">
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
                                            value="0"
                                            onChange={func}
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
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="card">
                      <div
                        className="tab-pane fade show"
                        id="pills-card"
                        role="tabpanel"
                        aria-labelledby="pills-card-tab"
                      >
                        <div className="dashboard-card">
                          <div className="title title-flex">
                            <div>
                              <h2>My Card Details</h2>
                              <span className="title-leaf">
                                <svg className="icon-width bg-gray"></svg>
                              </span>
                            </div>

                            <button
                              className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                              data-bs-toggle="modal"
                              data-bs-target="#editCard"
                            >
                              <i data-feather="plus" className="me-2"></i> Add
                              New Card
                            </button>
                          </div>

                          <div className="row g-4">
                            <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                              <div className="payment-card-detail">
                                <div className="card-details">
                                  <div className="card-number">
                                    <h4>XXXX - XXXX - XXXX - 2548</h4>
                                  </div>

                                  <div className="valid-detail">
                                    <div className="title">
                                      <span>valid</span>
                                      <span>thru</span>
                                    </div>
                                    <div className="date">
                                      <h3>08/05</h3>
                                    </div>
                                    <div className="primary">
                                      <span className="badge bg-pill badge-light">
                                        primary
                                      </span>
                                    </div>
                                  </div>

                                  <div className="name-detail">
                                    <div className="name">
                                      <h5>Audrey Carol</h5>
                                    </div>
                                    <div className="card-img">
                                      <img
                                        src="../assets/images/payment-icon/1.jpg"
                                        className="img-fluid  lazyloaded"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="edit-card">
                                  <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#editCard"
                                    href="#"
                                    onClick={handleShow}
                                  >
                                    <i className="far fa-edit"></i> edit
                                  </a>
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i className="far fa-minus-square"></i>{" "}
                                    delete
                                  </a>
                                </div>
                              </div>

                              <div className="edit-card-mobile">
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#editCard"
                                  href="#"
                                  onClick={handleShow}
                                >
                                  <i className="far fa-edit"></i> edit
                                </a>
                                <a href="#">
                                  <i className="far fa-minus-square"></i>
                                  delete
                                </a>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                              <div className="payment-card-detail">
                                <div className="card-details card-visa">
                                  <div className="card-number">
                                    <h4>XXXX - XXXX - XXXX - 1536</h4>
                                  </div>

                                  <div className="valid-detail">
                                    <div className="title">
                                      <span>valid</span>
                                      <span>thru</span>
                                    </div>
                                    <div className="date">
                                      <h3>12/23</h3>
                                    </div>
                                    <div className="primary">
                                      <span className="badge bg-pill badge-light">
                                        primary
                                      </span>
                                    </div>
                                  </div>

                                  <div className="name-detail">
                                    <div className="name">
                                      <h5>Leah Heather</h5>
                                    </div>
                                    <div className="card-img">
                                      <img
                                        src="../assets/images/payment-icon/2.jpg"
                                        className="img-fluid  lazyloaded"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="edit-card">
                                  <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#editCard"
                                    href="#"
                                    onClick={handleShow}
                                  >
                                    <i className="far fa-edit"></i> edit
                                  </a>
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i className="far fa-minus-square"></i>{" "}
                                    delete
                                  </a>
                                </div>
                              </div>

                              <div className="edit-card-mobile">
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#editCard"
                                  href="#"
                                  onClick={handleShow}
                                >
                                  <i className="far fa-edit"></i> edit
                                </a>
                                <a href="#">
                                  <i className="far fa-minus-square"></i>
                                  delete
                                </a>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-xl-6 col-lg-12 col-sm-6">
                              <div className="payment-card-detail">
                                <div className="card-details dabit-card">
                                  <div className="card-number">
                                    <h4>XXXX - XXXX - XXXX - 1366</h4>
                                  </div>

                                  <div className="valid-detail">
                                    <div className="title">
                                      <span>valid</span>
                                      <span>thru</span>
                                    </div>
                                    <div className="date">
                                      <h3>05/21</h3>
                                    </div>
                                    <div className="primary">
                                      <span className="badge bg-pill badge-light">
                                        primary
                                      </span>
                                    </div>
                                  </div>

                                  <div className="name-detail">
                                    <div className="name">
                                      <h5>mark jecno</h5>
                                    </div>
                                    <div className="card-img">
                                      <img
                                        src="../assets/images/payment-icon/3.jpg"
                                        className="img-fluid  lazyloaded"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="edit-card">
                                  <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#editCard"
                                    href="#"
                                    onClick={handleShow}
                                  >
                                    <i className="far fa-edit"></i> edit
                                  </a>
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i className="far fa-minus-square"></i>{" "}
                                    delete
                                  </a>
                                </div>
                              </div>

                              <div className="edit-card-mobile">
                                <a
                                  data-bs-toggle="modal"
                                  data-bs-target="#editCard"
                                  href="#"
                                  onClick={handleShow}
                                >
                                  <i className="far fa-edit"></i> edit
                                </a>
                                <a href="#">
                                  <i className="far fa-minus-square"></i>
                                  delete
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="address">
                      <div
                        className="tab-pane fade show"
                        id="pills-address"
                        role="tabpanel"
                        aria-labelledby="pills-address-tab"
                      >
                        <div className="dashboard-address">
                          <div className="title title-flex">
                            <div>
                              <h2>My Address Book</h2>
                              <span className="title-leaf">
                                <svg className="icon-width bg-gray"></svg>
                              </span>
                            </div>

                            <button
                              className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                              data-bs-toggle="modal"
                              data-bs-target="#add-address"
                              onClick={addAdderssShow}
                            >
                              <i data-feather="plus" className="me-2"></i> Add
                              New Address
                            </button>
                          </div>

                          <div className="row g-sm-4 g-3">
                            <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                              <div className="address-box">
                                <div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="jack"
                                      id="flexRadioDefault2"
                                      checked
                                      onChange={func}
                                    />
                                  </div>

                                  <div className="label">
                                    <label>Home</label>
                                  </div>

                                  <div className="table-responsive address-table">
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td colSpan="2">Jack Jennas</td>
                                        </tr>

                                        <tr>
                                          <td>Address :</td>
                                          <td>
                                            <p>
                                              8424 James Lane South San
                                              Francisco, CA 94080
                                            </p>
                                          </td>
                                        </tr>

                                        <tr>
                                          <td>Pin Code :</td>
                                          <td>+380</td>
                                        </tr>

                                        <tr>
                                          <td>Phone :</td>
                                          <td>+ 812-710-3798</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>

                                <div className="button-group">
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editProfile"
                                    onClick={handleShow}
                                  >
                                    <i data-feather="edit"></i>
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i data-feather="trash-2"></i>
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                              <div className="address-box">
                                <div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="jack"
                                      id="flexRadioDefault3"
                                    />
                                  </div>

                                  <div className="label">
                                    <label>Office</label>
                                  </div>

                                  <div className="table-responsive address-table">
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td colSpan="2">Terry S. Sutton</td>
                                        </tr>

                                        <tr>
                                          <td>Address :</td>
                                          <td>
                                            <p>
                                              2280 Rose Avenue Kenner, LA 70062
                                            </p>
                                          </td>
                                        </tr>

                                        <tr>
                                          <td>Pin Code :</td>
                                          <td>+25</td>
                                        </tr>

                                        <tr>
                                          <td>Phone :</td>
                                          <td>+ 504-228-0969</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>

                                <div className="button-group">
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editProfile"
                                    onClick={handleShow}
                                  >
                                    <i data-feather="edit"></i>
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i data-feather="trash-2"></i>
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                              <div className="address-box">
                                <div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="jack"
                                      id="flexRadioDefault4"
                                    />
                                  </div>

                                  <div className="label">
                                    <label>Neighbour</label>
                                  </div>

                                  <div className="table-responsive address-table">
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td colSpan="2">Juan M. McKeon</td>
                                        </tr>

                                        <tr>
                                          <td>Address :</td>
                                          <td>
                                            <p>
                                              1703 Carson Street Lexington, KY
                                              40593
                                            </p>
                                          </td>
                                        </tr>

                                        <tr>
                                          <td>Pin Code :</td>
                                          <td>+78</td>
                                        </tr>

                                        <tr>
                                          <td>Phone :</td>
                                          <td>+ 859-257-0509</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>

                                <div className="button-group">
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editProfile"
                                    onClick={handleShow}
                                  >
                                    <i data-feather="edit"></i>
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i data-feather="trash-2"></i>
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                              <div className="address-box">
                                <div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="jack"
                                      id="flexRadioDefault5"
                                    />
                                  </div>

                                  <div className="label">
                                    <label>Home 2</label>
                                  </div>

                                  <div className="table-responsive address-table">
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td colSpan="2">Gary M. Bailey</td>
                                        </tr>

                                        <tr>
                                          <td>Address :</td>
                                          <td>
                                            <p>
                                              2135 Burning Memory Lane
                                              Philadelphia, PA 19135
                                            </p>
                                          </td>
                                        </tr>

                                        <tr>
                                          <td>Pin Code :</td>
                                          <td>+26</td>
                                        </tr>

                                        <tr>
                                          <td>Phone :</td>
                                          <td>+ 215-335-9916</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>

                                <div className="button-group">
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editProfile"
                                  >
                                    <i data-feather="edit"></i>
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i data-feather="trash-2"></i>
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="col-xxl-4 col-xl-6 col-lg-12 col-md-6">
                              <div className="address-box">
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
                                    <label>Home 2</label>
                                  </div>

                                  <div className="table-responsive address-table">
                                    <table className="table">
                                      <tbody>
                                        <tr>
                                          <td colSpan="2">Gary M. Bailey</td>
                                        </tr>

                                        <tr>
                                          <td>Address :</td>
                                          <td>
                                            <p>
                                              2135 Burning Memory Lane
                                              Philadelphia, PA 19135
                                            </p>
                                          </td>
                                        </tr>

                                        <tr>
                                          <td>Pin Code :</td>
                                          <td>+26</td>
                                        </tr>

                                        <tr>
                                          <td>Phone :</td>
                                          <td>+ 215-335-9916</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>

                                <div className="button-group">
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#editProfile"
                                  >
                                    <i data-feather="edit"></i>
                                    Edit
                                  </button>
                                  <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i data-feather="trash-2"></i>
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="profile">
                      <div
                        className="tab-pane fade show"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div className="dashboard-profile">
                          <div className="title">
                            <h2>My Profile</h2>
                            <span className="title-leaf">
                              <svg className="icon-width bg-gray"></svg>
                            </span>
                          </div>

                          <div className="profile-detail dashboard-bg-box">
                            <div className="dashboard-title">
                              <h3>Profile Name</h3>
                            </div>
                            <div className="profile-name-detail">
                              <div className="d-sm-flex align-items-center d-block">
                                <h3>Vicki E. Pope</h3>
                                <div className="product-rating profile-rating">
                                  <ul className="rating">
                                    <li>
                                      <i
                                        data-feather="star"
                                        className="fill"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        data-feather="star"
                                        className="fill"
                                      ></i>
                                    </li>
                                    <li>
                                      <i
                                        data-feather="star"
                                        className="fill"
                                      ></i>
                                    </li>
                                    <li>
                                      <i data-feather="star"></i>
                                    </li>
                                    <li>
                                      <i data-feather="star"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>

                              <a
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#editProfile"
                                onClick={handleShow}
                              >
                                Edit
                              </a>
                            </div>

                            <div className="location-profile">
                              <ul>
                                <li>
                                  <div className="location-box">
                                    <GoLocation />
                                    <h6>Downers Grove, IL</h6>
                                  </div>
                                </li>

                                <li>
                                  <div className="location-box">
                                    <GoMail />
                                    <h6>vicki.pope@gmail.com</h6>
                                  </div>
                                </li>

                                <li>
                                  <div className="location-box">
                                    <BsCheck2Square />
                                    <h6>Licensed for 2 years</h6>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div className="profile-description">
                              <p>
                                Residences can be classNameified by and how they
                                are connected to neighbouring residences and
                                land. Different types of housing tenure can be
                                used for the same physical type.
                              </p>
                            </div>
                          </div>

                          <div className="profile-about dashboard-bg-box">
                            <div className="row">
                              <div className="col-xxl-7">
                                <div className="dashboard-title mb-3">
                                  <h3>Profile About</h3>
                                </div>

                                <div className="table-responsive">
                                  <table className="table">
                                    <tbody>
                                      <tr>
                                        <td>Gender :</td>
                                        <td>Female</td>
                                      </tr>
                                      <tr>
                                        <td>Birthday :</td>
                                        <td>21/05/1997</td>
                                      </tr>
                                      <tr>
                                        <td>Phone Number :</td>
                                        <td>
                                          <a href="#">
                                            {" "}
                                            +91 846 - 547 - 210
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Address :</td>
                                        <td>
                                          549 Sulphur Springs Road, Downers, IL
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>

                                <div className="dashboard-title mb-3">
                                  <h3>Login Details</h3>
                                </div>

                                <div className="table-responsive">
                                  <table className="table">
                                    <tbody>
                                      <tr>
                                        <td>Email :</td>
                                        <td>
                                          <a href="#">
                                            vicki.pope@gmail.com
                                            <span
                                              data-bs-toggle="modal"
                                              data-bs-target="#editProfile"
                                              onClick={handleShow}
                                            >
                                              Edit
                                            </span>
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Password :</td>
                                        <td>
                                          <a href="#">
                                            ●●●●●●
                                            <span
                                              data-bs-toggle="modal"
                                              data-bs-target="#editProfile"
                                              onClick={ChangepassShow}
                                            >
                                              Edit
                                            </span>
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                              <div className="col-xxl-5">
                                <div className="profile-image">
                                  <img
                                    src="../assets/images/inner-page/dashboard-profile.png"
                                    className="img-fluid  lazyload"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="privacy">
                      <div
                        className="tab-pane fade show"
                        id="pills-security"
                        role="tabpanel"
                        aria-labelledby="pills-security-tab"
                      >
                        <div className="dashboard-privacy">
                          <div className="dashboard-bg-box">
                            <div className="dashboard-title mb-4">
                              <h3>Privacy</h3>
                            </div>

                            <div className="privacy-box">
                              <div className="d-flex align-items-start">
                                <h6>Allows others to see my profile</h6>
                                <div className="form-check form-switch switch-radio ms-auto">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="redio1"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="redio1"
                                  ></label>
                                </div>
                              </div>

                              <p className="text-content">
                                all peoples will be able to see my profile
                              </p>
                            </div>

                            <div className="privacy-box">
                              <div className="d-flex align-items-start">
                                <h6>
                                  who has save this profile only that people see
                                  my profile
                                </h6>
                                <div className="form-check form-switch switch-radio ms-auto">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="redio2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="redio2"
                                  ></label>
                                </div>
                              </div>

                              <p className="text-content">
                                all peoples will not be able to see my profile
                              </p>
                            </div>

                            <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                              Save Changes
                            </button>
                          </div>

                          <div className="dashboard-bg-box mt-4">
                            <div className="dashboard-title mb-4">
                              <h3>Account settings</h3>
                            </div>

                            <div className="privacy-box">
                              <div className="d-flex align-items-start">
                                <h6>Deleting Your Account Will Permanently</h6>
                                <div className="form-check form-switch switch-radio ms-auto">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="redio3"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="redio3"
                                  ></label>
                                </div>
                              </div>
                              <p className="text-content">
                                Once your account is deleted, you will be logged
                                out and will be unable to log in back.
                              </p>
                            </div>

                            <div className="privacy-box">
                              <div className="d-flex align-items-start">
                                <h6>Deleting Your Account Will Temporary</h6>
                                <div className="form-check form-switch switch-radio ms-auto">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="redio4"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="redio4"
                                  ></label>
                                </div>
                              </div>

                              <p className="text-content">
                                Once your account is deleted, you will be logged
                                out and you will be create new account
                              </p>
                            </div>

                            <button className="btn theme-bg-color btn-md fw-bold mt-4 text-white">
                              Delete My Account
                            </button>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </div>
            </div>
          </Tab.Container>
        </div>
      </section>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row p-md-3 m-0">
              <div className="col-12">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="validationCustom01"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={userdata.firstName}
                    name={"firstName"}
                    onChange={OnchangeFistname}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {" "}
                    Please Enter Your Name
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email Address"
                    required
                    value={userdata.email}
                    name={"email"}
                    onChange={OnchangeFistname}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter valid Email
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mobile"
                    value={userdata.mobilePhone}
                    name={"mobilePhone"}
                    onChange={OnchangeFistname}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {" "}
                    Please Enter Your Phone Number
                  </Form.Control.Feedback>
                </Form.Group>
              </div>

              <div className="col-12">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Add Address</Form.Label>
                  <Form.Control
                    type="location"
                    placeholder="Add Address"
                    required
                    value={userdata.address}
                    name={"address"}
                    onChange={OnchangeFistname}
                  />
                  <Form.Control.Feedback type="invalid">
                    {" "}
                    Please Enter Address
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Add Address2</Form.Label>
                  <Form.Control
                    type="location"
                    placeholder="Add Address2"
                    value={userdata.address}
                    name={"address"}
                    onChange={OnchangeFistname}
                  />
                </Form.Group>
              </div>

              <div className="col-4">
                <Form.Label className="inputlabelheading" column sm="12">
                  Gender
                </Form.Label>
                <Form.Select
                  aria-label="Product Type"
                  className="adminselectbox"
                  required
                  value={userdata.gender}
                  name={"gender"}
                  onChange={OnchangeFistname}
                >
                  <option value={""} onChange={func}>Gender</option>
                  <option value="Male" onChange={func}>Male</option>
                  <option value="Female" onChange={func}>Female</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid" className="h6">
                  Please select producttype
                </Form.Control.Feedback>
              </div>
              <div className="col-4">
                <Form.Group className="mx-3" controlId="validationCustom11">
                  <Form.Label className="inputlabelheading" column sm="12">
                    Date of Birth
                  </Form.Label>
                  <Col sm="12">
                    <Form.Control
                      type="date"
                      placeholder="Product Quantity"
                      value={userdata.DOB}
                      name={"DOB"}
                      onChange={OnchangeFistname}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose date of birth
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="button main_outline_button btn btn-animation "
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              className="button main_button btn theme-bg-color ms-3 fire-button"
              // onClick={handleSubmit}
              type="submit"
            >
              Save Change
            </button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal size="md" show={Password} onHide={ChangepassClose} className="changePass_modal">
        <Form noValidate validated={passvalidated} onSubmit={handlePassSubmit}>
      
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
            
          </Modal.Header>
          <Modal.Body>
            <div className="row p-md-3 m-0">
              <div className="col-12">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="validationCustom01"
                >

                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Current password"
                    value={changepass.current_password}
                    name={"currentpassword"}
                    onChange={OnchangePass}
                  />
                  <p className="error-message">{formError.currentPass}</p>
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="formBasicEmail"
                >
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="New Password"
                    value={changepass.new_password}
                    name={"newpassword"}
                    onChange={OnchangePass}
                  />
                  <p className="error-message">{formError.newPass}</p>
                </Form.Group>
                </div>
                <div className="col-12">
                  <Form.Group
                    className="mb-3 aos_input"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={changepass.confirm_password}
                      name={"confirmpassword"}
                      onChange={OnchangePass}
                    />
                    </Form.Group>
                    <p className="error-message">{formError.confirmPass}{formError.allPass}</p>
                </div>
              </div>
           
          </Modal.Body>

          <Modal.Footer>
            <button
              className="button main_outline_button btn btn-animation "
              onClick={ChangepassClose}
              type="button"
            >
              Cancel
            </button>
            <button
              className="button main_button btn theme-bg-color ms-3 fire-button"
              type="submit"
              // onClick={ChangepassClose}
              // type="submit"
            >
              Save Change
            </button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal size="md" show={addAdderss} onHide={addAdderssClose}>
        <Form
          noValidate
          validated={addAdderssvalidated}
          onSubmit={addAdderssSubmit}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add New Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row p-md-3 m-0">
              <div className="col-12">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="validationCustom01"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    value={addNewAdderss.addAdderss_name}
                    name={"addAdderss_name"}
                    onChange={OnchangePass}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {" "}
                    Please Enter Name
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Add Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add Address"
                    required
                    value={addNewAdderss.new_password}
                    name={"addAdderss_first"}
                    onChange={OnaddAdderss}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Address
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="mb-3 aos_input"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Add Address2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add Address2"
                    required
                    value={addNewAdderss.new_password}
                    name={"addAdderss_second"}
                    onChange={OnaddAdderss}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Address2
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="col-12">
                  <Form.Group
                    className="mb-3 aos_input"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      required
                      value={addNewAdderss.confirsdm_password}
                      name={"addAdderss_phone"}
                      onChange={OnaddAdderss}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter valid Phone Number
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 aos_input"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Pin code"
                      required
                      value={addNewAdderss.new_password}
                      name={"addAdderss_pin"}
                      onChange={OnaddAdderss}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter Pin Code
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="button main_outline_button btn btn-animation "
              onClick={addAdderssClose}
            >
              Cancel
            </button>
            <button
              className="button main_button btn theme-bg-color ms-3 fire-button"
              // onClick={ChangepassClose}
              type="submit"
            >
              Add Address
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Footer />
    </React.Fragment>
  );
}

export default Account;
