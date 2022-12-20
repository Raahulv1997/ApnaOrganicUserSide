import React, { Fragment } from "react";
// import data from './Pages/data';
import Footer from "../common/footer";
import Header from "../common/header";
//import ProductImg1 from "../../Photos/product/1.png";
import Breadcumb from "../common/beadcumb";
import {data1} from './data';
import { Button } from "bootstrap";
import "../../CSS/style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import  {useState,useEffect} from 'react';
import axios from "axios";
const Cart = (props) => {

  const navigate = useNavigate();
  // const[pdata,setPdata]=useState([]);
  const [apicall, setapicall] = useState(false);
  const[cartdata,setCartData]=useState([]);
  const[quantity,setQuantity]=useState([]);
  const [ProductPriceTotal,setProductPriceTotal] = useState(0);
  var product1=data1.product1;
  // let [count, setCount] = useState(0);
  const useridd = localStorage.getItem("userid")

  const incrementCount=(id,quantity)=> {
    let inc=quantity+1
    axios.put(`${process.env.REACT_APP_BASEURL}/cart_update`, {
      id:id,
      quantity:inc
  }).then((response) => {
    let data = response.data;
    setapicall(true);
    // setCartData(data);
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
      // quantity = quantity- 1;
      setQuantity(quantity=quantity-1)
    });
  }
  const func =()=>{
    
  }
  useEffect(() => {
    function getCartData() {
      try {
        axios
          .get(`${process.env.REACT_APP_BASEURL}/cart?user_id=${useridd}`)
          .then((response) => {
            let data = response.data;
            let ProductTotal=0;
            data.map((cdata)=>{
                ProductTotal += cdata.quantity * cdata.sale_price;
            })
            setProductPriceTotal(ProductTotal)
            setCartData(data);
            setapicall(false);
            // setapicall(false);
          });
      } catch (err) {}
    }

    getCartData();
  }, [apicall]);
  const deleteCart=(id,user_id)=>{
    axios
    .put(`${process.env.REACT_APP_BASEURL}/remove_product_from_cart`,{
      id:id,
      user_id:user_id
    })
    .then((response) => {
      let data = response.data;
      setapicall(true);
    });
  }


  // Save For later
  const AddToWishList = (id) => {
      axios
        .post(`${process.env.REACT_APP_BASEURL}/add_product_wishlist`, {
          user_id:`${useridd}`,
          product_view_id:`${id}`,
        })
        .then((response) => {
          let data = response.data;
          // setData(response.data);
          setapicall(true);
        });
    }
  // };  End save For Later
  // var ProductPriceTotal = 0;
  // payement 
  const onProccedClick =() =>{
      navigate('/checkout')
  }
  // end payment

  return (
    <Fragment>
      <Header/>
      <Breadcumb pageName={"Cart"} pageTitle={"Cart page"} pageHref={"/"} />
      {/* <!-- Cart Section Start --> */}
      <section className="cart-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-5 g-3">
            <div className="col-xxl-9">
              <div className="cart-table">
                <div className="table-responsive-xl">
                  <table className="table">
                    {cartdata.map((cdata)=>{
                       return(
                        <tbody key={cdata.id}>
                            <tr  className="product-box-contain">
                          <td className="product-detail">
                            <div className="product border-0">
                         <Link to="/"
                                className="product-image"
                              >
                                <img
                                  src={product1.image}
                                  className="img-fluid lazyload"
                                  alt=""
                                />
                              </Link>
                              <div className="product-detail">
                                <ul>
                                  <li className="name">
                                  <Link to="/">{cdata.product_title_name}</Link>
                                  </li>
  
                                  <li className="text-content">
                                    <span className="text-title">Sold By:{cdata.vendor_id}</span>
                                  </li>
  
                                  <li className="text-content">
                                    <span className="text-title">Quatity:{cdata.quantity}</span>
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
                            <h4 className="table-title text-content">Mrp
                            <span className="theme-color mx-1">({cdata.discount}% off)</span>
                            </h4>
                            <h5>
                            ₹{cdata.product_price} <del className="text-content text-danger">₹{cdata.mrp}</del>
                             
                            </h5>
                            {/* <h6 className="theme-color">{cdata.discount}% off</h6> */}
                            <h6 className="theme-color">You Save:₹{(cdata.mrp) - (cdata.product_price) }</h6>
                          </td>
                         
                          <td className="price">
                            {/* <h4 className="table-title text-content">Tax</h4> */}
                            <h6 className="">Gst:{cdata.gst }</h6>
                            <h6 className="">Cgst:{cdata.cgst }</h6>
                            <h6 className="">Sgst:{cdata.sgst }</h6>
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
                          <td className="price">
                            <h4 className="table-title text-content">Sale Price</h4>
                            <h5>
                            ₹{cdata.sale_price} 
                            </h5>
                           
                          </td>
                          <td className="subtotal">
                            <h4 className="table-title text-content">Total</h4>
                            <h5>{parseInt(cdata.quantity) * parseInt(cdata.sale_price)}</h5>
                          </td>
  
                          <td className="save-remove">
                            <h4 className="table-title text-content">Action</h4>
                            <button
                              className="save notifi-wishlist close_button btn px-0"
                              onClick={()=> AddToWishList(cdata.id,cdata.user_id)}
                            >
                              Save for later
                            </button>
                             <button type="button" className="remove close_button btn px-0" onClick={()=> deleteCart(cdata.id,cdata.user_id)}>
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
                        // onChange={func}  
                      />
                      <button className="btn-apply">Apply</button>
                    </div>
                  </div>
                  <ul className="p-0">
                    <li>
                      <h4>Subtotal</h4>
                     
                      <h4 className="price">₹ {ProductPriceTotal}</h4>
                    </li>

                    <li>
                      <h4>Coupon Discount</h4>
                      <h4 className="price">(-) 0.00</h4>
                    </li>

                    <li className="align-items-start">
                      <h4>Shipping</h4>
                      <h4 className="price text-end">₹0.00</h4>
                    </li>
                  </ul>
                </div>

                <ul className="summery-total">
                  <li className="list-total border-top-0">
                    <h4>Total (USD)</h4>
                    <h4 className="price theme-color">₹{}</h4>
                  </li>
                </ul>

                <div className="button-group cart-button">
                  <ul className="p-0">
                    <li className="w-100">
                      <button
                        // to="/checkout"
                        className="btn btn-animation proceed-btn fw-bold w-100"
                        onClick={()=>onProccedClick()}
                      >
                        Process To Checkout
                      </button>
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
