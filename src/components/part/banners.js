import React, { Fragment } from "react";
import BannerBox1 from "../../Photos/2.jpg";
import BannerBox2 from "../../Photos/1.jpg";
import Banner1 from "../../Photos/14.jpg";
import ProductBox from "../UI/product-box";
import data from "../Pages/data";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {FaStar} from 'react-icons/fa';
import "../../CSS/style.css";

const Benners = (props,productPrice,productMRF,name,image) => {
  
  //let [count, setCount] = useState(0);
  var product = data.product;
  console.log(product);
  // function incrementCount() {
  //   count = count + 1;
  //   setCount(count);
  // }
  // function decrementCount() {
  //   count = count - 1;
  //   setCount(count);
  // }
  return (
    <Fragment>
      <section className="home-section-2 section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-4">
            <div className="col-xxl-6 col-xl-8 col-md-6">
              <div className="home-contain h-100">
                <img
                  src={BannerBox1}
                  className="img-fluid bg-img lazyload"
                  alt=""
                />
                <div className="home-detail w-50 p-center-left">
                  <div>
                    <h6 className="ls-expanded theme-color">ORGANIC</h6>
                    <h1 className="fw-bold w-100">100% Fresh</h1>
                    <h3 className="text-content fw-light">
                      Fruit & Vegetables
                    </h3>
                    <p className="d-sm-block d-none">
                      Free shipping on all your order. we deliver you enjoy
                    </p>
                    <button
                      onclick="location.href = 'shop-left-sidebar.html';"
                      className="btn mt-sm-4 btn-2 theme-bg-color text-white mend-auto btn-2-animation"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 col-xl-4 col-md-6 ratio_medium">
              <div className="home-contain">
                <div>
                  <img
                    src={BannerBox2}
                    className="img-fluid bg-img lazyload"
                    alt=""
                  />
                </div>
                <div className="home-detail text-center p-top-center w-100 ">
                  <div>
                    <h4 className="fw-bold">Fresh & 100% Organic</h4>
                    <h5 className="text-center">famer's market</h5>
                    <button
                      className="btn bg-white theme-color mt-3 home-button mx-auto btn-2"
                      onclick="location.href = 'shop-left-sidebar.html';"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-3 ratio_65">
              <div className="row g-3">
                <div className="col-xxl-12 col-sm-6">
                  <div className="home-contain">
                    <a href="shop-left-sidebar.html">
                      <img
                        src={BannerBox1}
                        className="img-fluid bg-img lazyload"
                        alt=""
                      />
                    </a>
                    <div className="home-detail  p-center text-center">
                      <div>
                        <h4 className="text-center">Organic Lifestyle</h4>
                        <h5 className="text-center">Best Weekend Sales</h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-12 col-sm-6">
                  <div className="home-contain">
                    <a href="shop-left-sidebar.html">
                      <img
                        src={BannerBox1}
                        className="img-fluid bg-img lazyload"
                        alt=""
                      />
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
          </div>
        </div>
      </section>

      {/* <!-- Product Sction Start --> */}
      {/* <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title title-flex">
            <h2 className="mb-lg-0 mb-2">Our Products</h2> */}

      <Tabs
        defaultActiveKey="all"
        id="uncontrolled-tab-example myTab"
        className="nav nav-tabs tab-style-color mb-3 nav_item pt-5  pe-5"
      >
        <Tab eventKey="all" className="nav-item" title="All">
          <section className="product-section">
            <div className="container-fluid-lg">
              <div className="title title">
                <h2 className="mb-lg-0 mb-2">Our Products</h2>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="all"
                  role="tabpanel"
                  aria-labelledby="all-tab"
                >
                  <div className="row g-8">
                    {product.map((product) => {
                      return (
                        <div
                          key={product.id}
                          className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                        >
                          <ProductBox
                            image={product.image}
                            name={product.name}
                            productPrice={product.productPrice}
                            productMRF={product.productMRF}
                            
                          />
                          <ProductBox
                            image={product.image}
                            name={product.name}
                            productPrice={product.productPrice}
                            productMRF={product.productMRF}

                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="banner-section">
            <div className="container-fluid-lg">
              <div className="row">
                <div className="col-12">
                  <div className="banner-contain-3 section-b-space section-t-space hover-effect">
                    <img
                      src={Banner1}
                      className="img-fluid bg-img w-100"
                      alt=""
                    />
                    <div className="banner-detail p-center text-dark text-center p-0">
                      <div>
                        <h4 className="ls-expanded text-uppercase theme-color">
                          Try Our New
                        </h4>
                        <h2 className="my-3">
                          100% Organic Best Quality Best Price
                        </h2>
                        <h4 className="text-content fw-300">
                          Best Apna Organic Food Quality
                        </h4>
                        <button
                          className="btn theme-bg-color mt-sm-4 btn-md mx-auto text-white fw-bold"
                          onclick="location.href = 'shop-left-sidebar.html';"
                        >
                          Shop Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Tab>
        <Tab eventKey="cooking" className="nav-item" title="Cooking">
        <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title title-flex">
            <h2 className="mb-lg-0 mb-2">Cooking</h2>
          </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              <div className="row g-8">
                {product.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                    >
                      <ProductBox
                        image={product.image}
                        name={product.name}
                        productPrice={product.productPrice}
                        productMRF={product.productMRF}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
        </Tab>
        <Tab eventKey="fruits&vagitables" className="nav-item" title="Fruits & Vagitables">
        <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title title-flex">
            <h2 className="mb-lg-0 mb-2">Fruits & Vagitables</h2>
          </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              <div className="row g-8">
                {product.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                    >
                      <ProductBox
                        image={product.image}
                        name={product.name}
                        productPrice={product.productPrice}
                        productMRF={product.productMRF}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
        </Tab>
        <Tab eventKey="beverage" className="nav-item" title="Baverage">
        <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title title-flex">
            <h2 className="mb-lg-0 mb-2">Baverage</h2>
          </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              <div className="row g-8">
                {product.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                    >
                      <ProductBox
                        image={product.image}
                        name={product.name}
                        productPrice={product.productPrice}
                        productMRF={product.productMRF}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
        </Tab>
        <Tab eventKey="dairy" className="nav-item" title="Dairy">
        <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title title-flex">
            <h2 className="mb-lg-0 mb-2">Dairy</h2>
          </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              <div className="row g-8">
                {product.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                    >
                      <ProductBox
                        image={product.image}
                        name={product.name}
                        productPrice={product.productPrice}
                        productMRF={product.productMRF}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
        </Tab>
      </Tabs>
      {/* <ul className="nav nav-tabs tab-style-color" id="myTab">
              <li className="nav-item">
                <button
                  className="nav-link btn active"
                  id="all-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#all"
                  type="button"
                >
                  All
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link btn"
                  id="cooking-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#cooking"
                  type="button"
                >
                  {" "}
                  Cooking
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link btn"
                  id="fruits-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#fruits"
                  type="button"
                >
                  Fruits & Vegetables
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link btn"
                  id="beverage-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#beverage"
                  type="button"
                >
                  Beverage
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link btn"
                  id="dairy-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#dairy"
                  type="button"
                >
                  Dairy
                </button>
              </li>
            </ul> */}
      {/* </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              <div className="row g-8">
                {product.map((product)=>{
                  return(
                    <div key={product.id} className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp">
                      <ProductBox
                       image={product.image}
                       name={product.name}
                       productPrice={product.productPrice}
                       productMRF={product.productMRF}
                       />
                       <ProductBox
                       image={product.image}
                       name={product.name}
                       productPrice={product.productPrice}
                       productMRF={product.productMRF}
                       />
                </div>
                  )
                })}      
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Product Sction End --> */}

      {/* <!-- Banner Section Start --> */}
      {/* <section className="banner-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="banner-contain-3 section-b-space section-t-space hover-effect">
                <img src={Banner1} className="img-fluid bg-img w-100" alt="" />
                <div className="banner-detail p-center text-dark text-center p-0">
                  <div>
                    <h4 className="ls-expanded text-uppercase theme-color">
                      Try Our New
                    </h4>
                    <h2 className="my-3">
                      100% Organic Best Quality Best Price
                    </h2>
                    <h4 className="text-content fw-300">
                      Best Apna Organic Food Quality
                    </h4>
                    <button
                      className="btn theme-bg-color mt-sm-4 btn-md mx-auto text-white fw-bold"
                      onclick="location.href = 'shop-left-sidebar.html';"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Product Sction Start --> */}
      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="title title-flex">
            <h2 className="mb-lg-0 mb-2">Top Products</h2>
          </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              <div className="row g-8">
                {product.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="col-xxl-2 col-lg-3 col-md-4 col-6 wow fadeInUp"
                    >
                      <ProductBox
                        image={product.image}
                        name={product.name}
                        productPrice={product.productPrice}
                        productMRF={product.productMRF}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Product Sction End --> */}
      {/* <!-- Banner Section Start --> */}
      <section className="banner-section">
        <div className="container-fluid-lg">
          <div className="row">
            <div className="col-12">
              <div className="banner-contain-3 section-b-space section-t-space hover-effect">
                <img src={Banner1} className="img-fluid bg-img" alt="" />
                <div className="banner-detail p-center text-dark text-center p-0">
                  <div>
                    <h4 className="ls-expanded text-uppercase theme-color">
                      Try Our New
                    </h4>
                    <h2 className="my-3">
                      100% Organic Best Quality Best Price
                    </h2>
                    <h4 className="text-content fw-300">
                      Best Apna Organic Food Quality
                    </h4>
                    <button
                      className="btn theme-bg-color mt-sm-4 btn-md mx-auto text-white fw-bold"
                      onclick="location.href = 'shop-left-sidebar.html';"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Benners;
