import React from 'react';
//import ProductImg1 from '../../Photos/media/mini-belle-pepper-mix.jpg'
import {FaStar} from 'react-icons/fa';
import  {useState} from 'react';
import { useNavigate } from "react-router-dom";

function AddCart(props){


}
function ProductBox({name,image,productPrice, productMRF}) {
    let [count, setCount] = useState(0);
    function incrementCount() {
        count = count + 1;
        setCount(count);
      }
      function decrementCount() {
        count = count - 1;
        setCount(count);
      }
    return (
        <div className="product-box-4">
            <div className="product-image">
                <div className="label-flex">
                    <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                    <i className="fa-regular fa-heart"></i>
                    </button>
                </div>

                <a href="./product-detail">
                    <img src={image} className="img-fluid" alt="" />
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
                <ul className="rating ">
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
                    <h5 className="name">{name}</h5>
                </a>
                <h5 className="price theme-color">{"₹"+productPrice}<del>{"₹"+productMRF}</del></h5>
                <div className="price-qty">
                    <div className="counter-number d-md-block d-sm-none">
                        <div className="counter">
                            <div className="qty-left-minus" onClick={decrementCount}  data-type="minus" data-field="">
                                <i className="fa-regular fa-minus"></i>
                            </div>
                            {/* <div>{count}</div> */}
                            <input className="form-control input-number qty-input" type="text"
                               name="quantity" value={count} />
                            <div className="qty-right-plus" onClick={incrementCount}  data-type="plus" data-field="">
                                <i className="fa-regular fa-plus"></i>
                            </div>
                        </div>
                    </div> 

                    <button onClick={""} className="buy-button buy-button-2 btn btn-cart">
                    <i className="fa-regular fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
export {AddCart};
export default ProductBox;
