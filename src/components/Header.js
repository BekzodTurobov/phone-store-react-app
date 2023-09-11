import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import classes from "./Header.module.css";
import CartContext from "../store/cart-context";

function Header(props) {
  const cartCtx = useContext(CartContext);
  const [btnIsBumped, setBtnIsBumped] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsBumped ? classes.bump : ""}`;

  const timer = useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsBumped(true);
    setTimeout(() => {
      setBtnIsBumped(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <div className={classes["nav"]}>
      <h1>Buy phones</h1>
      <button onClick={props.onShow} className={btnClasses}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </div>
  );
}

export default Header;
