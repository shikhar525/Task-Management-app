'use client';

import { useState, useEffect } from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({});

  useEffect(() => {
    if (isEditing) setEditedTask(task);
  }, [isEditing]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const saveEdit = () => {
    onEdit(editedTask);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTask({});
    setIsEditing(false);
  }

  return (
    <div className="task-item">
      <li style={{ backgroundColor: task.completed ? '#e0e0e0' : 'white', marginBottom: '15px' }}>
        {!isEditing ? (
          <>
            <h3 style={{
              color: task.priority === 'high' ? 'red' : task.priority === 'medium' ? 'yellow' : 'green',
              textDecoration: task.completed ? 'line-through' : 'none'
            }}>
              {task.title}
            </h3>
            <p>{task.description}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <button onClick={() => onToggle(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            {!task.completed && <button onClick={() => setIsEditing(true)}>Edit</button>}
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="title"
              className="title"
              value={editedTask.title}
              onChange={handleEditChange}
              placeholder="Title"
            />
            <input
              type="text"
              name="description"
              className="description"
              value={editedTask.description}
              onChange={handleEditChange}
              placeholder="Description"
            />
            <select name="priority" className="priority" value={editedTask.priority} onChange={handleEditChange}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <button onClick={saveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        )}
      </li>
    </div>
  );
};

export default TaskItem;
