import React, { useState } from 'react';
import './css/TodoList.css';
import './css/BackBtn.css';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrEdit = () => {
    if (!task.trim()) return;

    if (editingIndex !== null) {
      const updatedTasks = tasks.map((t, idx) => idx === editingIndex ? task : t);
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, task]);
    }

    setTask("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, idx) => idx !== index));
    if (editingIndex === index) setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditingIndex(index);
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="todo-container">
      <h2>Todo List 📝</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter task name"
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={handleAddOrEdit}>
        {editingIndex !== null ? "Update Task" : "Add Task"}
      </button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span>{t}</span>
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button className="back-btn" onClick={goBack}>Back</button>
      </div>
    </div>
  );
}
