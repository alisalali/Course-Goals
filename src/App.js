import "./App.css";
import { CourseInput } from "./components/CourseGoals/CourseInput";
import CourseGoalList from "./components/CourseGoalList/CourseGoalList";
import React, { useState } from "react";
function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updateGoals = [...prevGoals];
      updateGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updateGoals;
    });
    console.log(courseGoals);
  };
  const deleteItemHandler = (goalID) => {
    console.log(goalID);
    setCourseGoals((prevGoals) => {
      const updateGoals = prevGoals.filter((goals) => goals.id !== goalID);
      console.log(updateGoals);
      return updateGoals;
    });
  };
  let content = <p>No goals found. Maybe add one? </p>;

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        )}
        {courseGoals.length <= 0 && content}
      </section>
    </div>
  );
}

export default App;
