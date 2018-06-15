import React, { Component } from 'react';
import firebase from 'firebase';
import { Card, CardItem, Button, Field } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Field
            label="Email"
            value={this.state.email}
            placeholder="user@gmail.com"
            onChangeText={email => this.setState({ email })}
          />
        </CardItem>
        <CardItem>
          <Field
            label="Password"
            secureTextEntry
            value={this.state.password}
            placeholder="password"
            onChangeText={password => this.setState({ password })}
          />
        </CardItem>
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in / Sign in
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
