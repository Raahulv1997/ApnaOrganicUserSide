import React, { Fragment } from 'react';
import Footer from '../common/footer';
import Header from '../common/header';
import Breadcumb from '../common/beadcumb';
import blog1 from '../../Photos/blog/1.jpg';
import blog2 from '../../Photos/blog/2.jpg';
import blog3 from '../../Photos/blog/3.jpg';
import blog4 from '../../Photos/blog/4.jpg';
import blog5 from '../../Photos/blog/5.jpg';
import veg23 from '../../Photos/vegetable/product/23.png';
import veg24 from '../../Photos/vegetable/product/24.png';
import veg26 from '../../Photos/vegetable/product/26.png';


const BlogList = () => {
    return (
        <Fragment>
        <Header />
        <Breadcumb pageName={'Blog List'} pageTitle={'Page Title'} />
  {/* <!-- Blog Section Start --> */}
  <section class="blog-section section-b-space">
      <div class="container-fluid-lg">
        <div class="row g-4">
          <div class="col-xxl-9 col-xl-8 col-lg-7 order-lg-2">
            <div class="row g-4">
              <div class="col-12">
                <div class="blog-box blog-list wow fadeInUp">
                  <div class="blog-image">
                    <img
                      src={blog1}
                      class="lazyload"
                      alt=""
                    />
                  </div>

                  <div class="blog-contain blog-contain-2">
                    <div class="blog-label">
                      <span class="time"
                        ><i data-feather="clock"></i>
                        <span>25 Feg, 2022</span></span
                      >
                      <span class="super"
                        ><i data-feather="user"></i>
                        <span>Mark J. Speight</span></span
                      >
                    </div>
                    <a href="blog-detail.html">
                      <h3>one pot creamy mediterranean chicken pasta cream.</h3>
                    </a>
                    <p>
                      Monterey jack cheese slices cream cheese cream cheese hard
                      cheese roquefort emmental lancashire. Who moved my cheese
                      dolcelatte st. agur blue cheese fromage mozzarella say
                      cheese mascarpone blue castello.
                    </p>
                    <button
                      onclick="location.href = 'blog-detail.html';"
                      class="blog-button"
                    >
                      Read More <i class="fa-solid fa-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div
                  class="blog-box blog-list wow fadeInUp"
                  data-wow-delay="0.05s"
                >
                  <div class="blog-image">
                    <img
                      src={blog2}
                      class="lazyload"
                      alt=""
                    />
                  </div>

                  <div class="blog-contain blog-contain-2">
                    <div class="blog-label">
                      <span class="time"
                        ><i data-feather="clock"></i>
                        <span>25 Feg, 2022</span></span
                      >
                      <span class="super"
                        ><i data-feather="user"></i>
                        <span>rebeus hagrid</span></span
                      >
                    </div>
                    <a href="blog-detail.html">
                      <h3>Crispy Frozen Vegetable is the on the Tempura.</h3>
                    </a>
                    <p>
                      Manchego cauliflower cheese st. agur blue cheese red
                      leicester monterey jack cheesecake the big cheese edam.
                      Gouda monterey jack roquefort hard cheese feta croque
                      monsieur cheeseburger manchego.
                    </p>
                    <button
                      onclick="location.href = 'blog-detail.html';"
                      class="blog-button"
                    >
                      Read More <i class="fa-solid fa-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div
                  class="blog-box blog-list wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="blog-image">
                    <a href="blog-detail.html">
                      <img
                        src={blog3}
                        class="lazyload"
                        alt=""
                      />
                    </a>
                    <label
                      ><i class="fa-solid fa-bolt-lightning"></i> popular</label
                    >
                  </div>

                  <div class="blog-contain blog-contain-2">
                    <div class="blog-label">
                      <span class="time"
                        ><i data-feather="clock"></i>
                        <span>25 Feg, 2022</span></span
                      >
                      <span class="super"
                        ><i data-feather="user"></i>
                        <span>Chris C. Hall</span></span
                      >
                    </div>
                    <a href="blog-detail.html">
                      <h3>
                        How to start regrowing green onions and other
                        vegetables.
                      </h3>
                    </a>
                    <p>
                      Cheese triangles say cheese cheese and biscuits dolcelatte
                      jarlsberg cream cheese taleggio fromage frais. Who moved
                      my cheese cottage cheese cheese on toast rubber cheese
                      melted cheese ricotta.
                    </p>
                    <button
                      onclick="location.href = 'blog-detail.html';"
                      class="blog-button"
                    >
                      Read More <i class="fa-solid fa-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div
                  class="blog-box blog-list wow fadeInUp"
                  data-wow-delay="0.15s"
                >
                  <a href="blog-detail.html" class="blog-image">
                    <img
                      src={blog4}
                      class="lazyload"
                      alt=""
                    />
                  </a>

                  <div class="blog-contain blog-contain-2">
                    <div class="blog-label">
                      <span class="time"
                        ><i data-feather="clock"></i>
                        <span>25 Feg, 2022</span></span
                      >
                      <span class="super"
                        ><i data-feather="user"></i>
                        <span>James M. Martin</span></span
                      >
                    </div>
                    <a href="blog-detail.html">
                      <h3>Starting a vegetable garden: the basics.</h3>
                    </a>
                    <p>
                      Jarlsberg swiss edam. Goat everyone loves cheese strings
                      ricotta cheese and wine pepper jack dolcelatte halloumi.
                      Cream cheese queso croque monsieur camembert de normandie
                      cheddar cheesecake cheese slices croque monsieur.
                    </p>
                    <button
                      onclick="location.href = 'blog-detail.html';"
                      class="blog-button"
                    >
                      Read More <i class="fa-solid fa-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div
                  class="blog-box blog-list wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <a href="blog-detail.html" class="blog-image">
                    <img
                      src={blog5}
                      class="lazyload"
                      alt=""
                    />
                  </a>

                  <div class="blog-contain blog-contain-2">
                    <div class="blog-label">
                      <span class="time"
                        ><i data-feather="clock"></i>
                        <span>25 Feg, 2022</span></span
                      >
                      <span class="super"
                        ><i data-feather="user"></i>
                        <span>Cecil M. Levis</span></span
                      >
                    </div>
                    <a href="blog-detail.html">
                      <h3>
                        Adapt this simple pasta salad to whatever vegetable.
                      </h3>
                    </a>
                    <p>
                      Cream cheese cheese slices chalk and cheese cottage cheese
                      cheddar port-salut everyone loves dolcelatte. Cream cheese
                      camembert de normandie cow chalk and cheese brie gouda
                      cottage cheese cheesy grin.
                    </p>
                    <button
                      onclick="location.href = 'blog-detail.html';"
                      class="blog-button"
                    >
                      Read More <i class="fa-solid fa-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div
                  class="blog-box blog-list wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <a href="blog-detail.html" class="blog-image">
                    <img
                      src={blog1}
                      class="lazyload"
                      alt=""
                    />
                  </a>

                  <div class="blog-contain blog-contain-2">
                    <div class="blog-label">
                      <span class="time"
                        ><i data-feather="clock"></i>
                        <span>25 Feg, 2022</span></span
                      >
                      <span class="super"
                        ><i data-feather="user"></i>
                        <span>Mary R. Hernandez</span></span
                      >
                    </div>
                    <a href="blog-detail.html">
                      <h3>
                        With chefs idle and vegetables rotting, China's
                        virus-hit.
                      </h3>
                    </a>
                    <p>
                      Monterey jack chalk and cheese cheese and biscuits cream
                      cheese fondue say cheese stilton halloumi. Gouda everyone
                      loves chalk and cheese everyone loves stinking bishop
                      manchego stilton.
                    </p>
                    <button
                      onclick="location.href = 'blog-detail.html';"
                      class="blog-button"
                    >
                      Read More <i class="fa-solid fa-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div
                  class="blog-box blog-list wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <a href="blog-detail.html" class="blog-image">
                    <img
                      src={blog2}
                      class="lazyload"
                      alt=""
                    />
                  </a>

                  <div class="blog-contain blog-contain-2">
                    <div class="blog-label">
                      <span class="time"
                        ><i data-feather="clock"></i>
                        <span>25 Feg, 2022</span></span
                      >
                      <span class="super"
                        ><i data-feather="user"></i>
                        <span>Cheryl D. Moser</span></span
                      >
                    </div>
                    <a href="blog-detail.html">
                      <h3>
                        Turn that bowl of pasta into a supercharged veggie
                        vehicle.
                      </h3>
                    </a>
                    <p>
                      The big cheese fondue st. agur blue cheese. Cheese on
                      toast paneer lancashire cheese and biscuits rubber cheese
                      macaroni cheese queso feta. Stinking bishop fromage brie
                      edam cheesy feet smelly cheese fromage frais paneer.
                    </p>
                    <button
                      onclick="location.href = 'blog-detail.html';"
                      class="blog-button"
                    >
                      Read More <i class="fa-solid fa-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div
                  class="blog-box blog-list wow fadeInUp"
                  data-wow-delay="0.35s"
                >
                  <a href="blog-detail.html" class="blog-image">
                    <img
                      src={blog3}
                      alt=""
                      class="lazyload"
                    />
                  </a>

                  <div class="blog-contain blog-contain-2">
                    <div class="blog-label">
                      <span class="time"
                        ><i data-feather="clock"></i>
                        <span>25 Feg, 2022</span></span
                      >
                      <span class="super"
                        ><i data-feather="user"></i>
                        <span>Mina M. Short</span></span
                      >
                    </div>
                    <a href="blog-detail.html">
                      <h3>Health, care and skin on the for your organic.</h3>
                    </a>
                    <p>
                      Cheesy grin brie croque monsieur cheesy grin cottage
                      cheese cheese strings dolcelatte cheeseburger. Cheesy feet
                      queso red leicester fromage frais hard cheese cheeseburger
                      fromage when the cheese comes out everybody's happy.
                    </p>
                    <button
                      onclick="location.href = 'blog-detail.html';"
                      class="blog-button"
                    >
                      Read More <i class="fa-solid fa-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-12">
                <div
                  class="blog-box blog-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <a href="blog-detail.html" class="blog-image">
                    <img
                      src={blog4}
                      alt=""
                      class="lazyload"
                    />
                  </a>

                  <div class="blog-contain blog-contain-2">
                    <div class="blog-label">
                      <span class="time"
                        ><i data-feather="clock"></i>
                        <span>25 Feg, 2022</span></span
                      >
                      <span class="super"
                        ><i data-feather="user"></i>
                        <span>Marie S. Santiago</span></span
                      >
                    </div>
                    <a href="blog-detail.html">
                      <h3>
                        Fresh organicsm, brand, fresh and picnic place awesome.
                      </h3>
                    </a>
                    <p>
                      Macaroni cheese camembert de normandie airedale. Cheese
                      triangles babybel cow blue castello cheddar cheese and
                      biscuits jarlsberg melted cheese. Caerphilly fromage frais
                      ricotta manchego edam boursin edam swiss.
                    </p>
                    <button
                      onclick="location.href = 'blog-detail.html';"
                      class="blog-button"
                    >
                      Read More <i class="fa-solid fa-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <nav class="custome-pagination">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="javascript:void(0)" tabindex="-1">
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

          <div class="col-xxl-3 col-xl-4 col-lg-5 order-lg-1">
            <div class="left-sidebar-box wow fadeInUp">
              <div class="left-search-box">
                <div class="search-box">
                  <input
                    type="search"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Search...."
                  />
                </div>
              </div>


              <div
                class="accordion left-accordion-box"
                id="accordionPanelsStayOpenExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Recent Post
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                  
                    <div class="accordion-body pt-0">
                      <div class="recent-post-box">
                        <div class="recent-box">
                          <a href="blog-detail.html" class="recent-image">
                            <img
                              src={blog1}
                              class="img-fluid lazyload"
                              alt=""
                            />
                          </a>

                          <div class="recent-detail">
                            <a href="blog-detail.html">
                              <h5 class="recent-name">
                                Green onion knife and salad placed
                              </h5>
                            </a>
                            <h6>
                              25 Jan, 2022 <i data-feather="thumbs-up"></i>
                            </h6>
                          </div>
                        </div>

                        <div class="recent-box">
                          <a href="blog-detail.html" class="recent-image">
                            <img
                              src={blog2}
                              class="img-fluid lazyload"
                              alt=""
                            />
                          </a>

                          <div class="recent-detail">
                            <a href="blog-detail.html">
                              <h5 class="recent-name">
                                Health and skin for your organic
                              </h5>
                            </a>
                            <h6>
                              25 Jan, 2022 <i data-feather="thumbs-up"></i>
                            </h6>
                          </div>
                        </div>

                        <div class="recent-box">
                          <a href="blog-detail.html" class="recent-image">
                            <img
                              src={blog3}
                              class="img-fluid lazyload"
                              alt=""
                            />
                          </a>

                          <div class="recent-detail">
                            <a href="blog-detail.html">
                              <h5 class="recent-name">
                                Organics mix masala fresh & soft
                              </h5>
                            </a>
                            <h6>
                              25 Jan, 2022 <i data-feather="thumbs-up"></i>
                            </h6>
                          </div>
                        </div>

                        <div class="recent-box">
                          <a href="blog-detail.html" class="recent-image">
                            <img
                              src={blog4}
                              class="img-fluid lazyload"
                              alt=""
                            />
                          </a>

                          <div class="recent-detail">
                            <a href="blog-detail.html">
                              <h5 class="recent-name">
                                Fresh organics brand and picnic
                              </h5>
                            </a>
                            <h6>
                              25 Jan, 2022 <i data-feather="thumbs-up"></i>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
{/* category dropdown */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Category
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div class="accordion-body p-0">
                      <div class="category-list-box">
                        <ul>
                          <li>
                            <a href="blog-list.html">
                              <div class="category-name">
                                <h5>Latest Recipes</h5>
                                <span>10</span>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="blog-list.html">
                              <div class="category-name">
                                <h5>Diet Food</h5>
                                <span>6</span>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="blog-list.html">
                              <div class="category-name">
                                <h5>Low calorie Items</h5>
                                <span>8</span>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="blog-list.html">
                              <div class="category-name">
                                <h5>Cooking Method</h5>
                                <span>9</span>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="blog-list.html">
                              <div class="category-name">
                                <h5>Dairy Free</h5>
                                <span>12</span>
                              </div>
                            </a>
                          </li>

                          <li>
                            <a href="blog-list.html">
                              <div class="category-name">
                                <h5>Vegetarian Food</h5>
                                <span>10</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      Product Tags
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div class="accordion-body pt-0">
                      <div class="product-tags-box">
                        <ul>
                          <li>
                            <a href="javascript:void(0)">Fruit Cutting</a>
                          </li>

                          <li>
                            <a href="javascript:void(0)">Meat</a>
                          </li>

                          <li>
                            <a href="javascript:void(0)">organic</a>
                          </li>

                          <li>
                            <a href="javascript:void(0)">cake</a>
                          </li>

                          <li>
                            <a href="javascript:void(0)">pick fruit</a>
                          </li>

                          <li>
                            <a href="javascript:void(0)">backery</a>
                          </li>

                          <li>
                            <a href="javascript:void(0)">organix food</a>
                          </li>

                          <li>
                            <a href="javascript:void(0)"
                              >Most Expensive Fruit</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      Trending Products
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    class="accordion-collapse collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingFour"
                  >
                    <div class="accordion-body">
                      <ul class="product-list product-list-2 border-0 p-0">
                        <li>
                          <div class="offer-product">
                            <a
                              href="shop-left-sidebar.html"
                              class="offer-image"
                            >
                              <img
                                src={veg23}
                                class="lazyload"
                                alt=""
                              />
                            </a>

                            <div class="offer-detail">
                              <div>
                                <a href="shop-left-sidebar.html">
                                  <h6 class="name">
                                    Meatigo Premium Goat Curry
                                  </h6>
                                </a>
                                <span>450 G</span>
                                <h6 class="price theme-color">$ 70.00</h6>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li>
                          <div class="offer-product">
                            <a
                              href="shop-left-sidebar.html"
                              class="offer-image">
                              <img
                                src={veg24}
                                class="lazyload"
                                alt=""
                              />
                            </a>

                            <div class="offer-detail">
                              <div>
                                <a href="shop-left-sidebar.html">
                                  <h6 class="name">
                                    Dates Medjoul Premium Imported
                                  </h6>
                                </a>
                                <span>450 G</span>
                                <h6 class="price theme-color">$ 40.00</h6>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li class="mb-0">
                          <div class="offer-product">
                            <a
                              href="shop-left-sidebar.html"
                              class="offer-image"
                            >
                              <img
                                src={veg26}
                                class="lazyload"
                                alt=""
                              />
                            </a>

                            <div class="offer-detail">
                              <div>
                                <a href="shop-left-sidebar.html">
                                  <h6 class="name">
                                    Apple Red Premium Imported
                                  </h6>
                                </a>
                                <span>1 KG</span>
                                <h6 class="price theme-color">$ 80.00</h6>
                              </div>
                            </div>
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
      </div>
    </section>
            {/* <!-- Blog Section End --> */}
  <Footer />
        </Fragment>
    );
}

export default BlogList;
