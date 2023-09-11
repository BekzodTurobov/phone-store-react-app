import React, { useContext } from "react";

import classes from "./MainItems.module.css";
import LoadSpinner from "./LoadSpinner";
import CartContext from "../store/cart-context";
import PhoneItems from "./PhoneItems";

function MainItems(props) {
  const cartCtx = useContext(CartContext);
  return (
    <React.Fragment>
      <div className={classes["main-items"]}>
        <ul className={classes["main-items--content"]}>
          <li>&#8470;</li>
          <li>Title</li>
          <li>Description</li>
          <li>Price</li>
          <li>Discount Percentage</li>
          <li>Add to Cart</li>
        </ul>
        {cartCtx.records.map((item) => (
          <PhoneItems
            id={item.id}
            key={item.id}
            brand={item.brand}
            name={item.title}
            price={item.price}
            rating={item.rating}
            description={item.description}
            discountPercentage={item.discountPercentage}
          />
        ))}
        {cartCtx.error && (
          <p className={classes["error-message"]}>{cartCtx.error}</p>
        )}
        {cartCtx.records.length === 0 && !cartCtx.error && <LoadSpinner />}
      </div>
    </React.Fragment>
  );
}

export default MainItems;
