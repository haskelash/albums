import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardItem, Field, Button } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Field
            label="Email"
            placeholder="foobar@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardItem>
        <CardItem>
          <Field
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardItem>
        <CardItem>
          <Button>
            Login
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default connect(null, { emailChanged })(LoginForm);
