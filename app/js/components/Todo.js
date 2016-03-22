import React, { PropTypes } from 'react';

const Todo = ({ onClickCheck, onClickDestroy, completed, text }) => (
    <li
      className={completed ? 'completed' : 'view'}
    >
      <label>{text}</label>
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
    </li>
  );

Todo.propTypes = {
  onClickCheck: PropTypes.func.isRequired,
  onClickDestroy: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
