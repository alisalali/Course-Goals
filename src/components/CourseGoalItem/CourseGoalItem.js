import React from "react";
import "./CourseGoalItem.css";
const CourseGoalItem = (props) => {
  const deleteItemHandler = (event) => {
    props.onDelete(props.id);
  };
  console.log(props);
  return (
    <li className="goal-item" onClick={deleteItemHandler}>
      {props.children}
    </li>
  );
};
export default CourseGoalItem;
