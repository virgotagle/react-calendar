import { OPEN_MODAL } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action;
  }
  return state;
};
