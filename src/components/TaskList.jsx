import PropTypes from 'prop-types';
import Task from './Task.jsx';
import './TaskList.css';

const TaskList = ({ tasks, onTaskClickCallback, onTaskDeleteCallback }) => {
  return (
    <ul className="tasks__list no-bullet">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          onClickCallback={onTaskClickCallback}
          onDeleteCallback={onTaskDeleteCallback}
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onTaskClickCallback: PropTypes.func.isRequired,
  onTaskDeleteCallback: PropTypes.func.isRequired,
};

export default TaskList;
