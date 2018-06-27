import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login / Sign Up" initial />
      </Scene>
      <Scene key="main">
        <Scene key="employeeList" component={EmployeeList} title="Employees" />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
