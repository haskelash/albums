import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fetchEmployees();
  }

  render() {
    return (
      <View>
        <Text>Foobar</Text>
      </View>
    );
  }
}

export default connect(null, { fetchEmployees })(EmployeeList);
