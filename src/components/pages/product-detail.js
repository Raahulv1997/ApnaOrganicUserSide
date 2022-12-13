import React, { Fragment, useState } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import banner1 from "../../Photos/banner/14.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaStar } from "react-icons/fa";
import { data3} from "../pages/data";
import Carousel from "react-bootstrap/Carousel";
import "../../CSS/style.css";
import {Link, NavLink } from "react-router-dom";
import {useEffect } from "react";
import axios from "axios";

// function Validation(){

const ProductDetail = (product_id,product_price,discount,quantity) => {
 
  const[productDetails,setProductDetails]=useState([]);
  var product_details = data3.product_details;
  // var tranding_product = data4.tranding_product;
  let [count, setCount] = useState(0);
  function incrementCount() {
    count = count + 1;
    setCount(count);
}
const decrementCount = () => {
    if (count > 0) {
        setCount(count => count - 1);
    }
};

  const func =()=>{
    
  }
//   function incrementCount() {
//     count = count + 1;
//     setCount(count);
// }
// const decrementCount = () => {
//     if (count > 0) {
//         setCount(count => count - 1);
//     }
// };
  useEffect(() => {
    function getProductDetails() {
      try {
        axios
          .post(`http://192.168.29.108:5000/products_search`,{
              "product_search":{
              "search":"",
              "product_id": 60
              }
          })
          .then((response) => {
            let data = response.data;
            setProductDetails(data.results);
            console.log("detailssssssssss-------------------"+JSON.stringify(data))
            // setapicall(false);
          });
      } catch (err) {}
    }

    getProductDetails();
  }, []);
  const AddToCart=()=>{
    axios.post(`http://192.168.29.108:5000/add_to_cart`,{
        user_id:6,
        product_id:`${product_id}`,
        price:`${product_price}`,
        discount:`${discount}`,
        quantity:`${quantity}`,
        is_active:1
    })
    .then((response) => {
        let data = response.data;
        console.log("ADD CARTTT-------------------"+JSON.stringify(data))
        setProductDetails(data.results);
      });
  }
  
  return (
    <Fragment>
      <Header />
      {/* <!-- Breadcrumb Section Start --> */}
      {productDetails.map((pdetails)=>{
        return(
          <>
          <section className="breadscrumb-section pt-0">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="breadscrumb-contain">
                  <h2>{pdetails.product_title_name}</h2>
                  <nav>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <NavLink to="/">
                          <i className="fa-solid fa-house"></i>
                        </NavLink>
                      </li>
  
                      <li className="breadcrumb-item active">
                      {pdetails.product_title_name}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-section">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-xl-8 col-lg-7 wow fadeInUp"></div>
              <div className="row g-6">
                  
                <div className="col-xl-6 sm-2 col-lg-7">
                  <Carousel variant="dark">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src=" http://localhost:3000/static/media/2.41a56ef0.jpg"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3 style={{ color: "black" }}>First slide label</h3>
                        <p style={{ color: "black" }}>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="http://localhost:3000/static/media/2.41a56ef0.jpg"
                        alt="Second slide"
                      />
  
                      <Carousel.Caption>
                        <h3 style={{ color: "black" }}>Second slide label</h3>
                        <p style={{ color: "black" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="http://localhost:3000/static/media/2.41a56ef0.jpg"
                        alt="Third slide"
                      />
  
                      <Carousel.Caption>
                        <h3 style={{ color: "black" }}>Third slide label</h3>
                        <p style={{ color: "black" }}>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div
                  className="col-12 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {pdetails.product_id}
                  {product_details.map((product_details) => {
                    return (
                      <div key={pdetails.id} className="right-box-contain">
                        <h6 className="offer-top">{pdetails.discount}%</h6>
                        <h2 className="name">{pdetails.product_title_name}</h2>
                        <div className="price-rating">
                          <h3 className="theme-color price">
                            {pdetails.product_price}
                            <del className="text-content">
                              {pdetails.sale_price}
                            </del>{" "}
                            <span className="offer theme-color">
                              {pdetails.discount}%off
                            </span>
                          </h3>
                          <div className="product-rating custom-rate">
                            <ul className="rating pt-3">
                            <li color="#ffb321">
                                      <FaStar
                                        icon="star"
                                        className="feather fill"
                                        fill={"#ffb321"}
                                      />
                                    </li>
                                    <li color="#ffb321">
                                      <FaStar
                                        icon="star"
                                        className="feather fill"
                                        fill={"#ffb321"}
                                      />
                                    </li>
                                    <li color="#ffb321">
                                      <FaStar
                                        icon="star"
                                        className="feather fill"
                                        fill={"#ffb321"}
                                      />
                                    </li>
                                    <li>
                                      <FaStar icon="star" className="feather " />
                                    </li>
                                    <li>
                                      <FaStar icon="star" className="feather " />
                                    </li>
                            </ul>
                            <span className="review">
                              {product_details.creview} Costumer Review
                            </span>
                          </div>
                        </div>
                         
                        <div className="procuct-contain">
                              <p> {pdetails.product_description}
                              </p>
                          </div>
                        {/* <div className="procuct-contain">
                          <p>{product_details.pdiscription}</p>
                        </div> */}
  
                        <div className="product-packege">
                          <div className="product-title">
                            <h4>Weight</h4>
                          </div>
                          <ul className="select-packege">
                            <li>
                               <Link to="/"  className="active">
                                1/2 KG
                              </Link>
                            </li>
                            <li>
                               <Link to="/" >1 KG</Link>
                            </li>
                            <li>
                               <Link to="/" >1.5 KG</Link>
                            </li>
                            <li>
                               <Link to="/" >Red Roses</Link>
                            </li>
                            <li>
                               <Link to="/" >With Pink Roses</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="time deal-timer product-deal-timer mx-md-0 mx-auto">
                              <div className="product-title">
                                  <h4>Hurry up! Sales Ends In</h4>
                              </div>
                              <ul>
                                  <li>
                                      <div className="counter">
                                          <div>
                                            
                                              <h6>Days</h6>
                                          </div>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="counter">
                                          <div>
                                             
                                              <h6>Hours</h6>
                                          </div>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="counter">
                                          <div>
                                              
                                              <h6>Min</h6>
                                          </div>
                                      </div>
                                  </li>
                                  <li>
                                      <div className="counter">
                                          <div>
                                            
                                              <h6>Sec</h6>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                        <div className="note-box product-packege">
                          <div className="cart_qty qty-box product-qty">
                            <div className="input-group">
                              <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                                onClick={incrementCount}
                              >
                                <i className="fa fa-plus" aria-hidden="true"></i>
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                value={count} onChange={func}
                              />
                              <button  
                                type="button"
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                                onClick={decrementCount}
                              >
                                <i className="fa fa-minus" aria-hidden="true"></i>
                              </button>
                            </div>
                          </div>
  
                          <button
                           
                            className="btn btn-md bg-dark cart-button text-white"
                            onClick={()=>AddToCart()}>
                            Add To Cart
                          </button>
                        </div> 
                        <div className="row mt-4">
                        <div className="col-6 col-xl-3">
                        <button className="btn btn-dark">
                        <Link to="/">
                              {/* <i data-feather="heart"></i> */}
                              <span className="text-white">Add To Wishlist</span>
                            </Link>
                          </button>
                        </div>
                        <div className="col-6 col-xl-3">
                        <button className="btn btn-dark ">
                        <Link to="/" >
                              {/* <i data-feather="shuffle"></i> */}
                              <span className="text-white ">Add To Compare</span>
                            </Link>
                          </button>
                        </div>
                        </div>
                        <div className="pickup-box">
                          <div className="product-title">
                            <h4>Store Information</h4>
                          </div>
  
                          <div className="pickup-detail">
                            <h4 className="text-content">
                              {product_details.store_info}
                            </h4>
                          </div>
  
                          <div className="product-info">
                            <ul className="product-info-list product-info-list-2 ">
                              <li>
                                Type :{" "}
                                 <Link to="/" >{pdetails.product_type}</Link>
                              </li>
                              <li>
                                SKU :  <Link to="/" >SDFVW65467</Link>
                              </li>
                              <li>
                                MFG :  <Link to="/" >Jun 4, 2022</Link>
                              </li>
                              <li>
                                Stock :{" "}
                                 <Link to="/" >2 Items Left</Link>
                              </li>
                              <li>
                                Tags :  <Link to="/" >Cake,</Link>{" "}
                                 <Link to="/" >Backery</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
  
                        <div className="paymnet-option">
                          <div className="product-title">
                            <h4>Guaranteed Safe Checkout</h4>
                          </div>
                          <ul>
                            <li>
                               <Link to="/" >
                                <img
                                  src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/1.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                               <Link to="/" >
                                <img
                                  src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/2.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                               <Link to="/" >
                                <img
                                  src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/3.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                               <Link to="/" >
                                <img
                                  src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/4.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                            <li>
                               <Link to="/" >
                                <img
                                  src="https://themes.pixelstrap.com/fastkart/assets/images/product/payment/5.svg"
                                  className=" lazyload"
                                  alt=""
                                />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
  
                <div className="col-12">
                  <div className="product-section-box">
                    <Tabs
                      className="nav nav-tabs custom-nav mb-3"
                      id="fill-tab-example"
                      role="tablist"
                      defaultActiveKey="Description"
                    >
                      <Tab
                        className="nav-item"
                        role="presentation"
                        eventKey="Description"
                        title="Description"
                      >
                        {" "}
                        <div
                          className="tab-pane fade show active"
                          id="description"
                          role="tabpanel"
                          aria-labelledby="description-tab"
                        >
                          <div className="product-description">
                            <div className="nav-desh">
                              <div className="desh-title"></div>
                              <p>
                                Jelly beans carrot cake icing biscuit oat cake
                                gummi bears tart. Lemon drops carrot cake pudding
                                sweet gummi bears. Chocolate cake tart cupcake
                                donut topping liquorice sugar plum chocolate bar.
                                Jelly beans tiramisu caramels jujubes biscuit
                                liquorice chocolate. Pudding toffee jujubes oat
                                cake sweet roll. Lemon drops dessert croissant
                                danish cake cupcake. Sweet roll candy chocolate
                                toffee jelly sweet roll halvah brownie topping.
                                Marshmallow powder candy sesame snaps jelly beans
                                candy canes marshmallow gingerbread pie.
                              </p>
                            </div>
  
                            <div className="nav-desh">
                              <div className="desh-title">
                                <h5>Organic:</h5>
                              </div>
                              <p>
                                vitae et leo duis ut diam quam nulla porttitor
                                massa id neque aliquam vestibulum morbi blandit
                                cursus risus at ultrices mi tempus imperdiet nulla
                                malesuada pellentesque elit eget gravida cum
                                sociis natoque penatibus et magnis dis parturient
                                montes nascetur ridiculus mus mauris vitae
                                ultricies leo integer malesuada nunc vel risus
                                commodo viverra maecenas accumsan lacus vel
                                facilisis volutpat est velit egestas dui id ornare
                                arcu odio ut sem nulla pharetra diam sit amet nisl
                                suscipit adipiscing bibendum est ultricies integer
                                quis auctor elit sed vulputate mi sit amet mauris
                                commodo quis imperdiet massa tincidunt nunc
                                pulvinar sapien et ligula ullamcorper malesuada
                                proin libero nunc consequat interdum varius sit
                                amet mattis vulputate enim nulla aliquet porttitor
                                lacus luctus accumsan.
                              </p>
                            </div>
  
                            <div className="banner-contain nav-desh">
                              <img
                                src={banner1}
                                className="bg-img  lazyload w-100"
                                alt=""
                              />
                              <div className="banner-details p-center banner-b-space w-100 text-center">
                                <div>
                                  <h6 className="ls-expanded theme-color mb-sm-3 mb-1">
                                    SUMMER
                                  </h6>
                                  <h2>VEGETABLE</h2>
                                  <p className="mx-auto mt-1">
                                    Save up to 5% OFF
                                  </p>
                                </div>
                              </div>
                            </div>
  
                            <div className="nav-desh">
                              <div className="desh-title mt-3">
                                <h5>From The Manufacturer:</h5>
                              </div>
                              <p>
                                Jelly beans shortbread chupa chups carrot cake
                                jelly-o halvah apple pie pudding gingerbread.
                                Apple pie halvah cake tiramisu shortbread cotton
                                candy croissant chocolate cake. Tart cupcake
                                caramels gummi bears macaroon gingerbread
                                fruitcake marzipan wafer. Marzipan dessert cupcake
                                ice cream tootsie roll. Brownie chocolate cake
                                pudding cake powder candy ice cream ice cream
                                cake. Jujubes soufflé chupa chups cake candy
                                halvah donut. Tart tart icing lemon drops
                                fruitcake apple pie.
                              </p>
  
                              <p>
                                Dessert liquorice tart soufflé chocolate bar apple
                                pie pastry danish soufflé. Gummi bears halvah
                                gingerbread jelly icing. Chocolate cake chocolate
                                bar pudding chupa chups bear claw pie dragée donut
                                halvah. Gummi bears cookie ice cream jelly-o
                                jujubes sweet croissant. Marzipan cotton candy
                                gummi bears lemon drops lollipop lollipop
                                chocolate. Ice cream cookie dragée cake sweet roll
                                sweet roll.Lemon drops cookie muffin carrot cake
                                chocolate marzipan gingerbread topping chocolate
                                bar. Soufflé tiramisu pastry sweet dessert.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Tab>
  
                      <Tab
                        className="nav-item"
                        role="presentation"
                        eventKey="Additional info"
                        title="Additional info"
                      >
                        <div className="table-responsive">
                          <table className="table info-table">
                            <tbody>
                              <tr>
                                <td>Specialty</td>
                                <td>Vegetarian</td>
                              </tr>
                              <tr>
                                <td>Ingredient Type</td>
                                <td>Vegetarian</td>
                              </tr>
                              <tr>
                                <td>Brand</td>
                                <td>Lavian Exotique</td>
                              </tr>
                              <tr>
                                <td>Form</td>
                                <td>Bar Brownie</td>
                              </tr>
                              <tr>
                                <td>Package Information</td>
                                <td>Box</td>
                              </tr>
                              <tr>
                                <td>Manufacturer</td>
                                <td>Prayagh Nutri Product Pvt Ltd</td>
                              </tr>
                              <tr>
                                <td>Item part number</td>
                                <td>LE 014 - 20pcs Crème Bakes (Pack of 2)</td>
                              </tr>
                              <tr>
                                <td>Net Quantity</td>
                                <td>40.00 count</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Tab>
  
                      <Tab
                        className="nav-item"
                        role="presentation"
                        eventKey="Care Instuctions"
                        title="Care Instuctions"
                      >
                        {/* <div className="tab-pane fade" id="care" role="tabpanel" aria-labelledby="care-tab"> */}
                        <div className="information-box">
                          <ul>
                            <li>
                              Store cream cakes in a refrigerator. Fondant cakes
                              should be stored in an air conditioned environment.
                            </li>
  
                            <li>
                              Slice and serve the cake at room temperature and
                              make sure it is not exposed to heat.
                            </li>
  
                            <li>Use a serrated knife to cut a fondant cake.</li>
  
                            <li>
                              Sculptural elements and figurines may contain wire
                              supports or toothpicks or wooden skewers for
                              support.
                            </li>
  
                            <li>
                              Please check the placement of these items before
                              serving to small children.
                            </li>
  
                            <li>The cake should be consumed within 24 hours.</li>
  
                            <li>Enjoy your cake!</li>
                          </ul>
                        </div>
                        {/* </div> */}
                      </Tab>
  
                      <Tab
                        className="nav-item"
                        role="presentation"
                        eventKey="Review"
                        title="Review"
                      >
                        <div className="review-box">
                          <div className="row g-4">
                            <div className="col-xl-6">
                              <div className="review-title">
                                <h4 className="fw-500">Customer reviews</h4>
                              </div>
  
                              <div className="d-flex">
                                <div className="product-rating">
                                  <ul className="rating">
                                    <li color="#ffb321">
                                      <FaStar
                                        icon="star"
                                        className="feather fill"
                                        fill={"#ffb321"}
                                      />
                                    </li>
                                    <li color="#ffb321">
                                      <FaStar
                                        icon="star"
                                        className="feather fill"
                                        fill={"#ffb321"}
                                      />
                                    </li>
                                    <li color="#ffb321">
                                      <FaStar
                                        icon="star"
                                        className="feather fill"
                                        fill={"#ffb321"}
                                      />
                                    </li>
                                    <li>
                                      <FaStar icon="star" className="feather " />
                                    </li>
                                    <li>
                                      <FaStar icon="star" className="feather " />
                                    </li>
                                  </ul>
                                </div>
                                <h6 className="ms-3">4.2 Out Of 5</h6>
                              </div>
  
                              <div className="accordion-body">
                                <ul className="category-list custom-padding">
                                  <li>
                                    <div className="form-check ps-0 m-0 category-list-box">
                                      <h5>5 Star</h5>
                                      <div className="form-check-label">
                                        <ul className="rating p-0 w-100">
                                          <li>
                                            <div className="rating-list ">
                                              <div className="progress ">
                                                <div
                                                 className="progress-bar "
                                                  role="progressbar"
                                                  style={{ width: "68%" }}
                                                  aria-valuenow="100"
                                                  aria-valuemin="0"
                                                  aria-valuemax="100"
                                                >
                                                
                                                  68%
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
  
                                  <li>
                                    <div className="form-check ps-0 m-0 category-list-box">
                                      <h5>4 Star</h5>
                                      <div className="form-check-label">
                                        <ul className="rating p-0 w-100">
                                          <li>
                                            <div className="rating-list">
                                              <div className="progress">
                                                <div
                                                 className="progress-bar"
                                                  role="progressbar"
                                                  style={{ width: "67%" }}
                                                  aria-valuenow="100"
                                                  aria-valuemin="0"
                                                  aria-valuemax="100"
                                                >
                                                  67%
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
  
                                  <li>
                                    <div className="form-check ps-0 m-0 category-list-box">
                                      <h5>3 Star</h5>
                                      <div className="form-check-label">
                                        <ul className="rating p-0 w-100">
                                          <li>
                                            <div className="rating-list">
                                              <div className="progress">
                                                <div
                                                 className="progress-bar"
                                                  role="progressbar"
                                                  style={{ width: "42%" }}
                                                  aria-valuenow="100"
                                                  aria-valuemin="0"
                                                  aria-valuemax="100"
                                                >
                                                  42%
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
  
                                  <li>
                                    <div className="form-check ps-0 m-0 category-list-box">
                                      <h5>2 Star</h5>
                                      <div className="form-check-label">
                                        <ul className="rating p-0 w-100">
                                          <li>
                                            <div className="rating-list">
                                              <div className="progress">
                                                <div
                                                 className="progress-bar"
                                                  role="progressbar"
                                                  style={{ width: "30%" }}
                                                  aria-valuenow="100"
                                                  aria-valuemin="0"
                                                  aria-valuemax="100"
                                                >
                                                  30%
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
  
                                  <li>
                                    <div className="form-check ps-0 m-0 category-list-box">
                                      <h5>1 Star</h5>
                                      <div className="form-check-label">
                                        <ul className="rating p-0 w-100">
                                          <li>
                                            <div className="rating-list">
                                              <div className="progress">
                                                <div
                                                  className="progress-bar"
                                                  role="progressbar"
                                                  style={{ width: "24%" }}
                                                  aria-valuenow="100"
                                                  aria-valuemin="0"
                                                  aria-valuemax="100"
                                                >
                                                  24%
                                                </div>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
  
                            <div className="col-xl-6">
                              <div className="review-title">
                                <h4 className="fw-500">Add a review</h4>
                              </div>
  
                              <div className="row g-4">
                                <div className="col-md-6">
                                  <div className="form-floating theme-form-floating">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="name"
                                      placeholder="Name"
                                    />
                                    <label htmlFor="name">Your Name</label>
                                  </div>
                                </div>
  
                                <div className="col-md-6">
                                  <div className="form-floating theme-form-floating">
                                    <input
                                      type="email"
                                      className="form-control"
                                      id="email"
                                      placeholder="Email Address"
                                    />
                                    <label htmlFor="email">Email Address</label>
                                  </div>
                                </div>
  
                                <div className="col-md-6">
                                  <div className="form-floating theme-form-floating">
                                    <input
                                      type="url"
                                      className="form-control"
                                      id="website"
                                      placeholder="Website"
                                    />
                                    <label htmlFor="website">Website</label>
                                  </div>
                                </div>
  
                                <div className="col-md-6">
                                  <div className="form-floating theme-form-floating">
                                    <input
                                      type="url"
                                      className="form-control"
                                      id="review1"
                                      placeholder="Give your review a title"
                                    />
                                    <label htmlFor="review1">Review Title</label>
                                  </div>
                                </div>
  
                                <div className="col-12">
                                  <div className="form-floating theme-form-floating your_comment">
                                    <textarea
                                      className="form-control"
                                      placeholder="Leave a comment here"
                                      id="floatingTextarea2"
                                    ></textarea>
                                    <label htmlFor="floatingTextarea2">
                                      Write Your Comment
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="review-title">
                            <h4 className="fw-500">
                              Customer questions & answers
                            </h4>
                          </div>
  
                          <div className="review-people">
                            <ul className="review-list">
                              <li>
                                <div className="people-box">
                                  <div>
                                    <div className="people-image">
                                      <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21WWCZUVMlL375-2A1X0UKkzPtCU3nC9eWK97EHa698V2Rx6YZ1TdiGo1bpBAR6mWh4g&usqp=CAU"
                                        className="img-fluid lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>
  
                                  <div className="people-comment">
                                     <Link to="/" >
                                      Tracey
                                    </Link>
                                    <div className="date-time d-flex d-flex justify-content-between">
                                      <h6 className="text-content">
                                        14 Jan, 2022 at 12.58 AM
                                      </h6>
  
                                      <div className="product-rating">
                                        <ul className="rating ">
                                          <li color="#ffb321">
                                            <FaStar
                                              icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                          </li>
                                          <li color="#ffb321">
                                            <FaStar
                                              icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                          </li>
                                          <li color="#ffb321">
                                            <FaStar
                                              icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                          </li>
                                          <li>
                                            <FaStar
                                              icon="star"
                                              className="feather "
                                            />
                                          </li>
                                          <li>
                                            <FaStar
                                              icon="star"
                                              className="feather "
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
  
                                    <div className="reply">
                                      <p className="w-100">
                                        Icing cookie carrot cake chocolate cake
                                        sugar plum jelly-o danish. Dragée dragée
                                        shortbread tootsie roll croissant muffin
                                        cake I love gummi bears. Candy canes ice
                                        cream caramels tiramisu marshmallow cake
                                        shortbread candy canes cookie.
                                         <Link to="/" >Reply</Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
  
                              <li className="w-100">
                                <div className="people-box">
                                  <div>
                                    <div className="people-image">
                                      <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21WWCZUVMlL375-2A1X0UKkzPtCU3nC9eWK97EHa698V2Rx6YZ1TdiGo1bpBAR6mWh4g&usqp=CAU"
                                        className="img-fluid lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>
  
                                  <div className="people-comment">
                                     <Link to="/" >
                                      Olivia
                                    </Link>
                                    <div className="date-time">
                                      <h6 className="text-content">
                                        01 May, 2022 at 08.31 AM
                                      </h6>
                                      <div className="product-rating">
                                        <ul className="rating">
                                          <li color="#ffb321">
                                            <FaStar
                                              icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                          </li>
                                          <li color="#ffb321">
                                            <FaStar
                                              icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                          </li>
                                          <li color="#ffb321">
                                            <FaStar
                                              icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                          </li>
                                          <li>
                                            <FaStar
                                              icon="star"
                                              className="feather "
                                            />
                                          </li>
                                          <li>
                                            <FaStar
                                              icon="star"
                                              className="feather "
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
  
                                    <div className="reply">
                                      <p className="w-100">
                                        Tootsie roll cake danish halvah powder
                                        cake. Tootsie roll candy marshmallow
                                        cookie brownie apple pie pudding brownie
                                        chocolate bar. Jujubes gummi bears I love
                                        powder danish oat cake tart croissant.
                                         <Link to="/" >Reply</Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
  
                              <li>
                                <div className="people-box">
                                  <div>
                                    <div className="people-image">
                                      <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21WWCZUVMlL375-2A1X0UKkzPtCU3nC9eWK97EHa698V2Rx6YZ1TdiGo1bpBAR6mWh4g&usqp=CAU"
                                        className="img-fluid  lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>
  
                                  <div className="people-comment">
                                     <Link to="/" >
                                      Gabrielle
                                    </Link>
                                    <div className="date-time">
                                      <h6 className="text-content">
                                        21 May, 2022 at 05.52 PM
                                      </h6>
  
                                      <div className="product-rating">
                                        <ul className="rating">
                                          <li color="#ffb321">
                                            <FaStar
                                              icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                          </li>
                                          <li color="#ffb321">
                                            <FaStar
                                              icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                          </li>
                                          <li color="#ffb321">
                                            <FaStar
                                              icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                          </li>
                                          <li>
                                            <FaStar
                                              icon="star"
                                              className="feather "
                                            />
                                          </li>
                                          <li>
                                            <FaStar
                                              icon="star"
                                              className="feather "
                                            />
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
  
                                    <div className="reply">
                                      <p className="w-100">
                                        Biscuit chupa chups gummies powder I love
                                        sweet pudding jelly beans. Lemon drops
                                        marzipan apple pie gingerbread macaroon
                                        croissant cotton candy pastry wafer.
                                        Carrot cake halvah I love tart caramels
                                        pudding icing chocolate gummi bears. Gummi
                                        bears danish cotton candy muffin marzipan
                                        caramels awesome feel.{" "}
                                         <Link to="/" >Reply</Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          </>
        )
      })}
    
      {/* <!-- Product Left Sidebar End --> */}

      <Footer />
    </Fragment>
  );
};
// export {Validation};
export default ProductDetail;
