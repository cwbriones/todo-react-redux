import React, { PropTypes } from 'react';
import FilterLink from '../containers/FilterLink';

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

function RawFooter({ remaining, empty }) {
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
    </footer>
  );
}

RawFooter.propTypes = {
  remaining: PropTypes.number.isRequired,
  empty: PropTypes.bool.isRequired,
};

const Footer = connect(
  mapStateToProps
)(RawFooter);

export default Footer;
