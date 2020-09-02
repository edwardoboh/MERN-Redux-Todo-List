import React from 'react';

import  { Provider } from 'react-redux';
import store from './store';

import NavbarComp from './components/Navbar';
import AddItem from './components/AddItem';
import TodoList from './components/TodoList';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NavbarComp />
        <Container>
          <AddItem />
          <TodoList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
