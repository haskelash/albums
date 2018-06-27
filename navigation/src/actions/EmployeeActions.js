import {
  UPDATE_EMPLOYEE
} from './';

export const updateEmployee = ({ props, value }) => (
  {
    type: UPDATE_EMPLOYEE,
    payload: { props, value }
  }
);
