import React, { useContext } from "react";
import classes from "./Pagination.module.css";
import CartContext from "../store/cart-context";

function Pagination(props) {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.pagination}>
      <button onClick={cartCtx.prevPage} className="btn">
        Prev
      </button>
      <ul className={classes.pages}>
        {cartCtx.numbers.map((n, i) => (
          <li key={i}>
            <button
              onClick={() => {
                cartCtx.changePage(n);
              }}
              className={`${
                classes[cartCtx.currentPage === n ? "active" : ""]
              }`}
            >
              {n}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={cartCtx.nextPage} className="btn">
        Next
      </button>
    </div>
  );
}

export default Pagination;
