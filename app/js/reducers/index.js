import { combineReducers } from 'redux';
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from '../actions';

const { SHOW_ALL } = VisibilityFilters;
const initialTodos = [
  {
    id: 0,
    text: 'Get started with ES6 and React-Redux',
    completed: true
  },
  {
    id: 1,
    text: 'Build my first Redux app',
    completed: false
  }
];


function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = initialTodos, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: state.length
        }
      ];
    case COMPLETE_TODO:
      return state.map((todo, id) => {
        if (id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
