import React from "react";
import classes from "./Pagination.module.css";

function Pagination(props) {
  return (
    <div className={classes.pagination}>
      <button onClick={props.onPrevPage} className="btn">
        Prev
      </button>
      <ul className={classes.pages}>
        {props.numbers.map((n, i) => (
          <li key={i}>
            <button
              onClick={() => {
                props.onChangePage(n);
              }}
              className={`${classes[props.currentPage === n ? "active" : ""]}`}
            >
              {n}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={props.onNextPage} className="btn">
        Next
      </button>
    </div>
  );
}

export default Pagination;
