import React  from "react";
import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Header from "../common/header";
import Breadcumb from "../common/beadcumb";
import Footer from "../common/footer";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Product from "../../Photos/product/2.png";
import { MdOutlineDashboard, MdOutlinePrivacyTip } from "react-icons/md";
import { BsHandbag} from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCreditCard } from "react-icons/ai";
import { GoLocation, GoMail } from "react-icons/go";
import { RiAccountCircleLine } from "react-icons/ri";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import axios from "axios";
import moment from "moment";
// import {CiMail} from 'react-icons/ci';

function Account() {
  const useridd = sessionStorage.getItem("userid")
  const userpass =sessionStorage.getItem("upassword")
const navigate = useNavigate();
  const func=()=>{}
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Password, setPassword] = useState(false);
  const [validated, setValidated] = useState(false);
  const [addAdderss, setaddAdderss] = useState(false);
  const addAdderssClose = () => setaddAdderss(false);
  const addAdderssShow = () => setaddAdderss(true);
  const [wishlistdata, setwishlistdata] = useState([]);
  const [orderhistory, setorderhistory] = useState([]);
  const [totalorder, settotalorder] = useState('');
  const [cartupdateid, setcartupdateid] = useState('');


  const [userdata, setuserdata] = useState(
    {
    user_id:useridd,
    first_name:"",
    last_name:"",
    //password:"",
    email:"",
    phone_no:"",
    gender:"",
    date_of_birth:"",
    address:"",
    address2:""
    });
 useEffect(()=>{
  axios.get(`${process.env.REACT_APP_BASEURL}/user_details?user_id=${useridd}`)
  .then(response => {
    setuserdata(response.data[0])
    // navigate('/your_account')
    // return response;
  }).catch(error => {
  })
  setwishlistclick();
  OnOrderclick();
 },[Password])
 
// wishlist

const setwishlistclick = () =>{
  axios.get(`${process.env.REACT_APP_BASEURL}/wishlist?user_id=${useridd}`)
  .then(response => {
    setwishlistdata(response.data)
    // navigate('/your_account')
    // return response;
  }).catch(error => {
  })
  setclick(false)

}

