import React from 'react';
//import ProductImg1 from '../../Photos/media/mini-belle-pepper-mix.jpg'
import {FaStar} from 'react-icons/fa';
import  {useState} from 'react';
import axios from 'axios';
import {useEffect } from 'react';
// function AddCart(props){
// }
const ProductBox=({name,image,productPrice, productMRF,productid})=> {
    const[data,setData]=useState([]);;
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

      const func =()=>{
        
      }
    //   console.log("dataaaaaaaa"+JSON.stringify(productData))
      const AddToCart=()=>{
        axios.post(`http://192.168.29.108:5000/add_to_cart`,{
            user_id:6,
            product_id:`${productid}`,
            price:`${productPrice}`,
            discount:`${productMRF}`,
            quantity:count,
            is_active:1
        })
        .then((response) => {
            let data = response.data;
            console.log("ADD CARTTT-------------------"+JSON.stringify(data))
            setData(data);
          });
      }
    //  
//   const hendalClick=()=>{}
    const AddToWishList= () =>{
            axios
        .post(`http://192.168.29.108:5000/add_product_wishlist`,{
            user_id:6,
            product_id:`${productid}`,
            price:`${productPrice}`,
            discount:`${productMRF}`,

          })
        .then((response) => {
            let data = response.data;
        console.log("wishlistttttt----------   " + JSON.stringify(data));
        setData(response.data);
        //   setapicall(false);
        })
        .catch(function(error) {
          console.log(error);
        });
        
      }
      useEffect(() => {
          try {
            axios
              .post(`http://192.168.29.108:5000/apna_organic_home?page=0&per_page=4`,{
                "product_search":{
                "search":"",
                "colors":"",
                "size":"",
                "category": "",
                "product_type": ""
                }
                })
              .then((response) => {
                let data = response.data;
                setData(data.results.product_id);
                // setProductId(data);
               console.log("PRODUCT============"+JSON.stringify(data))
                // setapicall(false);
              });
          } catch (err) {}
      }
      , []);
    return (
        <div className="product-box-4 mt-2">
            <div className="product-image">
                <div className="label-flex">
                    <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
                    <i className="fa-regular fa-heart" onClick={()=>AddToWishList()}></i>
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
                               name="quantity" value={count} onChange={func} max="10"/>
                            <div className="qty-right-plus" onClick={incrementCount}  data-type="plus" data-field="">
                                <i className="fa-regular fa-plus"></i>
                            </div>
                        </div>
                    </div> 

                    <button  className="buy-button buy-button-2 btn btn-cart" onClick={()=>AddToCart()}>
                    <i className="fa-regular fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
// export {AddCart};
export default ProductBox;
