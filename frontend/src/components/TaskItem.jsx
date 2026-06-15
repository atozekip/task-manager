function getStatusLabel(status) {
  switch (status) {
    case "todo":
      return "未着手";
    case "doing":
      return "進行中";
    case "done":
      return "完了";
    default:
      return "不明";
  }
}

function TaskItem({ task, onDelete }) {
  return (
    <div className="task-item">
      <div className="task-status">[{getStatusLabel(task.status)}]</div>
      <h2 className="task-title">{task.title}</h2>
      <p className="task-description">{task.description}</p>
      <p className="task-due-date">期限: {task.dueDate}</p>
      <button
        onClick={() => onDelete(task.id)}
        style={{ marginTop: "10px" }}
      >
        削除
      </button>
    </div>
  );
}

export default TaskItem;
