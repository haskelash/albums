import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardItem, Button, Field } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(() => {
        this.setState({ error: 'Failed to authenticate' });
      });
    });
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
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in / Sign in
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
