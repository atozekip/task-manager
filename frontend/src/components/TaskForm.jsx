import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    onAddTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>タイトル</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>説明</label>
        <br />
        <input
          type="text"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>
        追加
      </button>
    </form>
  );
}

export default TaskForm;