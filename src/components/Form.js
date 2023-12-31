import Input from "./Input";
import React, { useState, useRef } from "react";
import classes from "./Form.module.css";

function Form(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    let enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
    }

    props.onAddToCart(enteredAmountNumber);
    amountInputRef.current.value = 1;
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && (
        <p style={{ textAlign: "left" }}>
          Please enter
          <br />a valid amount
          <br />
          (1-5).
        </p>
      )}
    </form>
  );
}

export default Form;
