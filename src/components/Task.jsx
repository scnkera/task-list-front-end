import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, isComplete, onClickCallback, onDeleteCallback }) => {
  return (
    <li className="tasks__item">
      <button onClick={() => onClickCallback(id)}>
        {isComplete ? '✔️ ' : '⬜️ '}
        <span
          className={`tasks__item__toggle ${
            isComplete ? 'tasks__item__toggle--completed' : ''
          }`}
        >
          {title}
        </span>
      </button>
      <button
        className="tasks__item__remove button"
        data-testid="delete button 42"
        onClick={() => onDeleteCallback(id)}
      >
        x
      </button>
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