import React, { Fragment, useEffect, useState } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Breadcumb from "../common/beadcumb";
import { data1, data2 } from "./data";
import Accordion from "react-bootstrap/Accordion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Checkout = (props) => {
  const navigate = useNavigate();
  var product1 = data1.product1;
const useridd = localStorage.getItem("userid")
  const [apicall, setapicall] = useState(false);
  const[cartdata,setCartData]=useState([]);
  const[quantity,setQuantity]=useState([]);
  const [userdata, setuserdata] = useState('');

  var address = data2.address;
  const func=()=>{}
  const incrementCount=(id,quantity)=> {
    let inc=quantity+1
    console.log("quentityyyyyyy--------- "+inc)
    axios.put(`${process.env.REACT_APP_BASEURL}/cart_update`, {
      id:id,
      quantity:inc
  }).then((response) => {
    let data = response.data;
    setapicall(true);
    console.log("-------------------"+JSON.stringify(data))
    // quantity = quantity + 1;
    console.log("updateeeeeeeDATAAAA-------------------"+JSON.stringify(quantity + 1))

    setQuantity(quantity=quantity+1)
 })
   
  }
  const decrementCount=(id,quantity)=> {
    let dec;
    if(quantity>0){

       dec=quantity-1;
    }
    else{
      return(false);
    }

    axios
    .put(`${process.env.REACT_APP_BASEURL}/cart_update`,{
      id:id,
      quantity:dec
    })
    .then((response) => {
      setapicall(true)
      let data = response.data;
      // setCartData(data);
      console.log("DDDDDDDDDDDDDDDDDDDDDD-------------------"+JSON.stringify(data))
      // quantity = quantity- 1;
      setQuantity(quantity=quantity-1)
    });
  }

  // add and remove
  useEffect(() => {
    function getCartData() {
      try {
        axios
          .get(`${process.env.REACT_APP_BASEURL}/cart?user_id=6`)
          .then((response) => {
            let data = response.data;
            setCartData(data);
            setapicall(false);
            console.log("setCartDataaaaaaaa-------------------"+JSON.stringify(data))
            // setapicall(false);
          });
      } catch (err) {}
    }

    getCartData();
  }, [apicall]);
  const deleteCart=(id,user_id)=>{
    console.log("id++++++++++++++++"+   id  )
    console.log("user_id++++++++++++++++"+ user_id  )
    axios
    .put(`${process.env.REACT_APP_BASEURL}/remove_product_from_cart`,{
      id:id,
      user_id:user_id
    })
    .then((response) => {
      let data = response.data;
      console.log("setDELETEEEEEEECartDataaaaaaaa-------------------"+JSON.stringify(data))
      setapicall(true);
    });
  }
  // end add remove cart

  // delivery address
  const DeliveryClick = () =>{
    axios.get(`${process.env.REACT_APP_BASEURL}/user_details?user_id=${useridd}`)
    .then(response => {
      setuserdata(response.data[0])
      // navigate('/your_account')
      // return response;
    }).catch(error => {
      console.log(error.response.error)
    })
navigate('/')
  }

  // end delivery address
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
                    <div className="row my-md-0 my-4 mx-0">
                      <div className="col-6 col-md-12 my-2">
                        <Nav.Item>
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

                      <div className="col-6 col-md-12 my-2">
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
                      </div>
                      <div className="col-6 col-md-12 my-2">
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
                      </div>
                      <div className="col-6 col-md-12 my-2">
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
                      </div>
                    </div>
                  </Nav>
                </div>

                <div className="col-xxl-9 col-lg-8">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h2 className="tab-title">Shopping Cart</h2>
                      <div className="cart-table p-0">
                        <div className="table-responsive">
                          <table className="table">
                          {cartdata.map((cdata)=>{
                      //  for (let i = 0; i < cdata.length; i++) {
                      //   ProductPriceTotal += cdata[i].quantity * cdata[i].price;
                      // }
                       return(
                            //     <tbody key={product1.id}>
                            //       <tr
                            //         className="product-box-contain"
                            //       >
                            //         <td className="product-detail">
                            //           <div className="product border-0">
                            //           <Link 
                            //               to={product1.image}
                            //               className="product-image"
                            //             >
                            //               <img
                            //                 src={product1.image}
                            //                 className="img-fluid lazyload"
                            //                 alt=""
                            //               />
                            //             </Link>
                            //             <div className="product-detail">
                            //               <ul>
                            //                 <li className="name">
                            //        <Link to="/"
                            //                     className="text-title"
                            //                   >
                            //                     {product1.name}
                            //                   </Link>
                            //                 </li>

                            //                 <li className="text-content">
                            //                   <span className="text-title">
                            //                     Sold By :
                            //                     {product1.seller_detail}
                            //                   </span>
                            //                 </li>

                            //                 <li className="text-content">
                            //                   <span className="text-title">
                            //                     {product1.quantity}
                            //                   </span>
                            //                 </li>

                            //                 <li>
                            //                   <h5 className="text-content d-inline-block">
                            //                     Price :
                            //                   </h5>
                            //                   <span>
                            //                     {product1.productPrice}
                            //                   </span>
                            //                   <span className="text-content">
                            //                     {product1.productMRF}
                            //                   </span>
                            //                 </li>
                            //                 <li className="quantity-price-box">
                            //                   <div className="cart_qty">
                            //                     <div className="input-group">
                            //                       <button
                            //                         type="button"
                            //                         className="qty-left-minus"
                            //                         data-type="minus"
                            //                         data-field=""
                            //                       >
                            //                         <i
                            //                           className="fa fa-minus"
                            //                           aria-hidden="true"
                            //                         ></i>
                            //                       </button>
                            //                       <input
                            //                         className="form-control input-number qty-input"
                            //                         type="text"
                            //                         name="quantity"
                            //                         value="1"
                            //                         onChange={func}
                            //                       />
                            //                       <button
                            //                         type="button"
                            //                         className="qty-right-plus"
                            //                         data-type="plus"
                            //                         data-field=""
                            //                       >
                            //                         <i
                            //                           className="fa fa-plus"
                            //                           aria-hidden="true"
                            //                         ></i>
                            //                       </button>
                            //                     </div>
                            //                   </div>
                            //                 </li>
                            //               </ul>
                            //             </div>
                            //           </div>
                            //         </td>

                            //         <td className="price">
                            //           <h4 className="table-title text-content">
                            //             Price
                            //           </h4>
                            //           <h5>
                            //             <span>{product1.productPrice}</span>
                            //             <del className="text-content">
                            //               ₹45.68
                            //             </del>
                            //           </h5>
                            //           <h6 className="theme-color">
                            //             You Save :{product1.saving}
                            //           </h6>
                            //         </td>

                            //         <td className="quantity">
                            //           <h4 className="table-title text-content">
                            //             Qty
                            //           </h4>
                            //           <div className="quantity-price">
                            //             <div className="cart_qty">
                            //               <div className="input-group">
                            //                 <button
                            //                   type="button"
                            //                   className="qty-left-minus"
                            //                   data-type="minus"
                            //                   data-field=""
                            //                 >
                            //                   <i className="fa-regular fa-minus"></i>
                            //                 </button>
                            //                 <input
                            //                   className="form-control input-number qty-input"
                            //                   type="text"
                            //                   name="quantity"
                            //                   value="1"
                            //                   onChange={func}
                            //                 />
                            //                 <button
                            //                   type="button"
                            //                   className="qty-right-plus"
                            //                   data-type="plus"
                            //                   data-field=""
                            //                 >
                            //                   <i className="fa-regular fa-plus"></i>
                            //                 </button>
                            //               </div>
                            //             </div>
                            //           </div>
                            //         </td>

                            //         <td className="subtotal">
                            //           <h4 className="table-title text-content">
                            //             Total
                            //           </h4>
                            //           <h5>{product1.total}</h5>
                            //         </td>

                            //         <td className="save-remove">
                            //           <h4 className="table-title text-content">
                            //             Action
                            //           </h4>
                            //           <Link to="/"
                            //             className="save notifi-wishlist"
                                      
                            //           >
                            //             Save for later
                            //           </Link>
                            //           <button type="button" className="remove close_button btn" onClick={()=> deleteCart(cdata.id,cdata.user_id)}>
                            //   remove
                            //  </button>
                            //         </td>
                            //       </tr>
                            //     </tbody>

                            <tbody key={cdata.id}>
                            <tr  className="product-box-contain">
                          <td className="product-detail">
                            <div className="product border-0">
                         <Link to="/"
                                className="product-image"
                              >
                                <img
                                  src={'https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0'}
                                  className="img-fluid lazyload"
                                  alt={cdata.product_title_name}
                                />
                              </Link>
                              <div className="product-detail">
                                <ul>
                                  <li className="name">
                                  <Link to="/">{cdata.product_title_name}</Link>
                                  </li>
  
                                  <li className="text-content">
                                    <span className="text-title">Sold By:{product1.seller_detail}</span>
                                  </li>
  
                                  <li className="text-content">
                                    <span className="text-title">Quality:{cdata.quantity}</span>
                                  </li>
  
                                  <li>
                                    <h5 className="text-content d-inline-block">
                                      Price:
                                    </h5>
                                    <span>{cdata.price}</span>
                                    <span className="text-content">{"₹"+cdata.price+cdata.discount}</span>
                                  </li>
  
                                  <li>
                                    <h5 className="saving theme-color">{cdata.discount}</h5>
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
                                          // onChange={func}
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
                              {cdata.price} <del className="text-content">{cdata.price+cdata.discount}</del>
                            </h5>
                            <h6 className="theme-color">You Save:{cdata.discount}</h6>
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
                                    onClick={()=>decrementCount(cdata.id,cdata.quantity)}
                                  >
                                    <i className="fa-regular fa-minus"></i>
                                  </button>
                                  <input
                                    className="form-control input-number qty-input"
                                    type="text"
                                    name="quantity"
                                    value={cdata.quantity}
                                      onChange={func}  
                                  />
                                  <button
                                    type="button"
                                    className="btn qty-right-plus"
                                    data-type="plus"
                                    data-field=""
                                    onClick={()=>incrementCount(cdata.id,cdata.quantity)}
                                  >
                                    <i className="fa-regular fa-plus" ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
  
                          <td className="subtotal">
                            <h4 className="table-title text-content">Total</h4>
                            <h5>{cdata.quantity * cdata.price}</h5>
                          </td>
  
                          <td className="save-remove">
                            <h4 className="table-title text-content">Action</h4>
                            <Link to="/"
                              className="save notifi-wishlist"
                          
                            >
                              Save for later
                            </Link>
                             <button type="button" className="remove close_button btn" onClick={()=> deleteCart(cdata.id,cdata.user_id)}>
                              remove
                             </button>
                            {/* <Link to="/"
                              className="remove close_button"
                              
                            >remove
                             {deleteCart}
                            </Link> */}
                          </td>
                        </tr>

                        </tbody>
                              );
                            })}
                          </table>
                        </div>
                      </div>

                      <div className="button-group">
                        <ul className="button-group-list">
                          <li>
                          <butoon 
                              className="btn btn-light shopping-button text-dark"
                              onClick={()=>DeliveryClick()}
                            >
                              <i className="fa-solid fa-arrow-left-long me-3"></i>
                              Continue Shopping
                            </butoon>
                          </li>

                          <li>
                            <button
                              className="btn btn-animation proceed-btn"
                              // eventKey ="second"
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
                        <div className="col-12 col-md-6">
                          {userdata.map((address) => {
                            return (
                              <div key={address.id} className="">
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
                                    <ul
                                      key={address.id}
                                      className="delivery-address-detail"
                                    >
                                      <li>
                                        <h4 className="fw-500">
                                          {address.first_name} {address.last_name} 
                                        </h4>
                                      </li>
                                      <li>
                                        <p className="text-content">
                                          <span className="text-title">
                                            Address:{address.address}
                                          </span>
                                        </p>
                                      </li>
                                      {/* <li>
                                        <h6 className="text-content">
                                          <span className="text-title">
                                            Pin Code :{address.pincode}
                                          </span>
                                        </h6>
                                      </li> */}
                                      <li>
                                        <h6 className="text-content mb-0">
                                          <span className="text-title">
                                            Phone :{address.phone_no}
                                          </span>
                                        </h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="col-12 col-md-6">
                          {address.map((address) => {
                            return (
                              <div key={address.id} className="">
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
                                    <ul
                                      key={address.id}
                                      className="delivery-address-detail"
                                    >
                                      <li>
                                        <h4 className="fw-500">
                                        {address.first_name} {address.last_name} 

                                        </h4>
                                      </li>
                                      <li>
                                        <p className="text-content">
                                          <span className="text-title">
                                            Address:{address.address2}
                                          </span>
                                        </p>
                                      </li>
                                      {/* <li>
                                        <h6 className="text-content">
                                          <span className="text-title">
                                            Pin Code :{address.pincode}
                                          </span>
                                        </h6>
                                      </li> */}
                                      <li>
                                        <h6 className="text-content mb-0">
                                          <span className="text-title">
                                            Phone :{address.phone_no}
                                          </span>
                                        </h6>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
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
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        value="choice1"
                                        onChange={func}
                                        name="button"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="standard"
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
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        value="choice2"
                                        onChange={func}
                                        name="button"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="sameDay"
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
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        onChange={func}
                                        value="choice3"
                                        name="button"
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="future"
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
                              <Link to="./cart">Edit Cart</Link>
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
                                  <Accordion.Header>
                                    <div className="custom-form-check form-check mb-0">
                                      <label
                                        className="form-check-label"
                                        htmlFor="credit"
                                      >
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          value="choice7"
                                           onChange={func} 
                                          name="button"
                                        />
                                        Credit or Debit Card
                                      </label>
                                    </div>{" "}
                                  </Accordion.Header>
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
                                                <label htmlFor="credit2">
                                                  Enter Credit & Debit Card
                                                  Number
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
                                              <label htmlFor="expiry">
                                                Expiry Date
                                              </label>
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
                                              <label htmlFor="cvv">
                                                CVV Number
                                              </label>
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
                                              <label htmlFor="password">
                                                Password
                                              </label>
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
                            </div>

                            <div className="accordion-item">
                              <Accordion>
                                <Accordion.Item eventKey="2">
                                  <Accordion.Header>
                                    {" "}
                                    <div className="custom-form-check form-check mb-0">
                                      <label
                                        className="form-check-label"
                                        htmlFor="banking"
                                      >
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          value="choice8"
                                          name="button"
                                          onChange={func}
                                        />
                                        Net Banking
                                      </label>
                                    </div>
                                  </Accordion.Header>
                                  <Accordion.Body>
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
                                              value="choice1"
                                              onChange={func}
                                              name="button"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank1"
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
                                              onChange={func}
                                              value="choice2"
                                              name="button"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank2"
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
                                              value="choice3"
                                              name="button"
                                              onChange={func}
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank3"
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
                                              value="choice4"
                                              onChange={func}
                                              name="button"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank4"
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
                                              value="choice5"
                                              name="button"
                                              onChange={func}
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank5"
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
                                              value="choice6"
                                              name="button"
                                              onChange={func}
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank6"
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
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </div>

                            <div className="accordion-item">
                              <Accordion>
                                <Accordion.Item eventKey="2">
                                  <Accordion.Header>
                                    <div className="custom-form-check form-check mb-0">
                                      <label
                                        className="form-check-label"
                                        htmlFor="wallet"
                                      >
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          value="choice9"
                                          onChange={func}
                                          name="button"
                                        />
                                        My Wallet
                                      </label>
                                    </div>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div className="accordion-body">
                                      <h5 className="text-uppercase mb-4">
                                        Select Your Wallet
                                      </h5>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="custom-form-check form-check">
                                            <label
                                              className="form-check-label"
                                              htmlFor="amazon"
                                            >
                                              <input
                                                className="form-check-input mt-0"
                                                type="radio"
                                                value="choice10"
                                                onChange={func}
                                                name="button"
                                              />
                                              Amazon Pay
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="custom-form-check form-check">
                                            <input
                                              className="form-check-input mt-0"
                                              type="radio"
                                              onChange={func}
                                              value="choice11"
                                              name="button"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="gpay"
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
                                              value="choice12"
                                              onChange={func}
                                              name="button"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="airtel"
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
                                              value="choice12"
                                              onChange={func}
                                              name="button"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="paytm"
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
                                              value="choice13"
                                              onChange={func}
                                              name="button"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="jio"
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
                                              value="choice14"
                                              onChange={func}
                                              name="button"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="free"
                                            >
                                              Freecharge
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </div>

                            <div className="accordion-item">
                              <Accordion>
                                <Accordion.Item eventKey="2">
                                  <Accordion.Header>
                                    <div className="custom-form-check form-check mb-0">
                                      <label
                                        className="form-check-label"
                                        htmlFor="cash"
                                      >
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          value="choice15"
                                          onChange={func}
                                          name="button"
                                        />
                                        Cash On Delivery
                                      </label>
                                    </div>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <div className="accordion-body">
                                      <h5 className="cod-review">
                                        Pay digitally with SMS Pay Link. Cash
                                        may not be accepted in COVID restricted
                                        areas.{" "}
                                        <Link to="/">
                                          Know more.
                                        </Link>
                                      </h5>
                                    </div>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
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
