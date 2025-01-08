import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';


const API_URL = 'http://localhost:5000/tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const tasksFromAPI = response.data.map((task) => ({
          id: task.id,
          title: task.title,
          isComplete: Boolean(task.completed_at),
        }));
        setTasks(tasksFromAPI);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
  const toggleCompleteTask = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (!task) return;

    const endpoint = `${API_URL}/${id}/${task.isComplete ? 'mark_incomplete' : 'mark_complete'}`;
    axios
      .patch(endpoint)
      .then(() => {
        const updatedTasks = tasks.map((task) =>
          task.id === id ? { ...task, isComplete: !task.isComplete } : task
        );
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.log(`Error toggling task ${id}:`, error);
      });
  };

  const deleteTask = (id) => {
    axios
      .delete(`${API_URL}/${id}`)
      .then(() => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
      })
      .catch((error) => {
        console.log(`Error deleting task ${id}:`, error);
      });
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
            onTaskClickCallback={toggleCompleteTask}
            onTaskDeleteCallback={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
