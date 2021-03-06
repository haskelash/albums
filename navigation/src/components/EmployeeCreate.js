import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEmployee } from '../actions';
import { Card, CardItem, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.createEmployee({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>
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

export default connect(mapStateToProps, { createEmployee })(EmployeeCreate);
