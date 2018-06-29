import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card, CardItem, Button } from './common';
import { updateEmployeeForm, updateEmployee } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.updateEmployeeForm({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    const uid = this.props.employee.uid;
    this.props.updateEmployee({ name, phone, shift, uid });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardItem>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
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

export default connect(mapStateToProps, {
  updateEmployeeForm,
  updateEmployee
})(EmployeeEdit);
