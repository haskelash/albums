import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  UPDATE_EMPLOYEE_FORM,
  CREATE_EMPLOYEE
} from './types';

export const updateEmployeeForm = ({ prop, value }) => (
  {
    type: UPDATE_EMPLOYEE_FORM,
    payload: { prop, value }
  }
);

export const createEmployee = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: CREATE_EMPLOYEE });
        Actions.pop();
      });
  };
};
