import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onChangeStatus }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onChangeStatus={onChangeStatus}
        />
      ))}
    </div>
  );
}

export default TaskList;
