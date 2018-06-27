import React, { Component } from 'react';
import { Card, CardItem, Field, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Field
            label="Name"
            placeholder="John Doe"
          />
        </CardItem>
        <CardItem>
          <Field
            label="Phone"
            placeholder="555-555-5555"
          />
        </CardItem>

        <CardItem />

        <CardItem>
          <Button>
            Create
          </Button>
        </CardItem>
      </Card>
    );
  }
}

export default EmployeeCreate;
