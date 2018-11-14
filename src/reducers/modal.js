import * as types from "./../constants/Calendar";
export default (state = [], action) => {
  switch (action.type) {
    case types.SET_MODAL_IS_OPEN:
      return action;
  }
  return state;
};
