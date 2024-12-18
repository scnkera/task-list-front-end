import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, isComplete, onClickCallback, onDeleteCallback }) => {
  return (
    <li className="tasks__item">
      <button
        className="tasks__item__toggle"
        onClick={() => onClickCallback(id)}
      >
        {isComplete ? '✔️ ' : '⬜ '}
      </button>
      <span>{title}</span> {/* Title is now separate */}
      <button className="tasks__item__remove button" onClick={() => onDeleteCallback(id)}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default Task;