import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState } from 'react';
const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const toggleTaskComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList 
            tasks={tasks} 
            onToggleComplete={toggleTaskComplete}
            onDeleteTask={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
