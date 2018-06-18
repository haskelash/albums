import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const App = () => (
  <Provider store={createStore(reducers)}>
    <Header headerText="Stack" />
  </Provider>
);

export default App;
