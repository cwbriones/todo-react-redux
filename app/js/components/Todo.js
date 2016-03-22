import React, { PropTypes } from 'react';

const Todo = ({ onClick, completed, text }) => (
    <li
      onClick={onClick}
      className={completed ? 'completed' : 'view'}
    >
      <label>{text}</label>
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
      />
      <button className="destroy" />
    </li>
  );

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
