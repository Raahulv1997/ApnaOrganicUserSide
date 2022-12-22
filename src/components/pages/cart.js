import React, { Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import Footer from "../common/footer";
import Header from "../common/header";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
//import ProductImg1 from "../../Photos/product/1.png";
import Breadcumb from "../common/beadcumb";
import { data1 } from "./data";
import "../../CSS/style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
const Cart = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState('');
  const [apicall, setapicall] = useState(false);
  const [cartdata, setCartData] = useState([]);
  const [coupondata, setcouponData] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [discountt, setdiscountt] = useState('');
  const [ProductPriceTotal, setProductPriceTotal] = useState(0);
  var product1 = data1.product1;
  const useridd = sessionStorage.getItem("userid");
const currentdate = moment().format();

  const incrementCount = (id, quantity) => {
    let inc = quantity + 1;
    axios
      .put(`${process.env.REACT_APP_BASEURL}/cart_update`, {
        id: id,
        quantity: inc,
      })
      .then((response) => {
        let data = response.data;
        setapicall(true);
        // setCartData(data);
        setQuantity((quantity = quantity + 1));
      });
  };
  const decrementCount = (id, quantity) => {
    let dec;
    if (quantity > 0) {
      dec = quantity - 1;
    } else {
      return false;
    }
    axios
      .put(`${process.env.REACT_APP_BASEURL}/cart_update`, {
        id: id,
        quantity: dec,
      })
      .then((response) => {
        setapicall(true);
        let data = response.data;
        // setCartData(data);
        // quantity = quantity- 1;
        setQuantity((quantity = quantity - 1));
      });
  };
  const func = (e) => {
    let discountpercent = coupondata.filter(item => item.code === e.target.value);
    let couponcode =discountpercent[0];
    // setdiscountt(couponcode.percentage)
    console.log("---e"+JSON.stringify(discountpercent))

  };

  // Cart Detail
  useEffect(() => {
    function getCartData() {
      try {
        axios
          .get(`${process.env.REACT_APP_BASEURL}/cart?user_id=${useridd}`)
          .then((response) => {
            let data = response.data;
            let ProductTotal = 0;
            data.map((cdata) => {
              ProductTotal +=
                Number(cdata.quantity) * Number(cdata.product_price) -
                (cdata.product_price * cdata.discount) / 100 +
                (Number(
                  cdata.product_price -
                    (cdata.product_price * cdata.discount) / 100
                ) *
                  cdata.gst) /
                  100 +
                (Number(
                  cdata.product_price -
                    (cdata.product_price * cdata.discount) / 100
                ) *
                  cdata.cgst) /
                  100 +
                (Number(
                  cdata.product_price -
                    (cdata.product_price * cdata.discount) / 100
                ) *
                  cdata.sgst) /
                  100 -
                (cdata.sale_price * cdata.discount) / 100;
            });
            setProductPriceTotal(ProductTotal);
            setCartData(data);
            setapicall(false);
            // setapicall(false);
          });
      } catch (err) {}
    }

    getCartData();
  }, [apicall]);
  // end Cart Detail
  const deleteCart = (id, user_id) => {
    axios
      .put(`${process.env.REACT_APP_BASEURL}/remove_product_from_cart`, {
        id: id,
        user_id: `${user_id}`,
      })
      .then((response) => {
        let data = response.data;
        setapicall(true);
      });
  };

  // Save For later
  const AddToWishList = (id) => {
    axios
      .post(`${process.env.REACT_APP_BASEURL}/add_product_wishlist`, {
        user_id: `${useridd}`,
        product_view_id: `${id}`,
      })
      .then((response) => {
        let data = response.data;
        // setData(response.data);
        setapicall(true);
      });
  };
  // };  End save For Later

  // payement
  const onProccedClick = () => {
    navigate("/checkout");
  };
  // end payment

// coupon list

const handleClose = () => {
  setShow(false);
}
const handleShow = (e) => {
    setShow(true);
  }
 

const onCouponClick = () =>{
  setShow(true);
  axios
      .post(`${process.env.REACT_APP_BASEURL}/coupons_list`, {
        "campaign_name":"",
        "code":"",
        "status":""
      })
      .then((response) => {
       let data = response.data;
       const result = data.filter(item => item.status !== 'pending');
       setcouponData(result)
      })
      .catch((error) => {});
}
// end coupon list

  // discount and shipping
  let ShippingCharge = 0.0;
  let CouponDis = 0.0;
// end 
  return (
    <Fragment>
      <Header />
      <Breadcumb pageName={"Cart"} pageTitle={"Cart page"} pageHref={"/"} />
      {/* <!-- Cart Section Start --> */}
      <section className="cart-section section-b-space">
        <div className="container-fluid-lg p-0">
          <div className="row g-sm-5 g-3 ">
            <div className="col-xxl-9">
              <div className="cart-table">
                <div className="table-responsive-xl">
                  <table className="table">
                    {cartdata.map((cdata) => {
                      return (
                        <tbody key={cdata.id}>
                          <tr className="product-box-contain">
                            <td className="product-detail">
                              <div className="product border-0">
                                <Link to="/" className="product-image">
                                  <img
                                    src={product1.image}
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </Link>
                                <div className="product-detail">
                                  <ul>
                                    <li className="name">
                                      <Link to="/">
                                        {cdata.product_title_name}
                                      </Link>
                                    </li>

                                    <li className="text-content">
                                      <span className="text-title">
                                        Sold By:{cdata.store_name}
                                      </span>
                                    </li>

                                    <li className="text-content">
                                      <span className="text-title">
                                        Quatity:{cdata.quantity}
                                      </span>
                                    </li>

                                    <li>
                                      <h5 className="text-content d-inline-block">
                                        Price:
                                      </h5>
                                      <span>{cdata.price}</span>
                                      <span className="text-content">
                                        {"₹" + cdata.mrp}
                                      </span>
                                    </li>

                                    <li>
                                      <h5 className="saving theme-color">
                                        {cdata.discount}
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
                                            <i className="fa-regular fa-minus"></i>
                                          </button>
                                          <input
                                            className="form-control input-number qty-input"
                                            type="text"
                                            name="quantity"
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
                              <h4 className="table-title text-content">
                                Price
                                <span className="theme-color mx-1">
                                  ({cdata.discount}% off)
                                </span>
                              </h4>
                              <h5>
                                <del className="text-content text-danger mx-2 mb-0">
                                  ₹{Number(cdata.product_price).toFixed(2)}
                                </del>
                                <b>
                                  {" "}
                                  ₹
                                  {Number(
                                    cdata.product_price -
                                      (cdata.product_price * cdata.discount) /
                                        100
                                  ).toFixed(2)}{" "}
                                </b>
                              </h5>
                              {/* <h6 className="theme-color">{cdata.discount}% off</h6> */}
                              <h6 className="theme-color">
                                You Save:₹(
                                {(
                                  (Number(cdata.sale_price) * cdata.discount) /
                                  100
                                ).toFixed(2)}
                                )
                              </h6>
                            </td>
                            <td className="price">
                              {/* <h4 className="table-title text-content">Tax</h4> */}
                              {/* { Number((cdata.product_price) -
                                    (cdata.product_price * cdata.discount) /
                                      100)*cdata.gst /
                                      100} */}
                              <h6 className="">
                                Gst:{Number(cdata.gst).toFixed(2)}%
                              </h6>
                              <h6 className="">
                                Cgst:{Number(cdata.cgst).toFixed(2)}%
                              </h6>
                              <h6 className="">
                                Sgst:{Number(cdata.sgst).toFixed(2)}%
                              </h6>
                            </td>

                            <td className="price">
                              <h4 className="table-title text-content">
                                Taxable Value: ₹
                                {(
                                  Number(cdata.product_price) -
                                  (cdata.product_price * cdata.discount) / 100
                                ).toFixed(2)}
                              </h4>
                              {cdata.sgst === null
                                ? (cdata.sgst = "0")
                                : cdata.sgst === cdata.sgst}
                              {cdata.cgst === null
                                ? (cdata.cgst = "0")
                                : cdata.cgst === cdata.cgst}
                              <h4 className="table-title text-content">
                                Tax: ₹
                                {(
                                  (Number(
                                    cdata.product_price -
                                      (cdata.product_price * cdata.discount) /
                                        100
                                  ) *
                                    cdata.gst) /
                                    100 +
                                  (Number(
                                    cdata.product_price -
                                      (cdata.product_price * cdata.discount) /
                                        100
                                  ) *
                                    cdata.cgst) /
                                    100 +
                                  (Number(
                                    cdata.product_price -
                                      (cdata.product_price * cdata.discount) /
                                        100
                                  ) *
                                    cdata.sgst) /
                                    100
                                ).toFixed(2)}
                              </h4>
                            </td>
                            <td className="price">
                              <h4 className="table-title text-content">
                                Sale Price: ₹
                                {(
                                  Number(cdata.product_price) -
                                  (cdata.product_price * cdata.discount) / 100 +
                                  (Number(
                                    cdata.product_price -
                                      (cdata.product_price * cdata.discount) /
                                        100
                                  ) *
                                    cdata.gst) /
                                    100 +
                                  (Number(
                                    cdata.product_price -
                                      (cdata.product_price * cdata.discount) /
                                        100
                                  ) *
                                    cdata.cgst) /
                                    100 +
                                  (Number(
                                    cdata.product_price -
                                      (cdata.product_price * cdata.discount) /
                                        100
                                  ) *
                                    cdata.sgst) /
                                    100
                                ).toFixed(2)}
                              </h4>
                            </td>

                            <td className="quantity">
                              <h4 className="table-title text-content">Qty</h4>
                              <div className="quantity-price">
                                <div className="cart_qty">
                                  <div className="input-group d-flex">
                                    <button
                                      type="button"
                                      className="btn qty-left-minus"
                                      data-type="minus"
                                      data-field=""
                                      onClick={() =>
                                        decrementCount(cdata.id, cdata.quantity)
                                      }
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
                                      onClick={() =>
                                        incrementCount(cdata.id, cdata.quantity)
                                      }
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
                              <h5>
                                {(
                                  cdata.quantity * Number(cdata.product_price) -
                                  (cdata.product_price * cdata.discount) / 100 +
                                  (Number(
                                    cdata.product_price -
                                      (cdata.product_price * cdata.discount) /
                                        100
                                  ) *
                                    cdata.gst) /
                                    100 +
                                  (Number(
                                    cdata.product_price -
                                      (cdata.product_price * cdata.discount) /
                                        100
                                  ) *
                                    cdata.cgst) /
                                    100 +
                                  (Number(
                                    cdata.product_price -
                                      (cdata.product_price * cdata.discount) /
                                        100
                                  ) *
                                    cdata.sgst) /
                                    100
                                ).toFixed(2)}
                              </h5>
                            </td>

                            <td className="save-remove">
                              <h4 className="table-title text-content">
                                Action
                              </h4>
                              <button
                                className="save notifi-wishlist close_button btn px-0"
                                onClick={() =>
                                  AddToWishList(cdata.id, cdata.user_id)
                                }
                              >
                                Save for later
                              </button>
                              <button
                                type="button"
                                className="remove close_button btn px-0"
                                onClick={() =>
                                  deleteCart(cdata.id, cdata.user_id)
                                }
                              >
                                remove
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>

            <div className="col-xxl-3">
              <div className="summery-box p-sticky">
                <div className="summery-header d-flex align-items-center justify-content-between">
                  <h3>Cart Total</h3>
                  <Button className="btn-apply text-light btn-success" onClick={()=>onCouponClick()}>Add Coupon</Button>
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
                        onChange={(e)=>func(e)}
                        
                      />
                      <button className="btn-apply">Apply</button>
                    </div>
                  </div>
                  <ul className="p-0">
                    <li>
                      <h4>Subtotal</h4>

                      <h4 className="price">
                        ₹ {ProductPriceTotal.toFixed(2)}
                      </h4>
                    </li>

                    <li>
                      <h4>Coupon Discount</h4>
                      <h4 className="price">(-) ₹{CouponDis.toFixed(2)}</h4>
                    </li>

                    <li className="align-items-start">
                      <h4>Shipping</h4>
                      <h4 className="price text-end">
                        ₹{ShippingCharge.toFixed(2)}
                      </h4>
                    </li>
                  </ul>
                </div>

                <ul className="summery-total">
                  <li className="list-total border-top-0">
                    <h4>Total (Rupees)</h4>
                    <h4 className="price theme-color">
                      ₹
                      {(ProductPriceTotal - CouponDis + ShippingCharge).toFixed(
                        2
                      )}
                    </h4>
                  </li>
                </ul>

                <div className="button-group cart-button">
                  <ul className="p-0">
                    <li className="w-100">
                      <button
                        // to="/checkout"
                        className="btn btn-animation proceed-btn fw-bold w-100"
                        onClick={() => onProccedClick()}
                      >
                        Process To Checkout
                      </button>
                    </li>

                    <li>
                      <NavLink
                        to="/"
                        className="btn btn-light shopping-button text-dark w-100"
                      >
                        <i className="fa-solid fa-arrow-left-long me-3"></i>
                        Return To Shopping
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
          show={show}
          onHide={() => handleClose()}
          dialogClassName="w-80"
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
          
            <Modal.Header closeButton className="">
              <Modal.Title id="example-custom-modal-styling-title">
               Coupons
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-3">
            <ListGroup as="ol" numbered>
              {(coupondata || []).map((data)=>{
               var diff = moment(data.end_date).diff(currentdate, 'day');
                return (
                  data.status === 'pending'? null :
                  <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{data.campaign_name}</div>
                    {data.code}
                  </div>
                  <div>
                  <div>
                  <Badge bg="success" pill className="mx-2">
                  {data.percentage}%
                  </Badge>
                  <Badge bg={data.status === 'active'? "primary" : data.status === 'expired' ? "danger" : null} pill>
                    {diff >= 0 ?
                  data.status: 'expired'}
                  </Badge>
                  </div>
                 <div>
                 {diff >= 0 ?
                 <span>Expire in {diff}days</span> :
                 null}
                 </div>
                 </div>
                </ListGroup.Item>
                )
              })}
   
     
    </ListGroup>
            </Modal.Body>
            <Modal.Footer className="">
             
            </Modal.Footer>
        </Modal>
      {/* <!-- Cart Section End --> */}
      <Footer />
    </Fragment>
  );
};
export default Cart;
