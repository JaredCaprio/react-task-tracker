import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import AddTask from "./components/AddTask";
import CardSkeleton from "./components/CardSkeleton";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [addForm, setAddForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const headers = {
    "Content-type": "application/json ",
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setIsLoading(false);
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    /* const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]); */
  };

  //fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    console.log(updTask);
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: data.reminder } : task;
      })
    );
  };

  return (
    <div className="container">
      <Header
        text={addForm ? "Close" : "Add"}
        color={addForm ? "darkred" : "darkgreen"}
        title="Task Tracker"
        toggleAdd={() => setAddForm(!addForm)}
      />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              {addForm && <AddTask onAdd={addTask} />}
              {isLoading && <CardSkeleton cards={3} />}
              {tasks.length > 0 && (
                <Tasks
                  tasks={tasks}
                  onToggle={toggleReminder}
                  onDelete={deleteTask}
                />
              )}
              {!isLoading && tasks.length < 1 && (
                <p>Add a Task to get Started</p>
              )}
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
