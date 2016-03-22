import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onKeyDown={e => {
        const text = e.target;
        if (e.which === 13) {
          dispatch(addTodo(text.value));
          text.value = '';
        }
      }}
    />
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
