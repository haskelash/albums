import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchEmployees } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fetchEmployees();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource(props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(props.employees);
  }

  render() {
    return (
      <View>
        <Text>Foobar</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
  return { employees };
};

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);
