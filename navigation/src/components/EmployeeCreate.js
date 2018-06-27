import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEmployee } from '../actions';

import { Card, CardItem, Field, Button } from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Field
            label="Name"
            placeholder="John Doe"
            value={this.props.name}
            onChangeText={value => this.props.updateEmployee({ prop: 'name', value })}
          />
        </CardItem>
        <CardItem>
          <Field
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.updateEmployee({ prop: 'phone', value })}
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

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { updateEmployee })(EmployeeCreate);
