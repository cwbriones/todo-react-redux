import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <section className="todoapp">
      <header className="header">
      <h1>todos</h1>
      <AddTodo />
      </header>
      <VisibleTodoList />
      <Footer />
    </section>
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>Written by Christian Briones</p>
    </footer>
  </div>
);

export default App;
