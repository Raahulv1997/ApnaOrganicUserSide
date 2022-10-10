import React, { Fragment } from 'react'
import ProductBox from '../UI/product-box'
import Footer from '../part/footer'
import Header from '../part/header'
import Breadcumb from '../UI/beadcumb'
import {FaStar} from 'react-icons/fa';
import '../../CSS/style.css'
const Shop=()=> {
    return (
        <Fragment>
            <Header />
            <Breadcumb pageName={'Shop'} pageTitle={'Page Title'} />
            {/* <!-- Shop Section Start --> */}
            <section class="section-b-space shop-section">
                <div class="container-fluid-lg">
                    <div class="row">
                        <div class="col-xxl-3 col-lg-4 wow fadeInUp">
                            <div class="left-box">
                                <div class="shop-left-sidebar">
                                    <div class="back-button">
                                        <h3><i class="fa-solid fa-arrow-left"></i> Back</h3>
                                    </div>

                                    <div class="filter-category">
                                        <div class="filter-title">
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

                                    <div class="accordion custome-accordion" id="accordionExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    <span>Categories</span>
                                                </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse show"
                                                aria-labelledby="panelsStayOpen-headingOne">
                                                <div class="accordion-body">
                                                    <div class="form-floating theme-form-floating-2 search-box">
                                                        <input type="search" class="form-control" id="search"
                                                            placeholder="Search .." />
                                                        <label for="search">Search</label>
                                                    </div>

                                                    <ul class="category-list custom-padding custom-height">
                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox" id="fruit" />
                                                                <label class="form-check-label" for="fruit">
                                                                    <span class="name">Fruits & Vegetables</span>
                                                                    <span class="number">(15)</span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox" id="cake" />
                                                                <label class="form-check-label" for="cake">
                                                                    <span class="name">Bakery, Cake & Dairy</span>
                                                                    <span class="number">(12)</span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                    aria-expanded="false" aria-controls="collapseTwo">
                                                    <span>Food Preference</span>
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" class="accordion-collapse collapse show"
                                                aria-labelledby="panelsStayOpen-headingTwo">
                                                <div class="accordion-body">
                                                    <ul class="category-list custom-padding">
                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox" id="veget" />
                                                                <label class="form-check-label" for="veget">
                                                                    <span class="name">Vegetarian</span>
                                                                    <span class="number">(08)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox" id="non" />
                                                                <label class="form-check-label" for="non">
                                                                    <span class="name">Non Vegetarian</span>
                                                                    <span class="number">(09)</span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                    aria-expanded="false" aria-controls="collapseThree">
                                                    <span>Price</span>
                                                </button>
                                            </h2>
                                            <div class="row">
                                            <input type="text" class="js-range-slider" value="" placeholder='from' />
                                            <input type="text" class="js-range-slider" value="" placeholder='to ' />
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseSix"
                                                    aria-expanded="false" aria-controls="collapseSix">
                                                    <span>Rating</span>
                                                </button>
                                            </h2>
                                            <div id="collapseSix" class="accordion-collapse collapse show"
                                                aria-labelledby="panelsStayOpen-headingSix">
                                                <div class="accordion-body">
                                                    <ul class="category-list custom-padding">
                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox" />
                                                                <div class="form-check-label">
                                                                <ul class="rating">
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li>
                                                                    <FaStar class="feather fill" fill={'#ffb321'} />

                                                                    </li>
                                                                </ul>
                                                                    <span class="text-content">(5 Star)</span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox" />
                                                                <div class="form-check-label">
                                                                <ul class="rating">
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li>
                                                                        <FaStar class="feather " />
                                                                    </li>
                                                                </ul>
                                                                    <span class="text-content">(4 Star)</span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox" />
                                                                <div class="form-check-label">
                                                                <ul class="rating">
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                    <FaStar class="feather " />
                                                                    </li>
                                                                    <li>
                                                                        <FaStar class="feather " />
                                                                    </li>
                                                                </ul>
                                                                    <span class="text-content">(3 Star)</span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox" />
                                                                <div class="form-check-label">
                                                                <ul class="rating">
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather " />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather " />
                                                                    </li>
                                                                    <li>
                                                                        <FaStar class="feather " />
                                                                    </li>
                                                                </ul>
                                                                    <span class="text-content">(2 Star)</span>
                                                                </div>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox" />
                                                                <div class="form-check-label">
                                                                <ul class="rating">
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather fill" fill={'#ffb321'} />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather " />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather " />
                                                                    </li>
                                                                    <li color='#ffb321'>
                                                                        <FaStar class="feather " />
                                                                    </li>
                                                                    <li>
                                                                        <FaStar class="feather " />
                                                                    </li>
                                                                </ul>
                                                                    <span class="text-content">(1 Star)</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                    aria-expanded="false" aria-controls="collapseFour">
                                                    <span>Discount</span>
                                                </button>
                                            </h2>
                                            <div id="collapseFour" class="accordion-collapse collapse show"
                                                aria-labelledby="panelsStayOpen-headingFour">
                                                <div class="accordion-body">
                                                    <ul class="category-list custom-padding">
                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault" />
                                                                <label class="form-check-label" for="flexCheckDefault">
                                                                    <span class="name">upto 5%</span>
                                                                    <span class="number">(06)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault1" />
                                                                <label class="form-check-label" for="flexCheckDefault1">
                                                                    <span class="name">5% - 10%</span>
                                                                    <span class="number">(08)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault2" />
                                                                <label class="form-check-label" for="flexCheckDefault2">
                                                                    <span class="name">10% - 15%</span>
                                                                    <span class="number">(10)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault3" />
                                                                <label class="form-check-label" for="flexCheckDefault3">
                                                                    <span class="name">15% - 25%</span>
                                                                    <span class="number">(14)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault4" />
                                                                <label class="form-check-label" for="flexCheckDefault4">
                                                                    <span class="name">More than 25%</span>
                                                                    <span class="number">(13)</span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                    aria-expanded="false" aria-controls="collapseFive">
                                                    <span>Pack Size</span>
                                                </button>
                                            </h2>
                                            <div id="collapseFive" class="accordion-collapse collapse show"
                                                aria-labelledby="panelsStayOpen-headingFive">
                                                <div class="accordion-body">
                                                    <ul class="category-list custom-padding custom-height">
                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault5" />
                                                                <label class="form-check-label" for="flexCheckDefault5">
                                                                    <span class="name">400 to 500 g</span>
                                                                    <span class="number">(05)</span>
                                                                </label>
                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="form-check ps-0 m-0 category-list-box">
                                                                <input class="checkbox_animated" type="checkbox"
                                                                    id="flexCheckDefault6" />
                                                                <label class="form-check-label" for="flexCheckDefault6">
                                                                    <span class="name">500 to 700 g</span>
                                                                    <span class="number">(02)</span>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xxl-9 col-lg-8 wow fadeInUp">
                            <div class="show-button">
                                <div class="filter-button-group mt-0">
                                    <div class="filter-button d-inline-block d-lg-none">
                                        <a><i class="fa-solid fa-filter"></i> Filter Menu</a>
                                    </div>
                                </div>

                                <div class="top-filter-menu">
                                    <div class="category-dropdown">
                                        <h5 class="text-content">Sort By :</h5>
                                        <div class="dropdown">
                                            <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown">
                                                <span>Most Popular</span> <i class="fa-solid fa-angle-down"></i>
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <a class="dropdown-item" id="pop" href="javascript:void(0)">Popularity</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" id="low" href="javascript:void(0)">Low - High
                                                        Price</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" id="high" href="javascript:void(0)">High - Low
                                                        Price</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" id="rating" href="javascript:void(0)">Average
                                                        Rating</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" id="aToz" href="javascript:void(0)">A - Z Order</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" id="zToa" href="javascript:void(0)">Z - A Order</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" id="off" href="javascript:void(0)">% Off - Hight To
                                                        Low</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="row g-sm-4 g-3 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-2 row-cols-md-3 row-cols-2 product-list-section">
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                                <div><ProductBox productName={'Product name here'} productMRF={'123'} productPrice={'112'} /></div>
                            </div>

                            <nav class="custome-pagination">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="javascript:void(0)" tabindex="-1" aria-disabled="true">
                                            <i class="fa-solid fa-angles-left"></i>
                                        </a>
                                    </li>
                                    <li class="page-item active">
                                        <a class="page-link" href="javascript:void(0)">1</a>
                                    </li>
                                    <li class="page-item" aria-current="page">
                                        <a class="page-link" href="javascript:void(0)">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:void(0)">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="javascript:void(0)">
                                            <i class="fa-solid fa-angles-right"></i>
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
export default Shop;