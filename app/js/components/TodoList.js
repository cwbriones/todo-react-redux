import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoCheckClick, onTodoDestroyClick }) => (
  <ul className="todo-list">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClickCheck={() => onTodoCheckClick(todo.id)}
        onClickDestroy={() => onTodoDestroyClick(todo.id)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoCheckClick: PropTypes.func.isRequired,
  onTodoDestroyClick: PropTypes.func.isRequired,
};

export default TodoList;
