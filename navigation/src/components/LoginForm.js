import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardItem, Field, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Field
            label="Email"
            placeholder="foobar@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardItem>
        <CardItem>
          <Field
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardItem>
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password
});

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
