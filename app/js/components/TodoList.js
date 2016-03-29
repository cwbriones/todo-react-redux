import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onToggleAll, onTodoCheckClick, onTodoDestroyClick, onTodoEdit, onTodoFinishEdit }) => (
  <section className="main">
    <input
      className="toggle-all"
      type="checkbox"
      onClick={onToggleAll}
    />
    <ul className="todo-list">
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClickCheck={() => onTodoCheckClick(todo.id)}
          onClickDestroy={() => onTodoDestroyClick(todo.id)}
          onEdit={() => onTodoEdit(todo.id)}
          submitEdit={(text) => onTodoFinishEdit(todo.id, text)}
        />
      )}
    </ul>
  </section>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoFinishEdit: PropTypes.func.isRequired,
  onTodoCheckClick: PropTypes.func.isRequired,
  onTodoDestroyClick: PropTypes.func.isRequired,
  onToggleAll: PropTypes.func.isRequired,
  onTodoEdit: PropTypes.func.isRequired,
};

export default TodoList;
