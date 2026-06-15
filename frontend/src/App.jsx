import { useState } from "react";
import "./index.css";

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import { tasks as initialTasks } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleAddTask = (task) => {
    const newTask = {
      id: Date.now(),
      title: task.title,
      description: task.description,
      status: "todo",
      dueDate: "",
    };

    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleChangeStatus = (id) => {
    const nextTasks = tasks.map((task) => {
      if (task.id !== id) {
        return task;
      }

      let nextStatus = "todo";

      if (task.status === "todo") {
        nextStatus = "doing";
      } else if (task.status === "doing") {
        nextStatus = "done";
      }

      return {
        ...task,
        status: nextStatus,
      };
    });

    setTasks(nextTasks);
  };

  return (
    <main className="app">
      <h1 className="app-title">Task Manager</h1>

      <TaskForm onAddTask={handleAddTask} />

      <hr style={{ margin: "20px 0" }} />

      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onChangeStatus={handleChangeStatus}
      />
    </main>
  );
}

export default App;