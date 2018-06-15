import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common/index.js';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
      </View>
    );
  }
}

export default App;
