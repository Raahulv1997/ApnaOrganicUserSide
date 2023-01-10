import React, { Fragment, useState } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import banner1 from "../../Photos/banner/14.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaStar } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import "../../CSS/style.css";
import {Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {useEffect } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { FaStarHalfAlt,FaRegStar } from "react-icons/fa";
const ProductDetail = ({logIn}) => {
  const useridd= localStorage.getItem("userid");
  const[apicall,setapicall]=useState([]);
  const[productDetails,setProductDetails]=useState([]);
  const[productprice,setProductprice]=useState();
  const[mrp,setMrp]=useState();
  const[size,setSize]=useState();
  const[colors,setColors]=useState('');
  const[mfd,setMfd]=useState('');
  const[exp,setExp]=useState('');
  const[qut,setQut]=useState('');
  const[Id,setId]=useState();
  const[image,setImage]=useState([]);
  // const[image,setImage]=useState('');
  // const[review,setReview]=useState([]);
  const[discount,setDiscount]=useState();
  const [addreviewdata, setaddreviewdata] = useState([]);
  const[showImage,setShowImages]=useState([]);
   const[reviewData,setReviewData]=useState([]);
   const[Rrating,setRrating]=useState('');
   const [Searchreview, setSearchReview] = useState({
    "product_name":"",
    "category_type":"",
    "status":""
   });
   const[rating,setRating]=useState([]);
  let ratingbox = [1, 2, 3, 4, 5];
  let ratingg = Number(productDetails.rating);
  // var product_details = data3.product_details;
  // var tranding_product = data4.tranding_product;
  let [count, setCount] = useState(0);
  const { state } = useLocation();
  const navigate = useNavigate();



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

let proid=localStorage.getItem("proid");
console.log("---------------proidddd---"+proid)

let varientId=localStorage.getItem("variantid")
  useEffect(() => {
    function getProductDetails() {
      try {
        axios
          .get(`http://192.168.29.108:5000/product_details?id=${proid}`)
          .then((response) => {
            let data = response.data;
            setProductDetails(data);
            setProductprice(data.product_verient[0].product_price);
            setMrp(data.product_verient[0].mrp);
            setColors(data.product_verient[0].colors);
            setDiscount(data.product_verient[0].discount);
            setSize(data.product_verient[0].size);
            setMfd(data.product_verient[0].manufacturing_date);
            setExp(data.product_verient[0].expire_date);
            setQut(data.product_verient[0].quantity)
            setId(data.product_verient[0].id);
            setImage(data.product_verient[0].product_image_path);
            setapicall(false);
            setproductColor(data.product_verient[0].colors,data.product_verient[0].product_price,data.product_verient[0].mrp,data.product_verient[0].manufacturing_date,data.product_verient[0].expire_date,data.product_verient[0].quantity,varientId,proid);
          });
      } catch (err) {}
    }

    getProductDetails();
  }, [apicall]);
  const result = showImage.filter((thing, index, self) =>
  index == self.findIndex((t) => (
    t.product_image_path== thing.product_image_path
  )))

  const AddToCart=()=>{
    axios.post(`${process.env.REACT_APP_BASEURL}/add_to_cart`,{
        user_id:`${useridd}`,
        product_view_id:`${Id}`,
        price:`${productDetails.product_verient[0].product_price}`,
        discount:`${productDetails.product_verient[0].discount}`,
        quantity:`${count}`,
        is_active:1
    })
    .then((response) => {
        let data = response.data;
        setProductDetails(data.results);
        setId();
        setapicall(true);
      });
  }
  const AddToWishList= () =>{
    axios
.post(`${process.env.REACT_APP_BASEURL}/add_product_wishlist`,{
    user_id:`${useridd}`,
    product_view_id:`${Id}`,
    price:`${productDetails.product_verient[0].product_price}`,
    discount:`${productDetails.product_verient[0].discount}`,

  })
.then((response) => {
    let data = response.data;
setProductDetails(data.results)
setapicall(true);
})
.catch(function(error) {
});
}

const setproductprice = (product_price,mrpp,sizee,mfdd,expp,quantityy,id,productid)=>{
  setProductprice(product_price);
  setMrp(mrpp);
  setSize(sizee);
  setMfd(mfdd);
  setExp(expp);
  setQut(quantityy)
  setId(id);
  try {
    axios
      .get(`http://192.168.29.108:5000/product_images_get_singal_veriant?product_id=${productid}&product_verient_id=${id}`)
      .then((response) => {
        let data = response.data;
        setapicall(false);
        setShowImages(data);
  
      });
  } catch (err) {}
 
}
const setproductColor=(color,product_price,mrpp,mfdd,expp,quantityy,id,productid)=>{
  localStorage.setItem("variantid", id);
  localStorage.setItem("proid", productid);

setColors(color);
setProductprice(product_price);
setMrp(mrpp);
setMfd(mfdd);
setExp(expp);
setQut(quantityy)
setId(id);
try {
  axios
    .get(`http://192.168.29.108:5000/product_images_get_singal_veriant?product_id=${productid}&product_verient_id=${id}`)
    .then((response) => {
      let data = response.data;
      setapicall(false);
      setShowImages(data);

    });
} catch (err) {}
// setImage(product_image_namee);

}
 useEffect(() => {
    axios.post(`${process.env.REACT_APP_BASEURL}/review_list`,{
    product_name:"",
    category_type:"",
    status:""
}).then ((response) => {
  let data= response.data;
  setReviewData(response.data)
  setRrating(data);

  // setSearchReview(response.data)
    setapicall(false);
    })
  }, [apicall]);

  // console.log("CONSOLEE"+JSON.stringify(Rrating))

const handleFormChange = (e) => {
  setaddreviewdata({...addreviewdata,[e.target.name]: e.target.value});

  };
const onRatingChange=(e)=>{
  setRrating(e.target.value)
  console.log("onRatingChange"+JSON.stringify((e.target.value)))


}
const AddReview = (e) => {
    axios
    .post(`${process.env.REACT_APP_BASEURL}/review_rating`,
    {
      user_id:`${useridd}`,
      user_name:"mayur",
      product_id:`${Id}`,
      product_name:`${addreviewdata.product_name}`,
      category_type:`${addreviewdata.category_type}`,
      review_date:`${addreviewdata.review_date}`,
      review_rating:`${Rrating}`,
      comment:`${addreviewdata.comment}`
    }
    )
    .then((response) => {
    });
}


  return (
    <Fragment>
      <Header/>
      {/* <!-- Breadcrumb Section Start --> */}
          <section className="breadscrumb-section pt-0">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-12">
                <div className="breadscrumb-contain">
                  <h2>{productDetails.product_title_name}</h2>
                  <nav>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <NavLink to="/">
                          <i className="fa-solid fa-house"></i>
                        </NavLink>
                      </li>
  
                      <li className="breadcrumb-item active">
                      {productDetails.product_title_name}
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
                       {showImage.map((images)=>{
                        
                    return(
                    
                    <Carousel.Item>
                      {images.product_verient_id == varientId || images.productid == proid?
                      <img
                        className="d-block"
                        src={images.product_image_path}
                        alt="First slide"
                        name={images.product_image_name}
                        style={{height:"750px",width:"750px"}}
                      />:null}
                    </Carousel.Item>
                      )
                    })}
                    </Carousel>

                </div>
                
                <div className="col-12 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s">
                      <div className="right-box-contain">
                        <h6 className="offer-top">{discount}%</h6>
                        <h2 className="name">{productDetails.product_title_name}</h2>
                        {/* <h3 className="name">Brand:{productDetails.brand}</h3> */}
                        <div className="price-rating">
                          <h3 className="theme-color price">
                            {productprice}
                            <del className="text-content">
                              {mrp}
                            </del>{""}
                            <span className="offer theme-color">  
                              {discount}%off
                            </span>
                            {/* <h3 className="text-dark">Taxs</h3>
                            <h5>Gst:{productDetails.gst}</h5>
                            <h5>Cgst:{productDetails.cgst}</h5>
                            <h5>Sgst:{productDetails.sgst}</h5> */}
                          </h3>
                          <div className="product-rating custom-rate">
                          <ul className="rating p-0 m-0 mb-2">
          {
          // !ratingg? null :
          (ratingbox || []).map((rat, i) => {
            return ratingg - rat >= 0 ? (
              <li color="#ffb321" key={i}>
                <FaStar icon="star" className="feather fill" fill={"#ffb321"} />
              </li>
            ) : ratingg - rat < 0 && ratingg - rat > -1 ? (
              <li color="#ffb321">
                <FaStarHalfAlt
                  icon="star"
                  className="feather"
                  fill={"#ffb321"}
                />
              </li>
            ) : ratingg - rat <= -1 ? (
              <li color="#ffb321">
                <FaRegStar icon="star" className="feather "  fill={"#ffb321"}/>
              </li>
            ) : null;
          })}
        </ul>
                          </div>
                        </div>
                        <button className="btn" style={{backgroundColor:colors}}>{colors}</button>
                        <div className="procuct-contain">
                              <p dangerouslySetInnerHTML={{__html:productDetails.product_description}}/>
                              
                          </div>

                   {productDetails.product_verient ? 
                        <div className="product-packege">
                          <div className="product-title"> 
                       <h4>{productDetails.product_verient[0].unit === 'gms'?'Weight' : productDetails.product_verient[0].unit === 'pcs' ? 'Piece':result?"": null||productDetails.product_verient[0].colors==='red'?'Colors':productDetails.product_verient[0].colors==='black'?'':productDetails.product_verient[0].colors==='yellow'?'':productDetails.product_verient[0].colors==='green'?'':productDetails.product_verient[0].colors==='blue'?'Colors':null} </h4>
                          </div>
                          {(productDetails.product_verient).map((details) => {
                           return (
                            
                          <ul className="select-packege" >
                         
                             <li key={details.id}>
                          
                          <Link onClick={()=>{setproductprice(details.product_price,details.mrp,details.size,details.manufacturing_date,details.expire_date,details.quantity,details.id,details.product_id
                          )}}
                          className={size==details.size ? "active" : null}
                           >
                           {details.size}
                         </Link>
                        </li>
                         <li>
                          <Link  onClick={()=>{setproductColor(details.colors,details.product_price,details.mrp,details.manufacturing_date,details.expire_date,details.quantity, details.id,details.product_id)}}
                          className={colors == details.colors ? "active" : null}
                            >
                            {details.colors}
                          </Link>
                       </li>
                       
                       </ul>  
                      
                       );
                      })}
                        </div> : null }
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
                                className="qty-left-minus"
                                data-type="minus"
                                data-field=""
                                onClick={decrementCount}
                              >
                                <i className="fa fa-minus" aria-hidden="true"></i>
                              </button>
                              <input
                                className="form-control input-number qty-input"
                                type="text"
                                name="quantity"
                                value={count} onChange={func}
                              />
                               <button
                                type="button"
                                className="qty-right-plus"
                                data-type="plus"
                                data-field=""
                                onClick={incrementCount}
                              >
                                <i className="fa fa-plus" aria-hidden="true"></i>
                              </button>
                              
                            </div>
                          </div>
                       
                          <button className="btn btn-dark">
                        <Link to="/cart">
                              {/* <i data-feather="heart"></i> */}
                              <span className="text-white" onClick={()=>AddToCart()}> Add To Cart</span>
                            </Link>
                          </button>
                        </div> 
                        <div className="row mt-4">
                        <div className="col-6 col-xl-3">
                        <button className="btn btn-dark">
                        <Link to="/wishlist">
                              {/* <i data-feather="heart"></i> */}
                              <span className="text-white" onClick={()=>AddToWishList()}>Add To Wishlist</span>
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
                        {/* {result.map((d)=>{
                          return(
                            <> */}
                            <div className="pickup-box">
                          <div className="product-title">
                            <h4>Other Information</h4>
                          </div>
                          <div className="pickup-detail">
                            <h4 className="text-content">
                              {/* {storeInfo.shop_name} */}
                            </h4>
                          </div>
  
                          <div className="product-info">
                            <ul className="product-info-list product-info-list-2 ">
                              <li>
                                Type :{" "}
                                 <Link to="/" >{productDetails.product_type}</Link>
                              </li>
                              <li>
                                Taxs :{" "}
                                 <Link to="/" >Gst:{productDetails.gst} , Sgst:{productDetails.sgst},Cgst:{productDetails.cgst}</Link>
                              </li>
                              <li>
                                SKU :  <Link to="/" >SDFVW65467</Link>
                              </li>
                                     <li>
                                    MFG :  <Link to="/" >{mfd}</Link>
                                  </li>
                                  <li>
                                    EXP :  <Link to="/" >{exp}</Link>
                                  </li>
                              <li>
                                Stock :{" "}
                                 <Link to="/" >{qut}</Link>
                              </li>
                              <li>
                                Tags :  <Link to="/" >Cake,</Link>{" "}
                                 <Link to="/" >Backery</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                       
                      </div>
                    {/* );
                  })} */}
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
                              <p dangerouslySetInnerHTML={{__html:productDetails.product_description}}/>
                            </div>
  
                            <div className="nav-desh">
                              <div className="desh-title">
                                <h5>Organic:</h5>
                              </div>
                              <p dangerouslySetInnerHTML={{__html:productDetails.product_description}}/>
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
                              <p dangerouslySetInnerHTML={{__html:productDetails.product_description}}/>
                              <p dangerouslySetInnerHTML={{__html:productDetails.product_description}}/>
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
                        { <p dangerouslySetInnerHTML={{__html:productDetails.other_introduction}}/>}
                      </Tab>
  
                      <Tab
                        className="nav-item"
                        role="presentation"
                        eventKey="Care Instuctions"
                        title="Care Instuctions"
                      >
                     
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
                              <div className="d-flex">
                              <div className="product-rating">
                              
                                    
                              <ul className="rating">
                                {ratingbox.map((rdata,i)=>{
                                  return(
                                    <li color="#ffb321" key={i}>
                                    <Form.Check aria-label="option 1" 
                                    onChange={(e) =>onRatingChange(e)}
                                    name={`review_rating`}
                                    value={rdata}
                                    />
                                    {Rrating===rdata ? 
                                     <FaStar
                                                  icon="star"
                                                    className="feather fill"
                                                    fill={"#ffb321"}
                                                  />
                                                  :
                                                   
                                                   <FaRegStar
                    icon="star"
                    className="feather "
                    fill={"#ffb321"}
                  />}
                                                </li>
                                  )
                                })}
                                {/* <li color="#ffb321">
                              <Form.Check aria-label="option 1" 
                              onChange={(e) =>onRatingChange(e)}
                              name="review_rating1"
                              value={"1"}
                              />

                                <FaStar
                                            icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                
                                          </li>
                                          
                                          <li color="#ffb321">
                              <Form.Check aria-label="option 1"
                                 onChange={(e) => onRatingChange(e)}
                                 name="review_rating2"
                                 value={"2"}
                              />

                                          <FaStar
                                              icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                          </li>
                                          <li color="#ffb321">
                              <Form.Check aria-label="option 1" 
                                 onChange={(e) => onRatingChange(e)}
                                 name="review_rating3"
                                 value={"3"}
                              />

                                            <FaStar
                                              icon="star"
                                              className="feather fill"
                                              fill={"#ffb321"}
                                            />
                                          </li>
                                          <li>
                              <Form.Check aria-label="1"
                                 onChange={(e) => onRatingChange(e)}
                                 name="review_rating4"
                                 value={"4"}
                             />

                                            <FaStar
                                              icon="star"
                                              className="feather "
                                            />
                                          </li>
                                          <li>
                              <Form.Check aria-label="option 1"     onChange={(e) => onRatingChange(e)}
                              name="review_rating5"
                              value={"5"}
                               />

                                            <FaStar
                                              icon="star"
                                              className="feather "
                                            />
                                          </li>  */}
                                </ul>
                                
                              </div>
                              </div>
                              <div  className="row g-4">
                                     <div className="col-md-6">
                                  <div className="form-floating theme-form-floating">
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="name"
                                      name={"user_name"}
                                      onChange={(e) => handleFormChange(e)}
                                      value={addreviewdata.user_name}
                                      placeholder="Name"

                                    />
                                    <label htmlFor="name">Your Name</label>
                                  </div>
                                </div>
  
                                <div className="col-md-6">
                                  <div className="form-floating theme-form-floating">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name={"product_name"}
                                      id="product name"
                                      placeholder="Product Name"
                                      onChange={(e) => handleFormChange(e)}
                                      value={addreviewdata.product_name}

                                    />
                                    <label htmlFor="name">Product Name</label>
                                  </div>
                                </div>
  
                                <div className="col-md-6">
                                      <Form.Select
                                      aria-label="Search by category"
                                      className="adminselectbox"
                                      placeholder="Search by category"
                                      onChange={(e) => handleFormChange(e)} name={'category_type'}
                                      value={addreviewdata.category_type}
                                      >
                                     <option value={''}>Select Categories</option>
                  
                  <option value="cloth">cloth</option>
                  <option value="food">Fish & Meat</option>
                  <option value="baby care">Baby Care</option>
                </Form.Select>
                                  {/* <div className="form-floating theme-form-floating"> */}
                                 
                                </div>
  
                                <div className="col-md-6">
                                  {/* <div className="form-floating theme-form-floating"> */}
                                  <Form.Select
              aria-label="Search by Status"
              className="adminselectbox"
              name='status'
              onChange={(e) => handleFormChange(e)}
              value={addreviewdata.status}
            >
              <option>-Status-</option>
              <option value="pending"> Pending</option>
              <option value="approved">Approved</option>
              <option value="blocked">Blocked</option>
            </Form.Select>
                                    {/* <input
                                      type="url"
                                      className="form-control"
                                      id="review1"
                                      placeholder="Give your review a title"
                                    />
                                    <label htmlFor="review1">Review Title</label> */}
                                  {/* </div> */}
                                </div>
                                <div className="col-md-6">
                                  <div className="form-floating theme-form-floating">
                                    <input
                                      type="date"
                                      className="form-control"
                                      id="date"
                                      // placeholder="Select Date"
                                      name={"review_date"}
                                      onChange={(e) => handleFormChange(e)}
                                      value={addreviewdata.review_date}
                                    />
                                    <label htmlFor="date">Date</label>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="form-floating theme-form-floating your_comment">
                                    <textarea
                                   onChange={(e) => handleFormChange(e)}
                                  value={addreviewdata.comment}
                                  name={"comment"}
                                      className="form-control"
                                      placeholder="Leave a comment here"
                                      id="floatingTextarea2"
                                    ></textarea>
                                    <label htmlFor="floatingTextarea2">
                                      Write Your Comment
                                    </label>
                                  </div>
                                  <NavLink
                                to=""
                                onClick={AddReview}
                                className="btn btn-sm cart-button theme-bg-color text-white mt-3"
                              >
                                Add Review
                              </NavLink>
                                 
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
  
                          {reviewData.map(rdataa=>{
                      let ratingg = Number(rdataa.review_rating);

                            return(
                              <>
                              
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
                                      {rdataa.user_name}
                                    </Link>
                                    <div className="date-time d-flex d-flex justify-content-between">
                                      <h6 className="text-content">
                                        {rdataa.review_date}
                                      </h6>
  
                                      <div className="product-rating">
                                        <ul className="rating ">
                                        {
          // !ratingg? null :
          (ratingbox || []).map((rat, i) => {

            return ratingg - rat >= 0 ? (
              <li color="#ffb321" key={i}>
                <FaStar icon="star" className="feather fill" fill={"#ffb321"} />
              </li>
            ) : ratingg - rat < 0 && ratingg - rat > -1 ? (
              <li color="#ffb321">
                <FaStarHalfAlt
                  icon="star"
                  className="feather"
                  fill={"#ffb321"}
                />
              </li>
            ) : ratingg - rat <= -1 ? (
              <li color="#ffb321">
                <FaRegStar icon="star" className="feather"  fill={"#ffb321"}/>
              </li>
            ) : null;
          })}
                                      
                                        </ul>
                                      </div>
                                    </div>
  
                                    <div className="reply">
                                      <p className="w-100">
                                       {rdataa.comment}
                                         <Link to="/" >Reply</Link>
                                      </p>
                                    </div>
                                        {/* </>
                                      )
                                    })} */}
                                     {/* <Link to="/" >
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
                                    </div> */}
                                  </div>
                                </div>
                              </li>
{/*   
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
   */}
                              {/* <li>
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
                              </li> */}
                            </ul>
                          </div>
                              </>
                           )
                          })} 
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  
      {/* <!-- Product Left Sidebar End --> */}

      <Footer />
    </Fragment>
  );
};
// export {Validation};
export default ProductDetail;
