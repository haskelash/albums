import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  UPDATE_EMPLOYEE_FORM,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  FETCH_EMPLOYEES
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

export const fetchEmployees = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: FETCH_EMPLOYEES, payload: snapshot.val() });
      });
  };
};

export const updateEmployee = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: UPDATE_EMPLOYEE });
        Actions.pop();
      });
  };
};
