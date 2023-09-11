import React, { useContext } from "react";
import Form from "./Form";
import classes from "./PhoneItems.module.css";
import CartContext from "../store/cart-context";
import RatingStars from "./RatingStars";

function PhoneItems(props) {
  const cartCtx = useContext(CartContext);

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
      <li>{props.description}</li>
      <li>${props.price}</li>
      <li>{props.discountPercentage}%</li>
      <li>
        <Form id={props.id} onAddToCart={addToCartHandler} />
      </li>
    </ul>
  );
}

export default PhoneItems;
