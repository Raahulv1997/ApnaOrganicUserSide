import React from "react";
//import ProductImg1 from '../../Photos/media/mini-belle-pepper-mix.jpg'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "sweetalert/dist/sweetalert.css";

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
  wishlistt,
  wishlistid,
  clickProduct,
  AddToWishList,
  AddToCart,
  allimages,
  cart,
}) => {
  const useridd = localStorage.getItem("userid");
  const token = localStorage.getItem("token");

  let [count, setCount] = useState(1);
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const func = (e) => {};

  let ratingbox = [1, 2, 3, 4, 5];
  let ratingg = Number(rating);
  // sweetalert
  const closeProductAlert = () => {
    setAlert(false);
  };

  // end sweetalert
  return (
    <div className="product-box-4 p-0 mt-3 product_box overflow-hidden">
      <div
        className="product-image"
        style={{
          backgroundImage: `url(${
            allimages
              ? allimages
              : "https://t3.ftcdn.net/jpg/05/37/73/58/360_F_537735846_kufBp10E8L4iV7OLw1Kn3LpeNnOIWbvf.jpg"
          })`,
        }}
      >
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
            {wishlistt > 0 ? (
              <i
                className="fa-regular fa-heart"
                style={{ color: "red" }}
                onClick={() => AddToWishList(id, wishlistt, wishlistid)}
              ></i>
            ) : (
              <i
                className="fa-regular fa-heart"
                style={{ color: "" }}
                onClick={() => AddToWishList(id, wishlistt, wishlistid)}
              ></i>
            )}
          </button>
        </div>

        {/* {image==""|| image==null|| image==undefined? */}
        <a onClick={() => clickProduct(productid, id)}>
          {/* <img
            src={
              allimages
                ? allimages
                : "https://t3.ftcdn.net/jpg/05/37/73/58/360_F_537735846_kufBp10E8L4iV7OLw1Kn3LpeNnOIWbvf.jpg"
            }
            className="mt-5 "
            alt=""
          /> */}
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
          {"₹" + saleprice.toFixed(2)}{" "}
          <del className="text-muted small">{"₹" + productMRF.toFixed(2)}</del>
        </h5>
        <div className="price-qty d-flex justify-content-between m-0">
          <div className="counter-number d-md-block d-none">
            <div className="counter">
              <div
                className="qty-left-minus"
                onClick={() =>
                  count === 1 ? setCount(count) : setCount(count - 1)
                }
                data-type="minus"
                data-field=""
              >
                <i className="fa-regular fa-minus"></i>
              </div>
              <input
                className="form-control input-number qty-input"
                type="text"
                name="quantity"
                value={count}
                min={1}
                onChange={func}
              />
              <div
                className="qty-right-plus"
                onClick={() => setCount(count + 1)}
                data-type="plus"
                data-field=""
              >
                <i className="fa-regular fa-plus"></i>
              </div>
            </div>
          </div>
          {cart === null || token === "null" || !token ? (
            <>
              <button
                className="buy-button buy-button-2 btn btn-cart"
                onClick={() =>
                  AddToCart(id, saleprice, productMRF, wishlistid, count)
                }
              >
                <i className="fa-regular fa-cart-shopping"></i>
              </button>
            </>
          ) : (
            <button
              className="btn text-light btn-warning"
              // onClick={() => setAlert(true)}
              onClick={() => navigate("/cart")}
            >
              {"Buy"}
            </button>
          )}
        </div>
      </div>
      {/* <SweetAlert
        show={alert}
        title="Already in Cart"
        // text=" Order Added"
        onConfirm={closeProductAlert}
      /> */}
    </div>
  );
};
export default ProductBox;
