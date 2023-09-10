import React from "react";

import Form from "./Form";
import classes from "./MainItems.module.css";
import LoadSpinner from "./LoadSpinner";

function MainItems(props) {
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
        {props.records.map((item) => (
          <ul key={item.id} className={classes["main-items--content"]}>
            <li>{item.id}</li>
            <li>
              <span>{item.brand}</span>
              <span>{item.title}</span>
            </li>
            <li>{item.description}</li>
            <li>${item.price}</li>
            <li>{item.discountPercentage}%</li>
            <li>
              <Form id={item.id} />
            </li>
          </ul>
        ))}
        {props.onError && (
          <p className={classes["error-message"]}>{props.onError}</p>
        )}
        {props.records.length === 0 && !props.onError && <LoadSpinner />}
      </div>
    </React.Fragment>
  );
}

export default MainItems;
