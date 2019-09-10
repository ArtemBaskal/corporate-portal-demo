const INITAL_STATE = [6, 7, 8, 9, 10];

export default (state = INITAL_STATE, action) => {
  console.log(action);
  return state;
};
