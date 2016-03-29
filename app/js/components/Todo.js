import React, { PropTypes } from 'react';
import EditTodo from './EditTodo';

function Todo({ onClickCheck, onClickDestroy, onEdit, submitEdit, completed, text, editing }) {
  if (editing) {
    return (
      <li className="editing">
        <EditTodo
          className="edit"
          autoFocus
          onSubmit={submitEdit}
          text={text}
        />
      </li>
    );
  }
  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
      <label
        onDoubleClick={onEdit}
      >
        {text}
      </label>
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={onClickCheck}
      />
      <button
        className="destroy"
        onClick={onClickDestroy}
      />
      </div>
    </li>
  );
}

Todo.propTypes = {
  onClickCheck: PropTypes.func.isRequired,
  onClickDestroy: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  submitEdit: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  editing: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
