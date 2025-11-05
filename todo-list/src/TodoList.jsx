import React, { useState } from 'react';
import BackBtn from './BackBtn.jsx';

export default function TodoList({ goBack }) {
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

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
      <h2>Todo List 📝</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter task name"
        onChange={e => setTask(e.target.value)}
        style={{ padding: '5px', width: '70%' }}
      />
      <button
        onClick={handleAddOrEdit}
        style={{ marginLeft: '10px', padding: '5px 10px' }}
      >
        {editingIndex !== null ? "Update Task" : "Add Task"}
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {t} {" "}
            <button onClick={() => handleEdit(index)}>Edit</button>{" "}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <BackBtn label="Back" onClick={goBack} />
    </div>
  );
}
