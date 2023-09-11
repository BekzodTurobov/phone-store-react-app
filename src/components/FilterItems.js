import React, { useState, useContext } from "react";
import classes from "./FilterItems.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import CartContext from "../store/cart-context";

function FilterItems(props) {
  const options = ["rating", "price", "discountPercentage"];
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.dropdown}>
      <div onClick={cartCtx.toggleHandler} className={classes["dropdown-btn"]}>
        Filter by
        <span
          className={`${classes.downIcon} ${
            cartCtx.isActive ? classes.active : ""
          }`}
        >
          <AiFillCaretDown />
        </span>
      </div>
      {cartCtx.isActive && (
        <div className={classes["dropdown-content"]}>
          {options.map((option) => (
            <div
              key={option}
              onClick={(e) => {
                cartCtx.setSelected(option);
                cartCtx.setIsActive(false);
              }}
              className={classes["dropdown-item"]}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterItems;
