import React, { Component } from 'react';
import { Picker } from 'react-native';
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
        <CardItem>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.updateEmployee({ prop: 'shift', value })}
            style={{ flex: 1 }}
          >
            <Picker.Item label="Sunday" value="Sunday" />
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
          </Picker>
        </CardItem>
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
