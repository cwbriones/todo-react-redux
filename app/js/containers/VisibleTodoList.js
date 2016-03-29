import { connect } from 'react-redux';
import { toggleTodo, toggleAll, deleteTodo, editTodo, submitEdit } from '../actions';
import TodoList from '../components/TodoList';

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos.todoItems, state.visibilityFilter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoCheckClick: (id) => dispatch(toggleTodo(id)),
    onTodoDestroyClick: (id) => dispatch(deleteTodo(id)),
    onToggleAll: () => dispatch(toggleAll()),
    onTodoEdit: (id) => dispatch(editTodo(id)),
    onTodoFinishEdit: (id, text) => dispatch(submitEdit(id, text)),
  };
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
