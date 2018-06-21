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
            value={this.props.email}
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

const mapStateToProps = state => ({
  email: state.auth.email
});

export default connect(mapStateToProps, { emailChanged })(LoginForm);
