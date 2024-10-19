'use client'; // Client component

import { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
    };
    onAdd(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input className="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input className="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <select className="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
