export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const EDIT_TODO = 'EDIT_TODO';
export const SUBMIT_EDIT = 'SUBMIT_EDIT';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

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

export function clearCompleted() {
  return {
    type: CLEAR_COMPLETED,
  };
}

export function toggleTodo(id) {
  return {
    type: COMPLETE_TODO,
    id,
  };
}

export function editTodo(id) {
  return {
    type: EDIT_TODO,
    id,
  };
}

export function submitEdit(id, text) {
  return {
    type: SUBMIT_EDIT,
    id,
    text,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
}
