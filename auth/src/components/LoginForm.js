import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardItem, Button, Field, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', loading: false, error: '' };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ loading: true, error: '' });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFailure.bind(this));
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFailure() {
    this.setState({
      loading: false,
      error: 'Authentication failed'
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in / Sign in
      </Button>
    );
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
          {this.renderButton()}
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
