import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
