import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../UI/Button";
export const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //binding enteredText to app components with prop onAddGoal
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("");
    // setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goals</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        ></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
