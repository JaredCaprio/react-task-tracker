import { Link } from "react-router-dom";
import Task from "./Task";
export default function About() {
  const exampleTask = {
    id: 0,
    text: "Meet with Boss",
    day: "Feb 23rd, 2023 4:00pm",
    reminder: false,
  };
  return (
    <div className="docs-spacing">
      <div>
        <h1>Reminders</h1>
        <p>
          Reminders have not been fully implemented into this application. This
          App is just a demonstration of my ability to build basic web apps
          using react. But this is how they would work.
        </p>
      </div>
      <div>
        <h3>Task without reminder</h3>
        <p>double click a task to toggle its reminder</p>
      </div>
      <Task task={exampleTask} />
      <div>
        <h3>Task with reminder</h3>
        <p>the green line indicates the remainder for that task is activated</p>
      </div>
      <Task task={{ ...exampleTask, reminder: !exampleTask.reminder }} />

      <div className="version">
        <h4>Version 1.0.0</h4>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
}
