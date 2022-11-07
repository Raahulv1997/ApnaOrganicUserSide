import React from 'react';
//import ProductImg1 from '../../Photos/media/mini-belle-pepper-mix.jpg'
import {FaStar} from 'react-icons/fa';
import  {useState} from 'react';


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
      const func =()=>{
        
      }
    return (
        <div className="product-box-4 mt-2">
            <div className="product-image">
                <div className="label-flex">
                    <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                    <i className="fa-regular fa-heart"></i>
                    </button>
                </div>

                <a href="./product-detail">
                    <img src={image} className="img-fluid" alt="" />
                </a>

              </div>

            <div className="product-detail">
                <ul className="rating p-0">
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
                    <div className="counter-number d-md-block d-none">
                        <div className="counter">
                            <div className="qty-left-minus" onClick={decrementCount}  data-type="minus" data-field="">
                                <i className="fa-regular fa-minus"></i>
                            </div>
                            {/* <div>{count}</div> */}
                            <input className="form-control input-number qty-input" type="text"
                               name="quantity" value={count} onChange={func}/>
                            <div className="qty-right-plus" onClick={incrementCount}  data-type="plus" data-field="">
                                <i className="fa-regular fa-plus"></i>
                            </div>
                        </div>
                    </div> 

                    <button  className="buy-button buy-button-2 btn btn-cart">
                    <i className="fa-regular fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
export {AddCart};
export default ProductBox;