// order history
const OnOrderclick = () =>{
  axios.get(`${process.env.REACT_APP_BASEURL}/user_orders?user_id=${useridd}`)
  .then(response => {
    setorderhistory(response.data)
     var  result = response.data.filter((thing, index, self) =>
      index === self.findIndex((t) => (
       ( t.order_id === thing.order_id ) 
      )
      )
  )
  settotalorder(result.length)

    // navigate('/your_account')
    // return response;
  }).catch(error => {
  })
  setclick(false)
}
// end order history

  // edit Profile
  const handleSubmit = (event) => {
    event.preventDefault();
    let form = event.currentTarget;
    // const name = event.target.value;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation()
    }
    // eslint-disable-next-line no-undef
    axios.post(`${process.env.REACT_APP_BASEURL}/user_register`,userdata)
    .then(response => {
      setShow(false)
    }).catch(error => {
    })
    setValidated(true);
  };

  const OnchangeFistname = (e) => {
    setuserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  // change Password

  const [changepass, setchangepass] = useState({
    email:'',
    password:'',
    new_password:""
  });
 const ChangepassShow = () => {
   setchangepass((changepass) =>{ return {...changepass,  email : `${userdata.email}`}});
  setPassword(true);
}
const OnchangePass = (e) => {
  setchangepass({
    ...changepass,
    [e.target.name]: e.target.value,
  });
};
const [formError, setFormError] = useState({
  currentPass: "",
  newPass: "",
  confirmPass: "",
  allPass: "",
});
const handlePassSubmit = (event) => {
  event.preventDefault();
  if (
    changepass.confirmpassword === undefined &&
    changepass.new_password === undefined &&
    changepass.password === undefined
  ) {
    setFormError({
      allPass: "All field are required",
    });

    return false;
  }
  if (changepass.password === undefined) {
    setFormError({
      currentPass: "Please enter current password",
    });

    return false;
  }
  if (changepass.new_password === undefined) {
    setFormError({
      newPass: "Please enter New password",
    });
    return false;
  }

  if (changepass.confirmpassword === undefined) {
    setFormError({
      confirmPass: "Please enter confirm password",
    });
    return false;
  }

  if (changepass.confirmpassword !== changepass.new_password) {
    setFormError({
      confirmPass: "Password & Confirm password not match",
    });
    return false;
  }
  if(changepass.confirmpassword === changepass.new_password){
    axios.post(`${process.env.REACT_APP_BASEURL}/change_user_password`,
    {
    "email":changepass.email,
    "password":changepass.password,
    "new_password":changepass.new_password
  })
    .then(response => {
      if(response === true){
        sessionStorage.setItem("upassword", response.data.new_password)
        setPassword(false)
      }
      // navigate('/your_account')
      // return response;
    }).catch(error => {
    })
  }
  setFormError("");
  ChangepassClose();
};
const ChangepassClose = () => setPassword(false);

// end change paassword
const [click, setclick] = useState(false);
const side_bar = () => {
  setclick(true);
};
  //add address
  const [addNewAdderss, setaddNewAdderss] = useState(0);
  const [addAdderssvalidated, setaddAdderssValidated] = useState(false);
  const addAdderssSubmit = (event) => {
    event.preventDefault();

    let form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setaddAdderssValidated(true);
  };

  const OnaddAdderss = (e) => {
    let name = e.target.value;
    setaddNewAdderss({
      ...changepass,
      [e.target.name]: e.target.value,
    });
  };
// add to cart
const AddToCart = (id ,discount , product_price , quantity ,product_id) =>{
  axios.post(`${process.env.REACT_APP_BASEURL}/add_to_cart`,{
    "user_id":useridd,
    "product_view_id":id,
    "price":product_price,
    "discount":discount,
    "quantity":1,
    "is_active":1
  })
  .then(response => {
  let cartup =  localStorage.setItem("cartupdate",true);
  setcartupdateid(cartup)
  }).catch(error => {
  })
}
// end add to cart


const onProductClick = (id) =>{
  sessionStorage.setItem("orderid" , id)
  navigate('/product_detail')
}
  return (
    <React.Fragment>
      <Header addcart={AddToCart}/>
      
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
                    click === true
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
                    {/* <div className="cover-image">
                      <img
                        src={profile_cover}
                        className="img-fluid  lazyload"
                        alt=""
                      />
                    </div> */}

                    <div className="profile-contain">
                      {/* <div className="profile-image">
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
                      </div> */}

                      <div className="profile-name">
                        <h3>{userdata.first_name} {userdata.last_name}</h3>
                        <h6 className="text-content">{userdata.email}</h6>
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
                              onClick={() => OnOrderclick()}
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
                              onClick={() => setwishlistclick()}
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
                                <svg className="icon-width bg-gray"></svg>
                              </span>
                            </div>

                            <div className="dashboard-user-name">
                              <h6 className="text-content">
                                Hello,{" "}
                                <b className="text-title">{userdata.first_name} {userdata.last_name}</b>
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
                                      <h3>{totalorder}</h3>
                                    </div>
                                  </div>
                                </div>

                                {/* <div className="col-xxl-4 col-lg-6 col-md-4 col-sm-6">
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
                                </div> */}

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
                                      <h3>{wishlistdata.length}</h3>
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
                                    <Link
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#editProfile"
                                      onClick={handleShow}
                                    >
                                      Edit
                                    </Link>
                                  </h4>
                                </div>
                                <div className="dashboard-detail">
                                  <h6 className="text-content"> {userdata.first_name} {userdata.last_name}</h6>
                                  <h6 className="text-content">
                                    {userdata.email}
                                  </h6>
                                  <Link
                                    to="#"
                                    onClick={ChangepassShow}
                                  >
                                    Change Password
                                  </Link>
                                </div>
                              </div>

                              <div className="col-xxl-6">
                                {/* <div className="dashboard-contant-title">
                                  <h4>
                                    Newsletters{" "}
                                    <Link
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#editProfile"
                                    >
                                      Edit
                                    </Link>
                                  </h4>
                                </div>
                                <div className="dashboard-detail">
                                  <h6 className="text-content">
                                    You are currently not subscribed to any
                                    newsletter
                                  </h6>
                                </div> */}
                              </div>

                              <div className="col-12">
                                <div className="dashboard-contant-title">
                                  <h4>
                                    Address Book{" "}
                                    {/* <Link
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#editProfile"
                                    >
                                      Edit
                                    </Link> */}
                                  </h4>
                                </div>

                                <div className="row g-4">
                                  <div className="col-xxl-6">
                                    <div className="dashboard-detail">
                                      <h6 className="text-content">
                                        Default Billing Address
                                      </h6>
                                      <h6 className="text-content">
                                      {userdata.address}
                                      </h6>
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                        onClick={handleShow}
                                      >
                                        Edit Address
                                      </Link>
                                    </div>
                                  </div>

                                  <div className="col-xxl-6">
                                    <div className="dashboard-detail">
                                      <h6 className="text-content">
                                        Default Shipping Address
                                      </h6>
                                      <h6 className="text-content">
                                      {userdata.address2}
                                      </h6>
                                      <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editProfile"
                                        onClick={handleShow}
                                      >
                                        Edit Address
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    {/* order history */}
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
                          {(orderhistory || []).map((data)=>{
                            return(
                          <div key={data.id}   className="order-contain">
                            <div className="order-box dashboard-bg-box">
   
                              <div className="order-container">
                                <div className="order-icon">
                                  <i data-feather="box"></i>
                                </div>

  

                                <div className="order-detail">
                                  <h4>
                                    Delivery <span>{data.status}</span>
                                  </h4>
                                  <h6 className="text-content">
                                  {data.product_description}
                                  </h6>
                                </div>
                                   
                              </div>
                              
                              <div className="product-order-detail">
                                <Link
                                onClick={()=>onProductClick(data.id)}
                                  className="order-image"
                                >
                                  <img
                                    src={Product}
                                    className="lazyload"
                                    alt=""
                                  />
                                </Link>

                                <div className="order-wrap">
                                  <Link to="product-left.html">
                                    <h3>{data.product_title_name}</h3>
                                  </Link>
                                  <p className="text-content">
                                  {data.product_description}
                                  </p>
                                  <ul className="product-size p-0">
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Price :{" "}
                                        </h6>
                                        <h5>{data.mrp}</h5>
                                      </div>
                                    </li>

                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Rate :{data.rating}
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
                                        <h5>{data.store_name}</h5>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Order Date :{" "}
                                        </h6>
                                        <h5>{data.order_date}</h5>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Delivery Date :{" "}
                                        </h6>
                                        <h5>{data.delivery_date}</h5>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Stock :{" "}
                                        </h6>
                                        <h5>{data.quantity}</h5>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="size-box">
                                        <h6 className="text-content">
                                          Quantity :{" "}
                                        </h6>
                                        {data.unit === 'gms' || data.unit === 'l' || data.unit === 'pcs'? 
                                        <h5>{data.unit_quantity}{data.unit}</h5>
                                        :  <h5>{data.size}{data.unit}
                                         </h5>
                                        }

                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                          
                            </div>

                            
                          </div>
                          )
                            })}
                        </div>
                      </div>
                    </Tab.Pane>
                    {/* end order history */}
                    {/* wishlist history */}

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
                          {(wishlistdata || []).map((wdata) =>{
                                return(
                            <div key={wdata.id} className="col-xxl-3 col-lg-6 col-md-4 col-sm-6">
                              
                                  <div className="product-box-3 theme-bg-white h-100">
                                  <div className="product-header">
                                    <div className="product-image">
                                      <Link to="product-left.html">
                                        <img
                                          src="https://t3.ftcdn.net/jpg/05/37/73/58/360_F_537735846_kufBp10E8L4iV7OLw1Kn3LpeNnOIWbvf.jpg"
                                          className="img-fluid  lazyload"
                                          alt=""
                                        />
                                      </Link>
  
                                      <div className="product-header-top">
                                        <button className="btn wishlist-button close_button">
                                          <i data-feather="x"></i>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
  
                                  <div className="product-footer">
                                    <div className="product-detail">
                                      <span className="span-name">{wdata.product_title_name}</span>
                                      <Link to="/order_detail">
                                        <h5 className="name mb-0"
                                dangerouslySetInnerHTML={{__html:  wdata.product_description}}
    
                                        />
                                      </Link>
                                      <p className="text-content  mb-2"
                                       dangerouslySetInnerHTML={{__html:  wdata.other_introduction}}
                                      />
                                       
                                     
                                      <h6 className="unit mt-1">250 ml</h6>
                                      <h5 className="price">
                                        <span className="theme-color">
                                        {wdata.product_price}₹
                                        </span>
                                        <del>{wdata.mrp}₹</del>
                                      </h5>
                                      <div className="add-to-cart-box mt-2">
                                        <button className="btn btn-add-cart addcart-button" onClick={(e)=>AddToCart(wdata.id , wdata.discount , wdata.product_price , wdata.quantity , wdata.is_active, wdata.product_id)}>
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
)
})}
                            
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    {/* end history */}
                    {/* card history */}

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
                                  <Link
                                    data-bs-toggle="modal"
                                    data-bs-target="#editCard"
                                    to="#"
                                    onClick={handleShow}
                                  >
                                    <i className="far fa-edit"></i> edit
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i className="far fa-minus-square"></i>{" "}
                                    delete
                                  </Link>
                                </div>
                              </div>

                              <div className="edit-card-mobile">
                                <Link
                                  data-bs-toggle="modal"
                                  data-bs-target="#editCard"
                                  to="#"
                                  onClick={handleShow}
                                >
                                  <i className="far fa-edit"></i> edit
                                </Link>
                                <Link to="#">
                                  <i className="far fa-minus-square"></i>
                                  delete
                                </Link>
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
                                  <Link
                                    data-bs-toggle="modal"
                                    data-bs-target="#editCard"
                                    to="#"
                                    onClick={handleShow}
                                  >
                                    <i className="far fa-edit"></i> edit
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i className="far fa-minus-square"></i>{" "}
                                    delete
                                  </Link>
                                </div>
                              </div>

                              <div className="edit-card-mobile">
                                <Link
                                  data-bs-toggle="modal"
                                  data-bs-target="#editCard"
                                  to="#"
                                  onClick={handleShow}
                                >
                                  <i className="far fa-edit"></i> edit
                                </Link>
                                <Link to="#">
                                  <i className="far fa-minus-square"></i>
                                  delete
                                </Link>
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
                                  <Link
                                    data-bs-toggle="modal"
                                    data-bs-target="#editCard"
                                    to="#"
                                    onClick={handleShow}
                                  >
                                    <i className="far fa-edit"></i> edit
                                  </Link>
                                  <Link
                                    to="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i className="far fa-minus-square"></i>{" "}
                                    delete
                                  </Link>
                                </div>
                              </div>

                              <div className="edit-card-mobile">
                                <Link
                                  data-bs-toggle="modal"
                                  data-bs-target="#editCard"
                                  to="#"
                                  onClick={handleShow}
                                >
                                  <i className="far fa-edit"></i> edit
                                </Link>
                                <Link to="#">
                                  <i className="far fa-minus-square"></i>
                                  delete
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    {/* end card history */}
                    {/* address history */}

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

                            {/* <button
                              className="btn theme-bg-color text-white btn-sm fw-bold mt-lg-0 mt-3"
                              data-bs-toggle="modal"
                              data-bs-target="#add-address"
                              onClick={addAdderssShow}
                            >
                              <i data-feather="plus" className="me-2"></i> Add
                              New Address
                            </button> */}
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
                                          <td colSpan="2">{userdata.first_name} {userdata.last_name}</td>
                                        </tr>

                                        <tr>
                                          <td>Address :</td>
                                          <td>
                                            <p>
                                             {userdata.address}
                                            </p>
                                          </td>
                                        </tr>

                                        {/* <tr>
                                          <td>Pin Code :</td>
                                          <td>+380</td>
                                        </tr> */}

                                        <tr>
                                          <td>Phone :</td>
                                          <td>+ {userdata.phone_no}</td>
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
                                  {/* <button
                                    className="btn btn-sm add-button w-100"
                                    data-bs-toggle="modal"
                                    data-bs-target="#removeProfile"
                                  >
                                    <i data-feather="trash-2"></i>
                                    Remove
                                  </button> */}
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
                                          <td colSpan="2">{userdata.first_name} {userdata.last_name}</td>
                                        </tr>

                                        <tr>
                                          <td>Address :</td>
                                          <td>
                                            <p>
                                              {userdata.address2}
                                            </p>
                                          </td>
                                        </tr>

                                        {/* <tr>
                                          <td>Pin Code :</td>
                                          <td>+25</td>
                                        </tr> */}

                                        <tr>
                                          <td>Phone :</td>
                                          <td>+{userdata.phone_no}
</td>
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

                          
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    {/* end address history */}
                    {/* profile history */}

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
                                <h3>{userdata.first_name} {userdata.last_name}</h3>
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

                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#editProfile"
                                onClick={handleShow}
                              >
                                Edit
                              </Link>
                            </div>

                            <div className="location-profile">
                              <ul>
                                <li>
                                  <div className="location-box">
                                    <GoLocation />
                                    <h6>{userdata.address}</h6>
                                  </div>
                                </li>

                                <li>
                                  <div className="location-box">
                                    <GoMail />
                                    <h6>{userdata.email}</h6>
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
                                        <td>{userdata.gender}</td>
                                      </tr>
                                      <tr>
                                        <td>Birthday :</td>
                                        <td>{userdata.date_of_birth}</td>
                                      </tr>
                                      <tr>
                                        <td>Phone Number :</td>
                                        <td>
                                          <Link to="#">
                                            {" "}
                                            +{userdata.phone_no}
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Address :</td>
                                        <td>
                                        {userdata.address}
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
                                          <Link to="#">
                                          {userdata.email}
                                            <span
                                              data-bs-toggle="modal"
                                              data-bs-target="#editProfile"
                                              onClick={handleShow}
                                            >
                                              Edit
                                            </span>
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>Password :</td>
                                        <td>
                                          <Link to="#">
                                          {userdata.password}
                                            <span
                                              data-bs-toggle="modal"
                                              data-bs-target="#editProfile"
                                              onClick={ChangepassShow}
                                            >
                                              Edit
                                            </span>
                                          </Link>
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
                    {/* end profile history */}
                    {/* privacy history */}

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
                                    // role="switch"
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
                                    // role="switch"
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
                                    // role="switch"
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
                    {/* end privacy history */}
                    
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
              <div className="col-6">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="validationCustom01"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={userdata.first_name}
                    name={"first_name"}
                    onChange={OnchangeFistname}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {" "}
                    Please Enter Your First Name
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="validationCustom01"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={userdata.last_name}
                    name={"last_name"}
                    onChange={OnchangeFistname}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    {" "}
                    Please Enter Your Last Name
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
                    type="email"
                    placeholder="Email Address"
                    required
                    value={userdata.email}
                    name={"email"}
                    // onChange={OnchangeFistname}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter valid Email
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
              {/* <div className="col-md-6">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                    value={userdata.password}
                    name={"password"}
                    onChange={OnchangeFistname}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter valid Password
                  </Form.Control.Feedback>
                </Form.Group>
              </div> */}
              <div className="col-md-6">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Mobile"
                    value={userdata.phone_no}
                    name={"phone_no"}
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
                    value={userdata.address2}
                    name={"address2"}
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
                      value={moment(userdata.date_of_birth).format('yyyy-MM-DD')}
                      name={"date_of_birth"}
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
        <Form noValidate onSubmit={handlePassSubmit}>
      
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

                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={changepass.email}
                    name={"email"}
                  />
                  <p className="error-message">{formError.currentPass}</p>
                </Form.Group>
              </div>
              <div className="col-12">
                <Form.Group
                  className="mb-3 aos_input"
                  controlId="validationCustom01"
                >

                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Current password"
                    value={changepass.password}
                    name={"password"}
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
                    name={"new_password"}
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

      {/* <Modal size="md" show={addAdderss} onHide={addAdderssClose}>
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
      </Modal> */}
      <Footer />
    </React.Fragment>
  );
}

export default Account;
