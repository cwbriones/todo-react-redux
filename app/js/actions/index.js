export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = 'DELETE_TODO';
export const DELETE_ALL = 'DELETE_ALL';
export const TOGGLE_ALL = 'TOGGLE_ALL';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

export function toggleAll() {
  return {
    type: TOGGLE_ALL,
  };
}

export function deleteAll() {
  return {
    type: DELETE_ALL,
  };
}

export function toggleTodo(id) {
  return {
    type: COMPLETE_TODO,
    id,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
}
