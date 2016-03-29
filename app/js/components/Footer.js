import React, { PropTypes } from 'react';
import FilterLink from '../containers/FilterLink';
import { clearCompleted } from '../actions';

import { connect } from 'react-redux';

function getTodosRemaining(todos) {
  const remainingTodos = todos.filter(t => !t.completed);
  return remainingTodos.length;
}

function mapStateToProps(state) {
  const todos = state.todos.todoItems;
  return {
    remaining: getTodosRemaining(todos),
    empty: todos.length === 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clear: () => dispatch(clearCompleted()),
  };
}

function RawFooter({ remaining, empty, clear }) {
  let style;
  if (empty) {
    style = { display: 'none' };
  } else {
    style = {};
  }
  return (
    <footer className="footer" style={style}>
      <span className="todo-count">
        <strong>{remaining} item{remaining === 1 ? '' : 's'} left.</strong>
      </span>
      <ul className="filters">
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </ul>
      <button className="clear-completed" onClick={clear}>
        Clear Completed
      </button>
    </footer>
  );
}

RawFooter.propTypes = {
  remaining: PropTypes.number.isRequired,
  empty: PropTypes.bool.isRequired,
  clear: PropTypes.func.isRequired,
};

const Footer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RawFooter);

export default Footer;
