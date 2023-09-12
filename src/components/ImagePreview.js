import React, { useState } from "react";
import classes from "./ImagePreview.module.css";
import Modal from "./Modal";

function ImagePreview(props) {
  const [imgData, setImageData] = useState(props.imgsArr[0]);

  const selectImgHandler = (index) => {
    const slider = props.imgsArr[index];
    setImageData(slider);
  };

  return (
    <Modal onHideImgHandler={props.onHideImgHandler} showImg={props.showImg}>
      <div className={classes.imgContainer}>
        <button
          onClick={props.onHideImgHandler}
          className={classes.imgCloseBtn}
        >
          &times;
        </button>
        <img src={imgData.value} alt="photos" height="300" width="500" />
        <div className={classes.flexRow}>
          {props.imgsArr.map((image, i) => (
            <div key={i} className={classes.thumbnail}>
              <img
                src={image.value}
                alt="photos"
                onClick={() => {
                  selectImgHandler(i);
                }}
                width="100"
                height="70"
                className={imgData.id === i ? classes.clicked : classes.images}
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default ImagePreview;
