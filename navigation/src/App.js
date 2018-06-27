import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDQ1BA7SGLxeVU-zBh0oSQNSzhZ1uwlUCU',
      authDomain: 'navigation-9ce74.firebaseapp.com',
      databaseURL: 'https://navigation-9ce74.firebaseio.com',
      projectId: 'navigation-9ce74',
      storageBucket: 'navigation-9ce74.appspot.com',
      messagingSenderId: '318327145387'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
