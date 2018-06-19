export default (state = null, action) => {
  switch (action.type) {
    case 'selectLibrary':
    return action.payload !== state ? action.payload : null;
    default:
      return state;
  }
};
