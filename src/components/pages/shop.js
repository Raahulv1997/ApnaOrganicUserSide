import React, { Fragment } from 'react'
import ProductBox from '../common/product-box'
import Footer from '../common/footer'
import Header from '../common/header'
import Breadcumb from '../common/beadcumb'
import {FaStar} from 'react-icons/fa';
import data from './data';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../CSS/style.css'
const Shop=(props)=> {
    var product=data.product
    return (
        <Fragment>
            <Header />
            <Breadcumb pageName={'Shop'} pageTitle={'Page Title'} />
            {/* <!-- Shop Section Start --> */}
            <section className="section-b-space shop-section">
                <div className="container-fluid-lg">
                    <div className="row">
                        <div className="col-xxl-3 col-lg-4 wow fadeInUp">
                            <div className="left-box">
                                <div className="shop-left-sidebar">
                                    <div className="back-button">
                                        <h3><i className="fa-solid fa-arrow-left"></i> Back</h3>
                                    </div>

                                    <div className="filter-category">
                                        <div className="filter-title">
                                            <h2>Filters</h2>
                                            <a href="javascript:void(0)">Clear All</a>
                                        </div>
                                        <ul>
                                            <li>
                                                <a href="javascript:void(0)">Vegetable</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Fruit</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Fresh</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Milk</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">Meat</a>
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
                                                        <label for="search">Search</label>
                                                    </div>

                                                    <ul className="category-list custom-padding custom-height">
                                                        <li>
                                                            <div className="form-check ps-0 m-0 category-list-box">
                                                                <input className="checkbox_animated" type="checkbox" id="fruit" />
                                                                <label className="form-check-label" for="fruit">
                                                                    <span className="name">Fruits & Vegetables</span>
                                                                    <span className="number">(15)</span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check ps-0 m-0 category-list-box">
                                                                <input className="checkbox_animated" type="checkbox" id="cake" />
                                                                <label className="form-check-label" for="cake">
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
                                    <br/>
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
                                                                <label className="form-check-label" for="veget">
                                                                    <span className="name">Vegetarian</span>
                                                                    <span className="number">(08)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="form-check ps-0 m-0 category-list-box">
                                                                <input className="checkbox_animated" type="checkbox" id="non" />
                                                                <label className="form-check-label" for="non">
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
                                    </Accordion><br/>
                                    <Accordion>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Price</Accordion.Header>
                                            <Accordion.Body>
                                            <div className="row">
                                            <input type="text" className="js-range-slider" value="" placeholder='from' />&nbsp;
                                            <input type="text" className="js-range-slider" value="" placeholder='to ' />
                                            </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion><br/>
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
                                    </Accordion><br/>
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
                                                                <label className="form-check-label" for="flexCheckDefault">
                                                                    <span className="name">upto 5%</span>
                                                                    <span className="number">(06)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="form-check ps-0 m-0 category-list-box">
                                                                <input className="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault1" />
                                                                <label className="form-check-label" for="flexCheckDefault1">
                                                                    <span className="name">5% - 10%</span>
                                                                    <span className="number">(08)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="form-check ps-0 m-0 category-list-box">
                                                                <input className="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault2" />
                                                                <label className="form-check-label" for="flexCheckDefault2">
                                                                    <span className="name">10% - 15%</span>
                                                                    <span className="number">(10)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="form-check ps-0 m-0 category-list-box">
                                                                <input className="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault3" />
                                                                <label className="form-check-label" for="flexCheckDefault3">
                                                                    <span className="name">15% - 25%</span>
                                                                    <span className="number">(14)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="form-check ps-0 m-0 category-list-box">
                                                                <input className="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault4" />
                                                                <label className="form-check-label" for="flexCheckDefault4">
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
                                    </Accordion><br/>
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
                                                                <label className="form-check-label" for="flexCheckDefault5">
                                                                    <span className="name">400 to 500 g</span>
                                                                    <span className="number">(05)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div className="form-check ps-0 m-0 category-list-box">
                                                                <input className="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault6" />
                                                                <label className="form-check-label" for="flexCheckDefault6">
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
                                    <div className="filter-button d-inline-block d-lg-none">
                                        <a><i className="fa-solid fa-filter"></i> Filter Menu</a>
                                    </div>
                                </div>

                                <div className="top-filter-menu">
                                    <div className="category-dropdown">
                                        <h5 className="text-content">Sort By :</h5>
                                        <Dropdown>
                                        <Dropdown.Toggle variant="white" id="dropdown-basic">
                                        Most Popular
                                        <i className="fa-solid fa-angle-down"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                          <Dropdown.Item href="javascript:void(0)">Popularity</Dropdown.Item>
                                          <Dropdown.Item href="javascript:void(0)">Low - High Price</Dropdown.Item>
                                          <Dropdown.Item href="javascript:void(0)">High - Low Price</Dropdown.Item>
                                          <Dropdown.Item href="javascript:void(0)">Average Rating</Dropdown.Item>
                                          <Dropdown.Item href="javascript:void(0)">A - Z Order</Dropdown.Item>
                                          <Dropdown.Item href="javascript:void(0)">Z - A Order</Dropdown.Item>
                                          <Dropdown.Item href="javascript:void(0)">% Off - Hight To
                                                        Low</Dropdown.Item>
                                        </Dropdown.Menu>
                                       </Dropdown>
                                        {/* <div className="dropdown">
                                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown">
                                                <span>Most Popular</span> <i className="fa-solid fa-angle-down"></i>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <a className="dropdown-item" id="pop" href="javascript:void(0)">Popularity</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" id="low" href="javascript:void(0)">Low - High
                                                        Price</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" id="high" href="javascript:void(0)">High - Low
                                                        Price</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" id="rating" href="javascript:void(0)">Average
                                                        Rating</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" id="aToz" href="javascript:void(0)">A - Z Order</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" id="zToa" href="javascript:void(0)">Z - A Order</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" id="off" href="javascript:void(0)">% Off - Hight To
                                                        Low</a>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </div>


                                </div>
                            </div>

                            <div className="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                                {product.map((product)=>{
                                    return(
                                        <div key={product.id}><ProductBox  image={product.image} name={product.name} productMRF={product.productMRF} productPrice={product.productPrice} />
                                        {/* <ProductBox productName={product.productName} productMRF={product.productMRF} productPrice={product.productPrice} /> */}
                                        </div>
                                        
                                        
                                    )
                                })}
                            </div>

                            <nav className="custome-pagination">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="javascript:void(0)" tabindex="-1" aria-disabled="true">
                                            <i className="fa-solid fa-angles-left"></i>
                                        </a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="javascript:void(0)">1</a>
                                    </li>
                                    <li className="page-item" aria-current="page">
                                        <a className="page-link" href="javascript:void(0)">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="javascript:void(0)">3</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="javascript:void(0)">
                                            <i className="fa-solid fa-angles-right"></i>
                                        </a>
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