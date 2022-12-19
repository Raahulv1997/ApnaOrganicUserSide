import React, { Fragment, useState } from "react";
import ProductBox from "../common/product-box";
import Footer from "../common/footer";
import Header from "../common/header";
import Breadcumb from "../common/beadcumb";
import { FaStar } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import "../../CSS/style.css";
import { useEffect } from "react";
import axios from "axios";
import data from "./data";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Shop = (props) => {
  const [prodData, setProdData] = useState([]);
  const [click, setclick] = useState(false);
  const [productdata, setproductdata] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [searchCat, setsearchCat] = useState([]);

  const sidebar = () => {
    setclick(true);
  };
  const useridd = localStorage.getItem("userid");
  const [searchparams] = useSearchParams();
  const [categorydata, setCategoryData] = useState([]);
  const [categoryfilterdata, setCategoryfilterData] = useState([]);
  const [apicall, setapicall] = useState(false);
  const [categoryNamedata, setCategoryNameData] = useState([])
  const [pricefilter, setpricefilter] = useState({
    to_product_price:"",
    from_product_price:""
  });
  const [discountfilter, setdiscountfilter] = useState([]);
  const [brandfilter, setbrandfilter] = useState([]);
  const [ratingfilter, setratingfilter] = useState([]);
  
//   const [showcategorydata, setshowCategoryData] = useState([]);

  useEffect(() => {
    if (
      searchparams.get("search") === null ||
      searchparams.get("search") === "" ||
      searchparams.get("search") === undefined
    ) {
      setsearchText("");
    }
    else {
      setsearchText(searchparams.get("search"));

    }
  }, [searchText]);

  useEffect(() => {
    if (
      searchparams.get("category") === null ||
      searchparams.get("category") === "" ||
      searchparams.get("category") === undefined
    ) {
      setsearchCat("")
    }
    else {
      setCategoryNameData(categoryNamedata => [...categoryNamedata, Number(searchparams.get("category"))]);
    }
  }, [searchCat]);
  // var product = data.product;
//   product list
  useEffect(() => {
    console.log("--------category"+(categoryNamedata))
    console.log("--------price"+(pricefilter))
    console.log("--------discount"+(discountfilter))
    console.log("--------brand"+(brandfilter))
    console.log("--------rating"+(ratingfilter))
    function getProductData() {
      try {
        axios
          .post(
            `${process.env.REACT_APP_BASEURL}/apna_organic_home?page=0&per_page=400`,
            {
              product_search: 
              {
                search: `${searchText}`,
              price_from:`${pricefilter.from_product_price}`,
              price_to:`${pricefilter.to_product_price}`,
              product_type: [],
              colors:[],
              size:[],
              brand:brandfilter,
              discount:discountfilter,
              rating:ratingfilter,
              category:categoryNamedata
              },
            }
          )
          .then((response) => {
            let data = response.data;
            setProdData(data.results);
            if(categoryNamedata[0] ===null && brandfilter[0]===null && discountfilter[0] === null&& ratingfilter[0] === null && pricefilter.from_product_price=== null && pricefilter.to_product_price=== null){
                setCategoryfilterData(data.results)
console.log("---------detail"+JSON.stringify(data.results))
            }
            // setapicall(false);
          });
      } catch (err) {}
    }
    getProductData();
  }, [categoryNamedata,ratingfilter,brandfilter,discountfilter,pricefilter]);
// end product list



  //   category
  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_BASEURL}/get_all_category`)
        .then((response) => {
          let data = response.data;
          const filtercategorydata = data.filter(
            (thing, index, self) =>
              index ===
              self.findIndex(
                (t, x) =>
                  t.root_category_name == thing.root_category_name
              )
          );
          setCategoryData(filtercategorydata);
          // setsearchData(data);
        });
    } catch (err) {}
  }, [apicall]);
//  SEARCH AND SHOW CATEGORY
  const onCategorySearch = (e) =>{
   let catname = e.target.value;
    try {
        axios
          .post(`${process.env.REACT_APP_BASEURL}/search_category` ,{
            "category_name":`${catname}`
          })
          .then((response) => {
            let data = response.data;
            setCategoryData(data);
          });
      } catch (err) {}
  }
  var showcategorydata = [];
  const onCategoryNameAdd = (e) =>{
    setCategoryNameData(categoryNamedata => [...categoryNamedata, e.target.value])
  }
  const onPriceFilterAdd = (e) =>{
    setpricefilter({...pricefilter, [e.target.name]:e.target.value })
  }
  const onDiscountFilterAdd = (e) =>{
    setdiscountfilter(discountfilter => [...discountfilter, e.target.value])
  }
  const onBrandFilterAdd = (e) =>{
    setbrandfilter(brandfilter => [...brandfilter, e.target.value])
  }
  const onRatingFilterAdd = (e) =>{
    setratingfilter(ratingfilter => [...ratingfilter, e.target.value])
  }

  // console.log("---change"+JSON.stringify(showcategorydata))
//   END SEARCH AND SHOW CATEGORY
  // end category


//   BRAND
const filtercategorydata = categoryfilterdata.filter(
    (thing, index, self) =>
      index ===
      self.findIndex(
        (t, x) =>
          t.brand == thing.brand
      )
  );
// END BRAND
  return (
    <Fragment>
      <Header />
      <Breadcumb pageName={"Shop"} pageTitle={"Page Title"} pageHref={"/"} />
      {/* <!-- Shop Section Start --> */}
      <section className="section-b-space shop-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-xxl-3 col-lg-4 wow fadeInUp">
              <div className={click === true ? "left-box show" : "left-box"}>
                <div className="shop-left-sidebar">
                  <div className="back-button" onClick={() => setclick(false)}>
                    <h3>
                      <i className="fa-solid fa-arrow-left"></i> Back
                    </h3>
                  </div>
                  <div className="filter-category">
                    <div className="filter-title">
                      <h2>Filters</h2>
                      <Link to="">Clear All</Link>
                    </div>
                    <ul>
{showcategorydata[0] !== '' || showcategorydata[0] !== null || showcategorydata[0] !== undefined?
(showcategorydata[0] || []).map((show,i)=>{
    return(
<li key={i}>
                        <Link to="">{show} </Link>
                      </li>
    )
}):null}
                      
                     
                    </ul>
                  </div>
                  <Accordion>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Categories</Accordion.Header>
                      <Accordion.Body>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingOne"
                        >
                          <div className="accordion-body">
                            <div className="form-floating theme-form-floating-2 search-box">
                              <input
                                type="search"
                                className="form-control"
                                id="search"
                                placeholder="Search .."
                                onChange={(e)=>onCategorySearch(e)}
                              />
                              <label htmlFor="search">Search</label>
                              {/* <button
                            className="btn search-button"
                            // onClick={searchProduct}
                          >
                            <i className="fa-regular fa-magnifying-glass"></i>
                          </button> */}
                            </div>

                            <ul className="category-list custom-padding custom-height">
                              {(categorydata || []).map((cdta, i) => {
                                return (
                                  <li key={i}>
                                    <div className="form-check ps-0 m-0 category-list-box">
                                      <input
                                        className="checkbox_animated"
                                        type="checkbox"
                                        id="category"
                                        name={'category'}
                                        value={cdta.root_id}
                                        onChange={(e)=>onCategoryNameAdd(e)}
                                      />
                                      <label
                                        className="form-check-label"
                                        htmlFor="fruit"
                                      >
                                        <span className="name">
                                          {cdta.root_category_name}
                                        </span>
                                        {/* <span className="number">(15)</span> */}
                                      </label>
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <br />
                  <Accordion>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Brand</Accordion.Header>
                      <Accordion.Body>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingTwo"
                        >
                          <div className="accordion-body">
                            <ul className="category-list custom-padding">
                                {(filtercategorydata || []).map((data,i)=>{
                                    return(
                                        <li key={i}>
                                        <div className="form-check ps-0 m-0 category-list-box">
                                          <input
                                            className="checkbox_animated"
                                            type="checkbox"
                                            id="veget"
                                            name={'brand'} 
                                            value={data.brand}
                                            onChange={(e)=>onBrandFilterAdd(e)}
                                                                                     />
                                          <label
                                            className="form-check-label"
                                            htmlFor="veget"
                                          >
                                            <span className="name">{data.brand}</span>
                                          </label>
                                        </div>
                                      </li>
                                    )
                                })}
                            

                              
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <br />
                  <Accordion>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Price</Accordion.Header>
                      <Accordion.Body>
                        <div className="row">
                          <input
                            type="text"
                            className="js-range-slider"
                            placeholder="from"
                            name={'from_product_price'}
                                        // value={cdta.root_category_name}
                                        onChange={(e)=>onPriceFilterAdd(e)}
                          />
                          &nbsp;
                          <input
                            type="text"
                            className="js-range-slider"
                            placeholder="to"
                            name={'to_product_price'}
                                        // value={cdta.root_category_name}
                                        onChange={(e)=>onPriceFilterAdd(e)}
                          />
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <br />
                  <Accordion>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Rating</Accordion.Header>
                      <Accordion.Body>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingSix"
                        >
                          <div className="accordion-body">
                            <ul className="category-list custom-padding">
                              <li >
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    name={'rating'}
                                        value={'5'}
                                        onChange={(e)=>onRatingFilterAdd(e)}
                                  />
                                  <div className="form-check-label">
                                    <ul className="rating p-0">
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}

                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li>
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                    </ul>
                                    <span className="text-content">
                                      (5 Star)
                                    </span>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    name={'rating'}
                                        value={'4'}
                                        onChange={(e)=>onRatingFilterAdd(e)}
                                  />
                                  <div className="form-check-label">
                                    <ul className="rating p-0">
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li>
                                        <FaStar className="feather " />
                                      </li>
                                    </ul>
                                    <span className="text-content">
                                      (4 Star)
                                    </span>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    name={'rating'}
                                        value={'3'}
                                        onChange={(e)=>onRatingFilterAdd(e)}
                                  />
                                  <div className="form-check-label">
                                    <ul className="rating p-0">
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar className="feather " />
                                      </li>
                                      <li>
                                        <FaStar className="feather " />
                                      </li>
                                    </ul>
                                    <span className="text-content">
                                      (3 Star)
                                    </span>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    name={'rating'}
                                        value={'2'}
                                        onChange={(e)=>onRatingFilterAdd(e)}
                                  />
                                  <div className="form-check-label">
                                    <ul className="rating p-0">
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar className="feather " />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar className="feather " />
                                      </li>
                                      <li>
                                        <FaStar className="feather " />
                                      </li>
                                    </ul>
                                    <span className="text-content">
                                      (2 Star)
                                    </span>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    name={'rating'}
                                        value={'1'}
                                        onChange={(e)=>onRatingFilterAdd(e)}
                                  />
                                  <div className="form-check-label">
                                    <ul className="rating p-0">
                                      <li color="#ffb321">
                                        <FaStar
                                          className="feather fill"
                                          fill={"#ffb321"}
                                        />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar className="feather " />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar className="feather " />
                                      </li>
                                      <li color="#ffb321">
                                        <FaStar className="feather " />
                                      </li>
                                      <li>
                                        <FaStar className="feather " />
                                      </li>
                                    </ul>
                                    <span className="text-content">
                                      (1 Star)
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <br />
                  <Accordion>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Discount</Accordion.Header>
                      <Accordion.Body>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingFour"
                        >
                          <div className="accordion-body">
                            <ul className="category-list custom-padding">
                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    name={'discount'}
                                        value={'10'}
                                        onChange={(e)=>onDiscountFilterAdd(e)}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault"
                                  >
                                    <span className="name">upto 5%</span>
                                   
                                  </label>
                                </div>
                              </li>

                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="flexCheckDefault1"
                                    name={'discount'}
                                        value={'20'}
                                        onChange={(e)=>onDiscountFilterAdd(e)}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault1"
                                  >
                                    <span className="name">5% - 10%</span>
                                    <span className="number">(08)</span>
                                  </label>
                                </div>
                              </li>

                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="flexCheckDefault2"
                                    name={'discount'}
                                        value={'30'}
                                        onChange={(e)=>onDiscountFilterAdd(e)}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault2"
                                  >
                                    <span className="name">10% - 15%</span>
                                    <span className="number">(10)</span>
                                  </label>
                                </div>
                              </li>

                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="flexCheckDefault3"
                                    name={'discount'}
                                        value={'40'}
                                        onChange={(e)=>onDiscountFilterAdd(e)}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault3"
                                  >
                                    <span className="name">15% - 25%</span>
                                    <span className="number">(14)</span>
                                  </label>
                                </div>
                              </li>

                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="flexCheckDefault4"
                                    name={'discount'}
                                        value={'50'}
                                        onChange={(e)=>onDiscountFilterAdd(e)}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault4"
                                  >
                                    <span className="name">More than 25%</span>
                                    <span className="number">(13)</span>
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <br />
                  {/* <Accordion>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Pack Size</Accordion.Header>
                      <Accordion.Body>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse show"
                          aria-labelledby="panelsStayOpen-headingFive"
                        >
                          <div className="accordion-body">
                            <ul className="category-list custom-padding custom-height">
                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="flexCheckDefault5"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault5"
                                  >
                                    <span className="name">400 to 500 g</span>
                                    <span className="number">(05)</span>
                                  </label>
                                </div>
                              </li>

                              <li>
                                <div className="form-check ps-0 m-0 category-list-box">
                                  <input
                                    className="checkbox_animated"
                                    type="checkbox"
                                    id="flexCheckDefault6"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="flexCheckDefault6"
                                  >
                                    <span className="name">500 to 700 g</span>
                                    <span className="number">(02)</span>
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion> */}
                  <div
                    className="accordion custome-accordion"
                    id="accordionExample"
                  >
                    <div className="accordion-item"></div>
                    <div className="accordion-item"></div>

                    <div className="accordion-item"></div>

                    <div className="accordion-item"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-lg-8 wow fadeInUp">
              <div className="show-button">
                <div className="filter-button-group mt-0">
                  <div
                    className="filter-button d-inline-block d-lg-none"
                    onClick={sidebar}
                  >
                    <Link>
                      <i className="fa-solid fa-filter"></i> Filter Menu
                    </Link>
                  </div>
                </div>
                <div className="top-filter-menu">
                  <div className="category-dropdown">
                    <h4 className="text-content">Sort By :</h4>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Most Popular
                        {/* <i className="fa-solid fa-angle-down"></i> */}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Popularity</Dropdown.Item>
                        <Dropdown.Item>Low - High Price</Dropdown.Item>
                        <Dropdown.Item>High - Low Price</Dropdown.Item>
                        <Dropdown.Item>Average Rating</Dropdown.Item>
                        <Dropdown.Item>A - Z Order</Dropdown.Item>
                        <Dropdown.Item>Z - A Order</Dropdown.Item>
                        <Dropdown.Item>% Off - Hight To Low</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                {prodData.map((product) => {
                  return (
                    <div key={product.id}>
                      <ProductBox
                        image={product.image}
                        id={product.id}
                        name={product.product_title_name}
                        productMRF={product.sale_price}
                        productPrice={product.product_price}
                        productid={product.product_id}
                        rating={product.rating}
                        discount={product.discount}
                        brand={product.brand}
                        category={product.category}
                        producttype={product.product_type}

                      />
                    </div>
                  );
                })}
              </div>
              <nav className="custome-pagination">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <Link
                      to=""
                      className="page-link"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      <i className="fa-solid fa-angles-left"></i>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link to="" className="page-link">
                      1
                    </Link>
                  </li>
                  <li className="page-item" aria-current="page">
                    <Link to="" className="page-link">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="" className="page-link">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link to="" className="page-link">
                      <i className="fa-solid fa-angles-right"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Shop Section End --> */}
      <Footer />
    </Fragment>
  );
};
// export {Ab};
export default Shop;
