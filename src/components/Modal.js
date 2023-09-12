import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
// import CartContext from "../store/cart-context";

const Backdrop = (props) => {
  return (
    <div
      onClick={() => {
        !props.showImg ? props.onClose() : props.onHide();
      }}
      className={classes.backdrop}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          showImg={props.showImg}
          onHide={props.onHideImgHandler}
          onClose={props.onClose}
        />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
