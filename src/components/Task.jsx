import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, isComplete, onToggleComplete, onDeleteTask}) => {
  return (
    <li className="tasks__item">
      <button
        className="tasks__item__toggle"
        onClick={() => onToggleComplete(id)}
      >
        {isComplete ? '✔️ ' : '⬜ '}
        {title}
      </button>
      <button className="tasks__item__remove button" onClick={() => onDeleteTask(id)}>x</button>
    </li>
  );
};

// Wave-01 implementation

// const Task = ({ id, title, isComplete }) => {
//   return (
//     <li className="tasks__item">
//       <button className="tasks__item__toggle">{title}</button>
//       <button className="tasks__item__remove button">x</button>
//     </li>
//   );
// };

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Task;
