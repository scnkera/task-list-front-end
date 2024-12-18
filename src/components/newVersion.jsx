const Task = ({
    id,
    title,
    isComplete,
    onToggleCompleteCallback,
    onDeleteCallback,
  }) => {
    const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
  
    const handleTaskClicked = () => {
      onToggleCompleteCallback(id);
    };
  
    const handleRemoveClicked = () => {
      onDeleteCallback(id);
    };
  
    return (
      <li className="tasks__item">
        <button
          className={`tasks__item__toggle ${buttonClass}`}
          onClick={handleTaskClicked}
        >0
          {title}
        </button>
        <button
          className="tasks__item__remove button"
          onClick={handleRemoveClicked}>x</button>
      </li>
    );
  };