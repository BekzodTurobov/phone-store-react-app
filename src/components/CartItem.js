import React from "react";
import classes from "./CartItem.module.css";

function CartItem(props) {
  const cartItems = [{ id: 1, name: "iPhone XR", amount: 2, price: 12.99 }];

  return (
    <ul className={classes["cart-items"]}>
      {cartItems.map((item) => (
        <li key={item.id} className={classes["cart-item"]}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>${item.price}</span>
              <span className={classes.amount}>x {item.amount}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button>-</button>
            <button>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CartItem;
