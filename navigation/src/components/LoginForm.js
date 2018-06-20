import React, { Component } from 'react';
import { Card, CardItem, Field, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Field
            label="Email"
            placeholder="foobar@gmail.com"
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

export default LoginForm;
