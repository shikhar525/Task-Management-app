import TaskList from './components/taskList';

// Simulate fetching tasks (can be replaced with a real API)
async function getTasks() {
  const initialTasks = [
    { id: 1, title: "Task 1", description: "Description 1", priority: "high", completed: false },
    { id: 2, title: "Task 2", description: "Description 2", priority: "medium", completed: false },
    { id: 3, title: "Task 3", description: "Description 3", priority: "low", completed: false },
    { id: 4, title: "Task 4", description: "Description 4", priority: "low", completed: false },
    { id: 5, title: "Task 5", description: "Description 5", priority: "medium", completed: false },
    { id: 6, title: "Task 6", description: "Description 6", priority: "high", completed: false },
  ];
  return initialTasks;
}

export default async function Home() {
  const tasks = await getTasks();

  return (
    <div>
      <TaskList initialTasks={tasks} />
    </div>
  );
}
