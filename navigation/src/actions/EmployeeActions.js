import {
  UPDATE_EMPLOYEE
} from './types';

export const updateEmployee = ({ prop, value }) => (
  {
    type: UPDATE_EMPLOYEE,
    payload: { prop, value }
  }
);
