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
import moment from "moment";

const Checkout = (props) => {
  const navigate = useNavigate();
  var product1 = data1.product1;
  const useridd = localStorage.getItem("userid");
  let currentdate = moment().format();
  const [apicall, setapicall] = useState(false);
  const [navtab, setnavtab] = useState(false);
  const [cartdata, setCartData] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [DeliveryMethod, setDeliveryMethod] = useState("");
  const [userdata, setuserdata] = useState([]);
  const [DeliveyTab,setDeliveyTab] = useState('')
  const [singlorder, setsinglorder] = useState({
    order_id: "1",
    product_id: "2",
    price: "3",
    quantity: "4",
    gst: "6",
    cgst: "7",
    sgst: "8",
    offer_id: "9",
    discount: "10%",
    product_total_price: "5000",
  });

  const [orderadd, setorderadd] = useState({
    user_id: useridd,
    status: "pending",
    total_quantity: "",
    ref_no: "12345678",
    shipping_charges: "0",
    payment_mode: "cod",
    delivery_date: "2022-12-15",
    invoice_date: currentdate,
    order_date: currentdate,
    total_amount: "",
    total_gst: "",
    total_cgst: "",
    total_sgst: "",
    taxable_value: "",
    discount_coupon: "0",
    vendor_id: "1",
    order_product: [],
  });
  const [ProductPriceTotal, setProductPriceTotal] = useState(0);
  const [TotalTax, setTotalTax] = useState(0);
  // discount and shipping
  let ShippingCharge = 0.0;
  let CouponDis = 0.0;

  // end discount and shipping

  var address = data2.address;
  const func = (e) => {
    setDeliveryMethod(e.target.value);
  };
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
        // quantity = quantity + 1;

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
        setQuantity((quantity = quantity - 1));
      });
  };

  // add and remove
  useEffect(() => {
    function getCartData() {
      try {
        axios
          .get(`${process.env.REACT_APP_BASEURL}/cart?user_id=${useridd}`)
          .then((response) => {
            let data = response.data;
            let ProductTotal = 0;
            let Totaltaxes = 0;
            let Totalgst = 0;
            let Totalcgst = 0;
            let Totalsgst = 0;
            let TotalTaxableValue = 0;
            data.map((cdata) => {
              ProductTotal +=
                parseInt(cdata.quantity) *
                parseInt(
                  Number(cdata.sale_price) -
                    (cdata.sale_price * cdata.discount) / 100
                );
              if (cdata.gst === null) {
                cdata.gst = "0";
              }
              if (cdata.sgst === null) {
                cdata.sgst = "0";
              }
              if (cdata.cgst === null) {
                cdata.cgst = "0";
              }
              Totaltaxes +=
                Number(cdata.gst) + Number(cdata.cgst) + Number(cdata.sgst);
              Totalgst += Number(cdata.gst);
              Totalcgst += Number(cdata.cgst);
              Totalsgst += Number(cdata.sgst);
              TotalTaxableValue =
                Number(cdata.product_price) -
                (cdata.product_price * cdata.discount) / 100;
            });
            setorderadd({
              ...orderadd,
              total_amount: ProductTotal - CouponDis + ShippingCharge,
              total_gst: Totalgst,
              total_cgst: Totalcgst,
              total_sgst: Totalsgst,
              taxable_value: TotalTaxableValue,
              discount_coupon: CouponDis,
              vendor_id: "1",
              order_product: [],
            });
            setProductPriceTotal(ProductTotal);
            setTotalTax(Totaltaxes);
            setCartData(data);
            setapicall(false);
            // setapicall(false);
          });
      } catch (err) {}
    }

    getCartData();
  }, [apicall]);
  const deleteCart = (id, user_id) => {
    axios
      .put(`${process.env.REACT_APP_BASEURL}/remove_product_from_cart`, {
        id: id,
        user_id: user_id,
      })
      .then((response) => {
        let data = response.data;
        setapicall(true);
      });
  };
  // end add remove cart

  // Save For later
  const SaveForLater = (id) => {
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
  //   End save For Later

  // delivery address
  const DeliveryClick = () => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/user_details?user_id=${useridd}`)
      .then((response) => {
        setuserdata(response.data);
        // navigate('/your_account')
        // return response;
      })
      .catch((error) => {});
  };
  // end delivery address

  // payment
  const getPaymentData = () => {
    setapicall(true);
    setorderadd({
      ...orderadd,
      total_quantity: cartdata.length,
      payment_mode: "cod",
      delivery_date: "2022-12-25",
      invoice_date: currentdate,
      order_date: currentdate,
      total_amount: "",
      total_gst: "",
      total_cgst: "",
      total_sgst: "",
      taxable_value: "",
      discount_coupon: "0",
      vendor_id: "1",
      order_product: [],
    });
  };
  // end payment

  // order add
  useEffect(() => {
    setorderadd((orderadd) => {
      return { ...orderadd, order_product: cartdata };
    });
  }, [apicall]);
  const onOrderAdd = () => {
    axios
      .post(`${process.env.REACT_APP_BASEURL}/orders`, orderadd)
      .then((response) => {
        // navigate('/your_account')
        // return response;
      })
      .catch((error) => {});
  };
  // end order add

  return (
    <Fragment>
      <Header />
      <Breadcumb pageName={"Cart"} pageTitle={"Cart page"} pageHref={"/"} />
      {/* <!-- Checkout section Start --> */}
      <section className="checkout-section section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3 checkout-section">
            <Tab.Container id="left-tabs-example" defaultActiveKey={"first"}>
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
                          <Nav.Link to="/" eventKey="second">
                            <li className="nav-link" role="presentation">
                              <div
                                onClick={() => DeliveryClick()}
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
                                onClick={() => getPaymentData()}
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
                {/* Tabssss */}
                <div className="col-xxl-9 col-lg-8">
                  <Tab.Content>
                    {/* Shopping Cart */}
                    <Tab.Pane eventKey="first">
                      <h2 className="tab-title">Shopping Cart</h2>
                      <div className="cart-table p-0">
                        <div className="table-responsive">
                          <table className="table">
                            {cartdata.map((cdata) => {
                              return (
                                <tbody key={cdata.id}>
                                  <tr className="product-box-contain">
                                    <td className="product-detail">
                                      <div className="product border-0">
                                        <Link to="/" className="product-image">
                                          <img
                                            src={
                                              "https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0"
                                            }
                                            className="img-fluid lazyload"
                                            alt={cdata.product_title_name}
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
                                              <span>{cdata.product_price}</span>
                                              <span className="text-content">
                                                {"₹" + cdata.mrp}
                                              </span>
                                            </li>

                                            <li>
                                              <h5 className="saving theme-color">
                                                ₹{cdata.discount}
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
                                      <h4 className="table-title text-content">
                                        Price
                                        <span className="theme-color mx-1">
                                          ({cdata.discount}% off)
                                        </span>
                                      </h4>
                                      <h5>
                                      <del className="text-content text-danger mx-2">
                                          ₹{Number(cdata.product_price).toFixed(2)}
                                        </del>
                                        <b>
                                          {" "}
                                          ₹
                                          {Number((cdata.product_price) -
                                            (cdata.product_price *
                                              cdata.discount) /
                                              100).toFixed(2)}{" "}
                                        </b>
                                        
                                      </h5>
                                      {/* <h6 className="theme-color">{cdata.discount}% off</h6> */}
                                      <h6 className="theme-color">
                                        You Save:₹(
                                        {(Number(cdata.sale_price) *
                                          cdata.discount /
                                          100).toFixed(2)}
                                        )
                                      </h6>
                                    </td>
                                    <td className="price">
                                      {/* <h4 className="table-title text-content">Tax</h4> */}
                                      {/* { Number((cdata.product_price) -
                                    (cdata.product_price * cdata.discount) /
                                      100)*cdata.gst /
                                      100} */}
                                      <h6 className="">Gst:{Number(cdata.gst).toFixed(2)}%</h6>
                                      <h6 className="">Cgst:{Number(cdata.cgst).toFixed(2)}%</h6>
                                      <h6 className="">Sgst:{Number(cdata.sgst).toFixed(2)}%</h6>
                                    </td>

                                    <td className="price">
                                      <h4 className="table-title text-content">
                                        Taxable Value: ₹
                                        {(Number(cdata.product_price) -
                                          (cdata.product_price *
                                            cdata.discount) /
                                            100).toFixed(2)}
                                      </h4>
                                      {cdata.sgst === null
                                        ? (cdata.sgst = "0")
                                        : cdata.sgst === cdata.sgst}
                                      {cdata.cgst === null
                                        ? (cdata.cgst = "0")
                                        : cdata.cgst === cdata.cgst}
                                      <h4 className="table-title text-content">
                                        Tax: ₹
                                        {((Number(
                                          cdata.product_price -
                                            (cdata.product_price *
                                              cdata.discount) /
                                              100
                                        ) *
                                          cdata.gst) /
                                          100 +
                                          (Number(
                                            cdata.product_price -
                                              (cdata.product_price *
                                                cdata.discount) /
                                                100
                                          ) *
                                            cdata.cgst) /
                                            100 +
                                          (Number(
                                            cdata.product_price -
                                              (cdata.product_price *
                                                cdata.discount) /
                                                100
                                          ) *
                                            cdata.sgst) /
                                            100).toFixed(2)}
                                      </h4>
                                    </td>
                                    <td className="price">
                                      <h4 className="table-title text-content">
                                        Sale Price: ₹
                                        {(Number(cdata.product_price) -
                                          (cdata.product_price *
                                            cdata.discount) /
                                            100 +
                                          (Number(
                                            cdata.product_price -
                                              (cdata.product_price *
                                                cdata.discount) /
                                                100
                                          ) *
                                            cdata.gst) /
                                            100 +
                                          (Number(
                                            cdata.product_price -
                                              (cdata.product_price *
                                                cdata.discount) /
                                                100
                                          ) *
                                            cdata.cgst) /
                                            100 +
                                          (Number(
                                            cdata.product_price -
                                              (cdata.product_price *
                                                cdata.discount) /
                                                100
                                          ) *
                                            cdata.sgst) /
                                            100).toFixed(2)}
                                      </h4>
                                    </td>

                                    <td className="quantity">
                                      <h4 className="table-title text-content">
                                        Qty
                                      </h4>
                                      <div className="quantity-price">
                                        <div className="cart_qty">
                                          <div className="input-group d-flex">
                                            <button
                                              type="button"
                                              className="btn qty-left-minus"
                                              data-type="minus"
                                              data-field=""
                                              onClick={() =>
                                                decrementCount(
                                                  cdata.id,
                                                  cdata.quantity
                                                )
                                              }
                                            >
                                              <i className="fa-regular fa-minus"></i>
                                            </button>
                                            <input
                                              className="form-control input-number qty-input mx-2"
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
                                                incrementCount(
                                                  cdata.id,
                                                  cdata.quantity
                                                )
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
                                      {((cdata.quantity) *
                                       Number(cdata.product_price) -
                                          (cdata.product_price *
                                            cdata.discount) /
                                            100 +
                                          (Number(
                                            cdata.product_price -
                                              (cdata.product_price *
                                                cdata.discount) /
                                                100
                                          ) *
                                            cdata.gst) /
                                            100 +
                                          (Number(
                                            cdata.product_price -
                                              (cdata.product_price *
                                                cdata.discount) /
                                                100
                                          ) *
                                            cdata.cgst) /
                                            100 +
                                          (Number(
                                            cdata.product_price -
                                              (cdata.product_price *
                                                cdata.discount) /
                                                100
                                          ) *
                                            cdata.sgst) /
                                            100).toFixed(2)
                                            }
                                      </h5>
                                    </td>

                                    <td className="save-remove">
                                      <h4 className="table-title text-content">
                                        Action
                                      </h4>
                                      <button
                                        className="save notifi-wishlist close_button btn px-0"
                                        onClick={() =>
                                          SaveForLater(cdata.id, cdata.user_id)
                                        }
                                      >
                                        Save for later
                                      </button>
                                      <button
                                        type="button"
                                        className="remove close_button btn"
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

                      <div className="button-group">
                        <ul className="button-group-list">
                          <li>
                            <Link to="/">
                              <butoon
                                className="btn btn-light shopping-button text-dark"
                                onClick={() => DeliveryClick()}
                              >
                                <i className="fa-solid fa-arrow-left-long me-3"></i>
                                Continue Shopping
                              </butoon>
                            </Link>
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
                    {/* End Shopping Cart */}

                    {/* Delivery Address*/}
                    <Tab.Pane eventKey={DeliveyTab}>
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
                          {userdata
                            ? userdata.map((address) => {
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
                                              {address.first_name}{" "}
                                              {address.last_name}
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
                              })
                            : null}
                        </div>
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
                                      <label>Home</label>
                                    </div>
                                    <ul
                                      key={address.id}
                                      className="delivery-address-detail"
                                    >
                                      <li>
                                        <h4 className="fw-500">
                                          {address.first_name}{" "}
                                          {address.last_name}
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
                    {/* End Delivery Address*/}

                    {/* Delivery Option*/}
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
                    {/* End Delivery Option*/}

                    {/* Payment Option */}
                    <Tab.Pane eventKey="fourth">
                      <h2 className="tab-title">Payment Option</h2>
                      <div className="row g-sm-4 g-2">
                        <div className="col-xxl-4 col-lg-12 col-md-5 order-xxl-2 order-lg-1 order-md-2">
                          <div className="summery-box">
                            <div className="summery-header bg-white">
                              <h3>Order Summery</h3>
                              {/* <button to="./cart">Edit Cart</button> */}
                            </div>

                            <ul className="summery-contain bg-white custom-height">
                              {(cartdata || []).map((data) => {
                                return (
                                  <li key={data.id}>
                                    <h4>
                                      {data.sale_price}{" "}
                                      <span>X {data.quantity}</span>
                                    </h4>
                                    <h4 className="price">
                                      ₹{data.sale_price * data.quantity}
                                    </h4>
                                  </li>
                                );
                              })}
                            </ul>

                            <ul className="summery-total bg-white">
                              <li>
                                <h4>Subtotal(Tax included)</h4>
                                <h4 className="price">₹{ProductPriceTotal}</h4>
                              </li>

                              <li>
                                <h4>Shipping</h4>
                                <h4 className="price">₹{ShippingCharge}</h4>
                              </li>

                              <li>
                                <h4>Tax</h4>
                                <h4 className="price text-danger">
                                  ₹{TotalTax}
                                </h4>
                              </li>

                              <li>
                                <h4>Coupon/Code</h4>
                                <h4 className="price">₹{CouponDis}</h4>
                              </li>

                              <li className="list-total">
                                <h4>Total (Rupees)</h4>
                                <h4 className="price">
                                  ₹
                                  {ProductPriceTotal -
                                    CouponDis +
                                    ShippingCharge}
                                </h4>
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
                                          value="cod"
                                          onChange={(e) => func(e)}
                                          name="cod"
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
                                        areas. <Link to="/">Know more.</Link>
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
                              onClick={() => onOrderAdd()}
                              className="btn btn-animation"
                            >
                              Done
                            </button>
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    {/* End Payment Option */}
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
