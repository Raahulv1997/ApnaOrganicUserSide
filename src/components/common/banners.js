import React, { Fragment, useState } from "react";
import BannerBox1 from "../../Photos/2.jpg";
import BannerBox2 from "../../Photos/1.jpg";
import Banner1 from "../../Photos/14.jpg";
import ProductBox from "./product-box";
import data from "../pages/data";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/style.css";
import axios from "axios";
import Header from "./header";
import { Link } from "react-router-dom";
const Benners = (props, productPrice, productMRF, name,image) => {
  
  const [productData, setProductData] = useState([]);
  const [productType, setProductType] = useState([]);
  const [catArray, setcatArray] = useState([]);
  const [unCatArr, setunCatArr] = useState([]);
  let useridd = localStorage.getItem("userid");
  const [apicall, setapicall] = useState(false);
  const [wlistData, setWlistData] = useState("add");
  const [data, setData] = useState([]);
  const[showbanner,setShowBanner]=useState([]);
   const [Imgarray, setImgArray] = useState([]);
  let [count, setCount] = useState(1);
  const navigate = useNavigate();
  // var product = data.product;
  useEffect(() => {
    function getRating() {
      try {
        axios
          .post(
            `${process.env.REACT_APP_BASEURL}/home?page=0&per_page=400&user_id=${useridd}`,
            {
              product_search: {
                search: `${productType}`,
                price_from: "",
                price_to: "",
                id:"",
                product_title_name:"",
                sale_price:"",
                short_by_updated_on:"",
              },
            }
          )
          .then((response) => {
            let data = response.data;
            setProductData(response.data.results);
            localStorage.setItem("reviewid",response.data.results.id);

            setapicall(false)
            {
              response.data.results.map((product) => {
                return setcatArray((catArray) => [
                  ...catArray,
                  product.product_type,
                ]);
              });
            }
          });
      } catch (err) {}
    }
    getRating();
  }, []);

  useEffect(() => {
    const result = catArray.filter(
      (thing, index, self) => index === self.findIndex((t) => t === thing)
    );
    setunCatArr(result);
  }, [catArray]);

// product quantity

// end product quantity

  // product box

  const AddToCart = (id,saleprice,productMRF,wishlistid,count) => {
    if(useridd === undefined ||
      useridd === "null" ||
      useridd === "" ||
      useridd === null){
        navigate("/login")
    }
    else{
      axios
      .post(`${process.env.REACT_APP_BASEURL}/add_to_cart`, {
        user_id: `${useridd}`,
        product_view_id: `${id}`,
        price: `${saleprice}`,
        discount: `${productMRF}`,
        quantity:  count,
        is_active: 1,
      })
      .then((response) => {
        let data = response.data;
      setCount(0);
        // setaddcartid(id)
        setData(data);
        setapicall(true);
        localStorage.setItem("cartupdate",true)
        console.log("ADDCART"+true)
      });
     
    }
  }
  
// wlist = window.location.pathname;

const AddToWishList = (id,wishlistt,wishlistid) => {
  if(useridd === undefined ||
    useridd === "null" ||
    useridd === "" ||
    useridd === null){
      navigate("/login")
}
else{
  if (wishlistt > 0) {
    axios
      .put(`${process.env.REACT_APP_BASEURL}/remove_product_from_wishlist`,{
        product_id:`${id}`,
        user_id:`${useridd}`,
      })
      .then((response) => {
        let data = response.data;
        setData(response.data);
        setWlistData("add");
        setapicall(true);
      });
  }
  else{
    axios
    .post(`${process.env.REACT_APP_BASEURL}/add_product_wishlist`,{
      user_id: `${useridd}`,
      product_view_id: `${id}`,
    })
    .then((response) => {
      let data = response.data;
      setData(response.data);
      setWlistData("remove");
      setapicall(true);
    });
  }
}
};
useEffect(() => {
 
  let homeurl;
  if(useridd=== "null" || useridd === '' || useridd === null || useridd=== undefined){
     homeurl =`${process.env.REACT_APP_BASEURL}/home?page=0&per_page=400&user_id`
  }
  else{
     homeurl =`${process.env.REACT_APP_BASEURL}/home?page=0&per_page=400&user_id=${useridd}`
  }
  function getProductData() {
    try {
      axios
        .post(
          `${homeurl}`,
          {
            product_search: {
              search: `${productType}`,
              price_from: "",
              price_to: "",
              latest_first:"asc",
            product_title_name:"",
            sale_price:"",
            short_by_updated_on:"",
            },
          }
        )
        .then((response) => {
          let data = response.data;
          setProductData(response.data.results);
          // console.log("getdataaaaaaaaa"+JSON.stringify(response.data.results))
          setapicall(false)
        });
    } catch (err) {}
  }
  getProductData();
}, [productType,apicall]);
const clickProduct = (productid,id) => {
  localStorage.setItem("proid", productid);
  localStorage.setItem("variantid", id);

  navigate("/product-detail");
};
useEffect(() => {
  axios.post(`${process.env.REACT_APP_BASEURL}/banner_list`,
  {
    banner_id:"",
    title:"",
    banner_location:""
  }).then ((response) => {
    let data= response.data;
    setShowBanner(response.data)
    // setImgArray(JSON.parse(response.data[0].multiple_document_upload))
      })
},[apicall]);
 
// end product box
  return (
    <Fragment>
         
      <Header/>
      <section className="home-section-2 section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-4">
          {showbanner.map((img)=>{
                return(
                  <>
                 <div className="col-xxl-6 col-xl-8 col-md-6">
                  <div className="home-contain">
                {img.banner_location ==='home_page_right_side(2)'?
                <>
                 <img src={img.image}
                  className="img-fluid bg-img lazyload "
                  alt="image"
                  name="image"
                  // width={'100px'}
                />
                <div className="home-detail w-50 p-center-left">
                  <div>
                    <h6 className="ls-expanded theme-color">ORGANIC</h6>
                    <h1 className="fw-bold w-100">
                      {/* 100% Fresh */}
                    {img.title}
                    </h1>
                    <h3 className="text-content fw-light">
                      Fruit & Vegetables
                    </h3>
                    <p className="d-sm-block d-none">
                      {/* Free shipping on all your order. we deliver you enjoy */}
                      {img.description}
                    </p>
                    <Link to={img.banner_url}>
                    <button className="btn mt-sm-4 btn-2 theme-bg-color text-white mend-auto btn-2-animation">
                      Shop Now
                    </button></Link>
                    
                  </div>
                </div>
                </>
                :null}
              </div>
            </div>
           
            <div className="col-xxl-3 col-xl-4 col-md-6 ratio_medium">
              <div className="home-contain">
              {img.banner_location==='home_page_right_side(3)'?
                 <>
                  
                  <img
                    src={img.image}
                    className="img-fluid bg-img lazyload "
                    alt="image"
                    name="image"
                  />
              
                <div className="home-detail text-center p-top-center w-100 ">
                  <div>
                    <h4 className="fw-bold">{img.title}</h4>
                    <h5 className="text-center">{img.description}</h5>
                    <Link to={img.banner_url}>
                    <button className="btn bg-white theme-color mt-3 home-button mx-auto btn-2">
                      Shop Now
                    </button></Link>
                   
                  </div>
                </div>
                 </>
               :null}
              </div>
            </div>

            <div className="col-xxl-3 ratio_65">
              <div className="row g-3">
                <div className="col-xxl-12 col-sm-6">
                  <div className="home-contain">
                    <a href="shop-left-sidebar.html">
                      {img.banner_location==='home_page_right_side(2)'?
                      <img
                        src={img.image}
                        className="img-fluid bg-img lazyload"
                        alt="image"
                        name="image"
                      />:null}
                    </a>
                    <div className="home-detail  p-center text-center">
                      <div>
                        <h4 className="text-center">{img.title}</h4>
                        <h5 className="text-center">{img.description}</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-12 col-sm-6">
                  <div className="home-contain">
                    <a href="shop-left-sidebar.html">
                      {img.banner_location==='home_page_right_side(3)'?
                      <img
                        src={img.image}
                        className="img-fluid bg-img lazyload w-100 h-100"
                        alt="image"
                        name='image'
                      />:null}
                    </a>
                    <div className="home-detail  w-50 p-center-left home-p-sm">
                      <div>
                        <h4 className="fw-bold">Safe food saves lives</h4>
                        <h5>Discount Offer</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </>
              )
            })} 
          </div>
        
        </div>
      </section>

      {/* <!-- Product Sction Start --> */}
      {/* <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title title-flex">
            <h2 className="mb-lg-0 mb-2">Our Products</h2> */}
      <div className="all_catagrey_tabs">
        <section className="product-section">
          <div className="container-fluid-lg">
            <div className="title title">
              <h2 className="mb-lg-0 mb-2">{productType}</h2>
              <div className="cat_div">
                <button
                  className="btn theme-bg-color btn-md ms-1 mx-auto text-white"
                  onClick={() => setProductType("")}
                >
                  All
                </button>
                {unCatArr.map((catArr, i) => {
                  return (
                    <button
                      key={catArr.id}
                      className="btn theme-bg-color btn-md ms-1 mx-auto text-white"
                      onClick={() => setProductType(catArr)}
                    >
                      {catArr}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="all"
                role="tabpanel"
                aria-labelledby="all-tab"
              >
                <div className="row w-100 ms-0">
                  {productData.map((product) => {
                    return (
                      <div
                        key={product.id}
                        className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                      >
                        <ProductBox
                          id={product.id}
                          image={product.image}
                          name={product.product_title_name}
                          productPrice={product.product_price}
                          productMRF={product.sale_price}
                          productid={product.product_id}
                          discount={product.discount}
                          special_offer={product.special_offer}
                          rating={product.rating}
                          producttype={product.product_type}
                          saleprice={product.sale_price}
                          wishlistt={product.wishlist}
                          clickProduct={clickProduct}
                          AddToWishList={AddToWishList}
                          AddToCart={AddToCart}
                          allimages={product.all_images}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- Product Sction Start --> */}
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title title-flex">
            <h2 className="mb-lg-0 mb-2">Top Products</h2>
          </div>
        </div>
      </section>
      {/* <!-- Product Sction End --> */}
      {/* <!-- Banner Section Start --> */}
      <section className="banner-section">
            <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="banner-contain-3 section-b-space section-t-space hover-effect w-100 ">
                {showbanner.map((img)=>{
                  return(
                    <>
                    {img.banner_location==='top_product_banner'?
                    <>
                     <img src={img.image} className="img-fluid bg-img w-100 h-50" alt="image" name="image" />
                <div className="banner-detail p-center text-dark text-center p-0">
                  <div>
                    <h4 className="ls-expanded text-uppercase theme-color">
                      {/* Try Our New */}{img.title}
                    </h4>
                    {/* <h2 className="my-3">
                      100% Organic Best Quality Best Price
                    </h2> */}
                    <h4 className="text-content fw-300">
                      {/* Best Apna Organic Food Quality */}{img.description}
                    </h4>
                    <Link to={img.banner_url}>
                    <button className="btn theme-bg-color mt-sm-4 btn-md mx-auto text-white fw-bold">
                      Shop Now
                    </button>
                    </Link>
                  </div>
                </div>
                </>:null}
                    </>
                  )
                })}
                 
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Benners;
