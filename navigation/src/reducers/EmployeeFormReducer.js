import {
  UPDATE_EMPLOYEE_FORM,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE_FORM:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CREATE_EMPLOYEE:
      return INITIAL_STATE;
    case UPDATE_EMPLOYEE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
