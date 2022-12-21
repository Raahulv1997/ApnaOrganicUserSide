import React from "react";
//import ProductImg1 from '../../Photos/media/mini-belle-pepper-mix.jpg'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// function AddCart(props){
// }
let wlist;

const ProductBox = ({
  id,
  name,
  image,
  productPrice,
  productMRF,
  productid,
  special_offer,
  discount,
  producttype,
  brand,
  rating,
  category,
  saleprice,
}) => {
  const useridd = localStorage.getItem("userid");
  const [apicall, setapicall] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [wishid, setwishid] = useState('');
  const navigate = useNavigate();
  const [wlistData, setWlistData] = useState("");
  const [data, setData] = useState([]);
  const[wishlist,setWishList]=useState([]);
  const[addcartid,setaddcartid]=useState('');

  let [count, setCount] = useState(0);
  function incrementCount() {
    count = count + 1;
    setCount(count);
    setapicall(true);
  }
  const decrementCount = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };
  const func = () => {};
  const AddToCart = () => {
    if(addcartid !== id){
      axios
      .post(`${process.env.REACT_APP_BASEURL}/add_to_cart`, {
        user_id: `${useridd}`,
        product_view_id: `${id}`,
        price: `${saleprice}`,
        discount: `${productMRF}`,
        quantity: count,
        is_active: 1,
      })
      .then((response) => {
        let data = response.data;
        setaddcartid(id)
        setData(data);
        setapicall(true);
      });
  };
    }
   
  wlist = window.location.pathname;
  const AddToWishList = () => {
    if (wlist === "/" || wlist === "/shop") {
      // console.log("ADD______WISHLIST");
      axios
        .post(`${process.env.REACT_APP_BASEURL}/add_product_wishlist`, {
          user_id: `${useridd}`,
          product_view_id: `${id}`,
        })
        .then((response) => {
          let data = response.data;
          setData(response.data);
          setWlistData("remove");
          setapicall(true);
          setIsActive(true);
        });
    } else if (wlist === "/wishlist") {
      axios
        .put(`${process.env.REACT_APP_BASEURL}/remove_product_from_wishlist`, {
          id: `${id}`,
          user_id: `${useridd}`,
        })
        .then((response) => {
          let data = response.data;
          console.log();
          setData(response.data);
          setWlistData("add");
          setapicall(true);
          setIsActive(false);
        });
    }
  };
 var wishlistdata = localStorage.getItem("wishlist")
 console.log("============"+wishlistdata[wishlistdata.search("Myproduct6")]);
  useEffect(() => {
    try {
      axios
        .get(
          `${process.env.REACT_APP_BASEURL}/apna_organic_home?page=0&per_page=4`,
          {
            product_search: {
              search: "",
              colors: "",
              size: "",
              category: "",
              product_type: "",
            },
          }
        )
        .then((response) => {
          let data = response.data;
          setData(data.results);
          // setProductId(data);
          //console.log("PRODUCT============"+JSON.stringify(data))
          setapicall(false);
        });
    } catch (err) {}
  }, [apicall]);
  const clickProduct = (productid) => {
    localStorage.setItem("proid", productid);
    navigate("/product-detail");
  };
  let ratingbox = [1, 2, 3, 4, 5];
  let ratingg = Number(rating);
  return (
    <div className="product-box-4 p-0 mt-3 product_box overflow-hidden">
      <div className="product-image">
        <div className="ribbon_div">
          {special_offer == 0 || special_offer == "" ? null : (
            <span className="special_offer mb-1">{special_offer}%</span>
          )}
          {discount == 0 || discount == "" ? null : (
            <span className="discount_ribbon mb-1">{discount}%</span>
          )}
        </div>
        <div className="label-flex">
          <button className="btn p-0 wishlist btn-wishlist notifi-wishlist">
            <i
              className="fa-regular fa-heart"
              style={{ color: isActive?   "red" :""  }}
              onClick={AddToWishList}
            ></i>
           
          </button>
        </div>
        <a onClick={() => clickProduct(productid)}>
          <img
            src={
              "https://www.shutterstock.com/image-photo/man-hands-holding-global-network-260nw-1801568002.jpg"
            }
            className="mt-5 "
            alt=""
          />
        </a>
      </div>

      <div className="product-detail px-3 py-2 d-flex flex-column overflow-hidden rounded">
        <ul className="rating p-0 m-0 mb-2">
          {
            // !ratingg? null :
            (ratingbox || []).map((rat, i) => {
              return ratingg - rat >= 0 ? (
                <li color="#ffb321" key={i}>
                  <FaStar
                    icon="star"
                    className="feather fill"
                    fill={"#ffb321"}
                  />
                </li>
              ) : ratingg - rat < 0 && ratingg - rat > -1 ? (
                <li color="#ffb321">
                  <FaStarHalfAlt
                    icon="star"
                    className="feather"
                    fill={"#ffb321"}
                  />
                </li>
              ) : ratingg - rat <= -1 ? (
                <li color="#ffb321">
                  <FaRegStar
                    icon="star"
                    className="feather "
                    fill={"#ffb321"}
                  />
                </li>
              ) : null;
            })
          }
        </ul>
        <a className="m-0 mb-2" onClick={() => clickProduct(productid)}>
          <h5 className="name m-0">{name}</h5>
          <h5 className="name m-0">{category}</h5>
          <h5 className="name m-0">{brand}</h5>
        </a>
        <h5 className="price theme-color m-0 mb-2">
          {"₹" + saleprice}{" "}
          <del className="text-muted small">{"₹" + productMRF}</del>
        </h5>
        <div className="price-qty d-flex justify-content-between m-0">
          <div className="counter-number d-md-block d-none">
            <div className="counter">
              <div
                className="qty-left-minus"
                onClick={decrementCount}
                data-type="minus"
                data-field=""
              >
                <i className="fa-regular fa-minus"></i>
              </div>
              {/* <div>{count}</div> */}
              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                value={count}
                onChange={func}
              />
              <div
                className="qty-right-plus"
                onClick={incrementCount}
                data-type="plus"
                data-field=""
              >
                <i className="fa-regular fa-plus"></i>
              </div>
            </div>
          </div>

          <button
            className="buy-button buy-button-2 btn btn-cart"
            onClick={() => AddToCart()}
          >
            <i className="fa-regular fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductBox;
