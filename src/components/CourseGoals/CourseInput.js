import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../UI/Button";
export const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    //binding enteredText to app components with prop onAddGoal
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goals</label>
        <input type="text" onChange={goalInputChangeHandler}></input>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
