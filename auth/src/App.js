import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/index.js';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDydq_Ev_OPLEJLgAnlNNPkjOT_0JqhVbg',
      authDomain: 'auth-f681d.firebaseapp.com',
      databaseURL: 'https://auth-f681d.firebaseio.com',
      projectId: 'auth-f681d',
      storageBucket: 'auth-f681d.appspot.com',
      messagingSenderId: '303682792301'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Hello world!</Text>
      </View>
    );
  }
}

export default App;
