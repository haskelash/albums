import {
  UPDATE_EMPLOYEE_FORM,
  CREATE_EMPLOYEE
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
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
