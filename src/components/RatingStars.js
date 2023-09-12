import React from "react";
import { FaStar } from "react-icons/fa";
import classes from "./RatingStars.module.css";

function RatingStars(props) {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const currentRating = i + 1;
        return (
          <FaStar
            key={i}
            className={classes.star}
            color={
              currentRating <= Math.round(props.rating) ? "#ffc107" : "#e4e5e9"
            }
          />
        );
      })}
    </div>
  );
}

export default RatingStars;
