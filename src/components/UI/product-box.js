import React from 'react';
import ProductImg1 from '../../Photos/media/1.08561f8e.jpg'
import {FaStar} from 'react-icons/fa';

export default function ProductBox({productName, productPrice, productMRF}) {
    return (
        <div className="product-box-4">
            <div className="product-image">
                <div className="label-flex">
                    <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                    <i class="fa-regular fa-heart"></i>
                    </button>
                </div>

                <a href="./product-detail">
                    <img src={ProductImg1} className="img-fluid" alt="" />
                </a>

                {/* <ul className="option">
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Quick View">
                        <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#view">
                        <AiFillApple icon="eye" />
                        </a>
                    </li>
                    <li data-bs-toggle="tooltip" data-bs-placement="top" title="Compare">
                        <a href="compare.html">
                            <AiFillApple icon="repeat" />
                        </a>
                    </li>
                </ul> */}
            </div>

            <div className="product-detail">
                <ul className="rating">
                    <li color='#ffb321'>
                        <FaStar icon="star" className="feather fill" fill={'#ffb321'} />
                    </li>
                    <li color='#ffb321'>
                        <FaStar icon="star" className="feather fill" fill={'#ffb321'} />
                    </li>
                    <li color='#ffb321'>
                        <FaStar icon="star" className="feather fill" fill={'#ffb321'} />
                    </li>
                    <li color='#ffb321'>
                        <FaStar icon="star" className="feather fill" fill={'#ffb321'} />
                    </li>
                    <li>
                        <FaStar icon="star" className="feather " />
                    </li>
                </ul>
                <a href="./product-detail">
                    <h5 className="name">{productName}</h5>
                </a>
                <h5 className="price theme-color">{"₹"+productPrice}<del>{"₹"+productMRF}</del></h5>
                <div className="price-qty">
                    <div className="counter-number">
                        <div className="counter">
                            <div className="qty-left-minus" data-type="minus" data-field="">
                                <i class="fa-regular fa-minus"></i>
                            </div>
                           <input className="form-control input-number qty-input" type="text"
                               name="quantity" value="0" />
                            <div className="qty-right-plus" data-type="plus" data-field="">
                                <i class="fa-regular fa-plus"></i>
                            </div>
                        </div>
                    </div>

                    <button className="buy-button buy-button-2 btn btn-cart">
                    <i class="fa-regular fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
