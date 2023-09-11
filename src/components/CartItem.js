import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../store/cart-context";

function CartItem(props) {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id} className={classes["cart-item"]}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>${item.price}</span>
              <span className={classes.amount}>x {item.amount}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={cartItemRemoveHandler.bind(null, item.id)}>
              -
            </button>
            <button onClick={cartItemAddHandler.bind(null, item)}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CartItem;
