import React from 'react';
//import ProductImg1 from '../../Photos/media/mini-belle-pepper-mix.jpg'
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';


function AddCart(props) {


}
function ProductBox({ name, image, productPrice, productMRF, seotag, discount, specialOffer }) {
    let [count, setCount] = useState(0);
    function incrementCount() {
        count = count + 1;
        setCount(count);
    }
    const decrementCount = () => {
        if (count > 0) {
            setCount(count => count - 1);
        }
    };

    const func = () => {

    }
    return (
        <div className="product-box-3 p-0 mt-3 product_box overflow-hidden">
            <div className="product-image">
                <div className='ribbon_div'>
                    {specialOffer==0|| specialOffer==''?null:
                    <span className='special_offer mb-1'>{specialOffer}</span>
                    }
                    {discount==0|| discount==''?null:
                    <span className='discount_ribbon mb-1'>{discount}</span>
                    }
                </div>


                <div className="label-flex">
                    <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>

                <a className='product_image_div' href="./product-detail">
                    <img className='product_image img-fluid' src={'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11697268/2020/6/16/07c21bd2-f951-4e06-858d-2430ef5ea2861592297754829-Roadster-Women-Tops-4141592297752797-1.jpg'} alt={seotag} />
                </a>

            </div>

            <div className="product-detail px-3 py-2 d-flex flex-column overflow-hidden rounded">
                <ul className="rating p-0 m-0 mb-2" >
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
                <a className='m-0 mb-2' href="./product-detail">
                    <h5 className="name m-0">{name}</h5>
                </a>
                <h5 className="price theme-color m-0 mb-2">{"₹" + productPrice} <del className='text-muted small'>{"₹" + productMRF}</del></h5>
                <div className="price-qty d-flex justify-content-between m-0">
                    <div className="counter-number d-md-block d-none">
                        <div className="counter">
                            <div className="qty-left-minus" onClick={decrementCount} data-type="minus" data-field="">
                                <i className="fa-regular fa-minus"></i>
                            </div>
                            {/* <div>{count}</div> */}
                            <input className="form-control input-number qty-input" type="text"
                                name="quantity" value={count} onChange={func} />
                            <div className="qty-right-plus" onClick={incrementCount} data-type="plus" data-field="">
                                <i className="fa-regular fa-plus"></i>
                            </div>
                        </div>
                    </div>

                    <button className="btn btn-sm cart-button theme-bg-color text-white">
                        <i className="fa-regular fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
export { AddCart };
export default ProductBox;
