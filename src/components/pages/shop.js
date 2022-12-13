import React, { Fragment, useState } from 'react'
import ProductBox from '../common/product-box'
import Footer from '../common/footer'
import Header from '../common/header'
import Breadcumb from '../common/beadcumb'
import { FaStar } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../CSS/style.css'
import { useEffect } from 'react'
import axios from 'axios'
import data from './data'
import { Link } from 'react-router-dom'
const Shop=(props)=> {
    const[prodData,setProdData]=useState([]);
    const [click, setclick] = useState(false);
    const [productdata, setproductdata] = useState([]);
    const [searchText, setsearchText] = useState('');
    const sidebar = () => {
        setclick(true);
    };

    var product=data.product
    useEffect(() => {
        function getProductData() {
          try {
            axios
              .post(`${process.env.REACT_APP_BASEURL}/home?page=0&per_page=400&user_id=6`,{
                "product_search":{
                    "search":"",
                    }
              })
              .then((response) => {
                let data = response.data;
                setProdData(data.results);
            //    console.log("PRODUCT============"+data)
                // setapicall(false);
              });
          } catch (err) {}
        }
    
        getProductData();
      }, []);
    return (
        <Fragment>
            <Header />
            <Breadcumb pageName={'Shop'} pageTitle={'Page Title'} pageHref={"/"} />
            {/* <!-- Shop Section Start --> */}
            <section className="section-b-space shop-section">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-3 col-lg-4 wow fadeInUp">

                            <div
                                className={
                                    click === true
                                        ? "left-box show"
                                        : "left-box"
                                }
                            >
                                <div className="shop-left-sidebar">
                                    <div className="back-button" onClick={() => setclick(false)}>
                                        <h3><i className="fa-solid fa-arrow-left"></i> Back</h3>
                                    </div>
                                    <div className="filter-category">
                                        <div className="filter-title">
                                            <h2>Filters</h2>
                                            <Link to="">Clear All</Link>
                                        </div>
                                        <ul>
                                            <li>
                                                <Link to="">Vegetable </Link>
                                            </li>
                                            <li>
                                                <Link to="">Fruit</Link>
                                            </li>
                                            <li>
                                                <Link to="">Fresh</Link>
                                            </li>
                                            <li>
                                                <Link to="">Milk</Link>
                                            </li>
                                            <li>
                                                <Link to="">Meat</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Accordion>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Categories</Accordion.Header>
                                            <Accordion.Body>
                                                <div id="collapseOne" className="accordion-collapse collapse show"
                                                    aria-labelledby="panelsStayOpen-headingOne">
                                                    <div className="accordion-body">
                                                        <div className="form-floating theme-form-floating-2 search-box">
                                                            <input type="search" className="form-control" id="search"
                                                                placeholder="Search .." />
                                                            <label htmlFor="search">Search</label>
                                                        </div>

                                                        <ul className="category-list custom-padding custom-height">
                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox" id="fruit" />
                                                                    <label className="form-check-label" htmlFor="fruit">
                                                                        <span className="name">Fruits & Vegetables</span>
                                                                        <span className="number">(15)</span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox" id="cake" />
                                                                    <label className="form-check-label" htmlFor="cake">
                                                                        <span className="name">Bakery, Cake & Dairy</span>
                                                                        <span className="number">(12)</span>
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
                                    <Accordion>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Food Preference</Accordion.Header>
                                            <Accordion.Body>
                                                <div id="collapseTwo" className="accordion-collapse collapse show"
                                                    aria-labelledby="panelsStayOpen-headingTwo">
                                                    <div className="accordion-body">
                                                        <ul className="category-list custom-padding">
                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox" id="veget" />
                                                                    <label className="form-check-label" htmlFor="veget">
                                                                        <span className="name">Vegetarian</span>
                                                                        <span className="number">(08)</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox" id="non" />
                                                                    <label className="form-check-label" htmlFor="non">
                                                                        <span className="name">Non Vegetarian</span>
                                                                        <span className="number">(09)</span>
                                                                    </label>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion><br />
                                    <Accordion>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Price</Accordion.Header>
                                            <Accordion.Body>
                                                <div className="row">
                                                    <input type="text" className="js-range-slider" placeholder='from' />&nbsp;
                                                    <input type="text" className="js-range-slider" placeholder='to ' />
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion><br />
                                    <Accordion>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Rating</Accordion.Header>
                                            <Accordion.Body>
                                                <div id="collapseSix" className="accordion-collapse collapse show"
                                                    aria-labelledby="panelsStayOpen-headingSix">
                                                    <div className="accordion-body">
                                                        <ul className="category-list custom-padding">
                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox" />
                                                                    <div className="form-check-label">
                                                                        <ul className="rating p-0">
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />

                                                                            </li>
                                                                        </ul>
                                                                        <span className="text-content">(5 Star)</span>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox" />
                                                                    <div className="form-check-label">
                                                                        <ul className="rating p-0">
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li>
                                                                                <FaStar className="feather " />
                                                                            </li>
                                                                        </ul>
                                                                        <span className="text-content">(4 Star)</span>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox" />
                                                                    <div className="form-check-label">
                                                                        <ul className="rating p-0">
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather " />
                                                                            </li>
                                                                            <li>
                                                                                <FaStar className="feather " />
                                                                            </li>
                                                                        </ul>
                                                                        <span className="text-content">(3 Star)</span>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox" />
                                                                    <div className="form-check-label">
                                                                        <ul className="rating p-0">
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather " />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather " />
                                                                            </li>
                                                                            <li>
                                                                                <FaStar className="feather " />
                                                                            </li>
                                                                        </ul>
                                                                        <span className="text-content">(2 Star)</span>
                                                                    </div>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox" />
                                                                    <div className="form-check-label">
                                                                        <ul className="rating p-0">
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather fill" fill={'#ffb321'} />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather " />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather " />
                                                                            </li>
                                                                            <li color='#ffb321'>
                                                                                <FaStar className="feather " />
                                                                            </li>
                                                                            <li>
                                                                                <FaStar className="feather " />
                                                                            </li>
                                                                        </ul>
                                                                        <span className="text-content">(1 Star)</span>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion><br />
                                    <Accordion>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Discount</Accordion.Header>
                                            <Accordion.Body>
                                                <div id="collapseFour" className="accordion-collapse collapse show"
                                                    aria-labelledby="panelsStayOpen-headingFour">
                                                    <div className="accordion-body">
                                                        <ul className="category-list custom-padding">
                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox"
                                                                        id="flexCheckDefault" />
                                                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                                                        <span className="name">upto 5%</span>
                                                                        <span className="number">(06)</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox"
                                                                        id="flexCheckDefault1" />
                                                                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                                        <span className="name">5% - 10%</span>
                                                                        <span className="number">(08)</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox"
                                                                        id="flexCheckDefault2" />
                                                                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                                                                        <span className="name">10% - 15%</span>
                                                                        <span className="number">(10)</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox"
                                                                        id="flexCheckDefault3" />
                                                                    <label className="form-check-label" htmlFor="flexCheckDefault3">
                                                                        <span className="name">15% - 25%</span>
                                                                        <span className="number">(14)</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox"
                                                                        id="flexCheckDefault4" />
                                                                    <label className="form-check-label" htmlFor="flexCheckDefault4">
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
                                    </Accordion><br />
                                    <Accordion>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Pack Size</Accordion.Header>
                                            <Accordion.Body>
                                                <div id="collapseFive" className="accordion-collapse collapse show"
                                                    aria-labelledby="panelsStayOpen-headingFive">
                                                    <div className="accordion-body">
                                                        <ul className="category-list custom-padding custom-height">
                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox"
                                                                        id="flexCheckDefault5" />
                                                                    <label className="form-check-label" htmlFor="flexCheckDefault5">
                                                                        <span className="name">400 to 500 g</span>
                                                                        <span className="number">(05)</span>
                                                                    </label>
                                                                </div>
                                                            </li>

                                                            <li>
                                                                <div className="form-check ps-0 m-0 category-list-box">
                                                                    <input className="checkbox_animated" type="checkbox"
                                                                        id="flexCheckDefault6" />
                                                                    <label className="form-check-label" htmlFor="flexCheckDefault6">
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
                                    </Accordion>
                                    <div className="accordion custome-accordion" id="accordionExample">
                                        <div className="accordion-item">
                                        </div>
                                        <div className="accordion-item">

                                        </div>

                                        <div className="accordion-item">

                                        </div>

                                        <div className="accordion-item">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-9 col-lg-8 wow fadeInUp">
                            <div className="show-button">
                                <div className="filter-button-group mt-0">
                                    <div className="filter-button d-inline-block d-lg-none" onClick={sidebar}>
                                        <Link><i className="fa-solid fa-filter"></i> Filter Menu</Link>
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
                                                <Dropdown.Item >Popularity</Dropdown.Item>
                                                <Dropdown.Item >Low - High Price</Dropdown.Item>
                                                <Dropdown.Item >High - Low Price</Dropdown.Item>
                                                <Dropdown.Item >Average Rating</Dropdown.Item>
                                                <Dropdown.Item >A - Z Order</Dropdown.Item>
                                                <Dropdown.Item >Z - A Order</Dropdown.Item>
                                                <Dropdown.Item >% Off - Hight To
                                                    Low</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                                {prodData.map((product)=>{
                                    return(
                                        <div key={product.id}><ProductBox 
                                         image={product.image} 
                                         name={product.product_title_name}
                                         productMRF={product.sale_price} 
                                         productPrice={product.product_price}
                                         productid={product.product_id} />
                                        </div>
                                    )
                                })}
                            </div>
                            <nav className="custome-pagination">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <Link to="" className="page-link" tabIndex="-1" aria-disabled="true">
                                            <i className="fa-solid fa-angles-left"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item active">
                                        <Link to="" className="page-link" >1</Link>
                                    </li>
                                    <li className="page-item" aria-current="page">
                                        <Link to="" className="page-link" >2</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="" className="page-link" >3</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link to="" className="page-link" >
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
    )
}
// export {Ab};
export default Shop;