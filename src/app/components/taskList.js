'use client'; // Marking it as a client component

import { useState, useEffect } from 'react';
import TaskItem from './taskItem';
import TaskForm from './taskForm';
import SearchBar from './searchBar';

const TaskList = ({ initialTasks }) => {
    const [tasks, setTasks] = useState(initialTasks || []);
    const [search, setSearch] = useState('');

    const getUniqueObjects = (array, key) => {
        return array.filter((obj, index, self) =>
            index === self.findIndex((t) => (t[key] === obj[key]))
        );
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
            const updatedTasks = getUniqueObjects([...tasks, ...savedTasks], 'id');
            setTasks(updatedTasks);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (newTask) => {
        setTasks(prevTasks => [...prevTasks, newTask]);
    };
    const editTask = (editedTask) => {
        setTasks(tasks.map(task => task.id === editedTask.id ? editedTask : task));
    };
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };
    const toggleCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const sortedTasks = tasks.sort((a, b) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        if (a.completed !== b.completed) {
            return a.completed ? 1 : -1;
        }
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    const filteredTasks = () => {
        return sortedTasks.filter(task =>
            task.title.toLowerCase().includes(search.toLowerCase()) ||
            task.description.toLowerCase().includes(search.toLowerCase())
        );
    }

    const onSearch = (e) => setSearch(e.target.value);

    return (
        <div>
            <TaskForm onAdd={addTask} />
            <SearchBar value={search} onChange={onSearch} />
            <ul>
                {(filteredTasks() || []).map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        onEdit={editTask}
                        onToggle={toggleCompletion}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
