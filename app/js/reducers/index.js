import { combineReducers } from 'redux';
import {
  ADD_TODO,
  COMPLETE_TODO,
  TOGGLE_ALL,
  SET_VISIBILITY_FILTER,
  DELETE_TODO,
  EDIT_TODO,
  SUBMIT_EDIT,
  VisibilityFilters,
} from '../actions';

const { SHOW_ALL } = VisibilityFilters;
const initialTodos = {
  todoItems: [
    {
      id: 0,
      text: 'Get started with ES6 and React-Redux',
      completed: true,
      editing: false,
    },
    {
      id: 1,
      text: 'Build my first Redux app',
      completed: false,
      editing: false,
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
          editing: false,
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
    case EDIT_TODO: {
      console.log("edit " + action.id);
      const newTodoItems = state.todoItems.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            editing: true,
          });
        }
        return todo;
      });
      return Object.assign({}, state, {
        todoItems: newTodoItems,
      });
    }
    case SUBMIT_EDIT: {
      const newTodoItems = state.todoItems.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            editing: false,
            text: action.text,
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
    case TOGGLE_ALL: {
      const allMarked = state.todoItems.filter((todo) =>
        !todo.completed
      ).length === 0;
      const newTodoItems = state.todoItems.map((todo) =>
        Object.assign({}, todo, { completed: !allMarked })
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
