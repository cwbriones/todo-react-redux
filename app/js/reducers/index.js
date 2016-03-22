import { combineReducers } from 'redux';
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  DELETE_TODO,
  VisibilityFilters,
} from '../actions';

const { SHOW_ALL } = VisibilityFilters;
const initialTodos = {
  todoItems: [
    {
      id: 0,
      text: 'Get started with ES6 and React-Redux',
      completed: true,
    },
    {
      id: 1,
      text: 'Build my first Redux app',
      completed: false,
    },
  ],
  nextId: 2,
};


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = initialTodos, action) {
  switch (action.type) {
    case ADD_TODO: {
      const newTodoItems = [
        ...state.todoItems,
        {
          text: action.text,
          completed: false,
          id: state.nextId,
        },
      ];
      return {
        todoItems: newTodoItems,
        nextId: state.nextId + 1,
      };
    }
    case COMPLETE_TODO: {
      const newTodoItems = state.todoItems.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
      return Object.assign({}, state, {
        todoItems: newTodoItems,
      });
    }
    case DELETE_TODO: {
      const newTodoItems = state.todoItems.filter((todo) =>
        todo.id !== action.id
      );
      return Object.assign({}, state, {
        todoItems: newTodoItems,
      });
    }
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
