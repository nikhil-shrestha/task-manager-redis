import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';

import Header from './components/header';
import AddTask from './components/add-task';
import DeleteTask from './components/delete-task';
import CallInfo from './components/call-info';
import CallAdd from './components/call-add';

import store from './store';
import { getTasks } from './actions/taskAction';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  useEffect(() => {
    store.dispatch(getTasks());
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Container>
          <AddTask />
          <DeleteTask />
          <CallInfo />
          <CallAdd />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
