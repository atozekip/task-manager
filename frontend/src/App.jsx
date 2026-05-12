import "./index.css";
import TaskList from "./components/TaskList";
import { tasks } from "./data/tasks";

function App() {
  return (
    <main className="app">
      <h1 className="app-title">Task Manager</h1>
      <TaskList tasks={tasks} />
    </main>
  );
}

export default App;
