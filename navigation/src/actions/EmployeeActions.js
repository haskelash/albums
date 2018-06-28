import {
  UPDATE_EMPLOYEE_FORM
} from './types';

export const updateEmployeeForm = ({ prop, value }) => (
  {
    type: UPDATE_EMPLOYEE_FORM,
    payload: { prop, value }
  }
);
