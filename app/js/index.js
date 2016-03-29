import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import todoApp from './reducers';
import App from './components/App';

const createPersistentStore = compose(
  persistState('todos', { key: 'cwbriones-todomvc-react-redux' })
)(createStore);

const store = createPersistentStore(todoApp);
const mount = document.getElementById('main-container');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  mount
);
