import React from "react";
import CartIcon from "./CartIcon";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <div className={classes["nav"]}>
      <h1>Buy phones</h1>
      <button onClick={props.onShow} className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </div>
  );
}

export default Header;
