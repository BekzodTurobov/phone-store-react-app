import React, { useContext } from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <div>
        <CartItem />
        <div className={classes.total}>
          <span>Total amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["btn-alt"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={classes["btn"]}>Order</button>}
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
