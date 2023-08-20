import "./App.css";
import { CourseInput } from "./components/CourseGoals/CourseInput";
import CourseList from "./components/CourseGoals/CourseList";
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
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        <CourseList />
      </section>
    </div>
  );
}

export default App;
