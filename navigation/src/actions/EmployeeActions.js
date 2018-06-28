import firebase from 'firebase';
import {
  UPDATE_EMPLOYEE_FORM
} from './types';

export const updateEmployeeForm = ({ prop, value }) => (
  {
    type: UPDATE_EMPLOYEE_FORM,
    payload: { prop, value }
  }
);

export const createEmployee = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
};
