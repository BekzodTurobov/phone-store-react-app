import React, { useContext, useState } from "react";
import Form from "./Form";
import classes from "./PhoneItems.module.css";
import CartContext from "../store/cart-context";
import RatingStars from "./RatingStars";
import ImagePreview from "./ImagePreview";

function PhoneItems(props) {
  const cartCtx = useContext(CartContext);
  const [showImg, setShowImg] = useState(false);

  const showImgHandler = () => {
    setShowImg(true);
  };

  const hideImgHandler = () => {
    setShowImg(false);
  };

  const imgsArr = props.images.map((img, i) => {
    const imgsObj = {};
    imgsObj.value = img;
    imgsObj.id = i;
    return imgsObj;
  });

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <ul className={classes["main-items--content"]}>
      <li>{props.id}</li>
      <li>
        <span>{props.brand}</span>
        <span>{props.name}</span>
        <span>
          <RatingStars rating={props.rating} />
        </span>
      </li>
      <li>
        {props.description}
        <span onClick={showImgHandler} className={classes.seeArrow}>
          see photos &rarr;
        </span>
        {showImg && (
          <ImagePreview
            onHideImgHandler={hideImgHandler}
            showImg={showImg}
            imgsArr={imgsArr}
          />
        )}
      </li>
      <li>${props.price}</li>
      <li>{props.discountPercentage}%</li>
      <li>
        <Form id={props.id} onAddToCart={addToCartHandler} />
      </li>
    </ul>
  );
}

export default PhoneItems;
