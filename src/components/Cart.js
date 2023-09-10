import React from "react";
import Modal from "./Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  return (
    <Modal onClose={props.onClose}>
      <div>
        <CartItem />
        <div className={classes.total}>
          <span>Total amount</span>
          <span>$39.99</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["btn-alt"]} onClick={props.onClose}>
            Close
          </button>
          <button className={classes["btn"]}>Order</button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
