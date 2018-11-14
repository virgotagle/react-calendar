import * as types from "./../constants/Calendar";
import moment from "moment";
export default (state = [], action) => {
  switch (action.type) {
    case types.SET_MARKED_DAY:
      return state.filter(a => a.date !== action.date).concat(action);
    case types.REMOVE_MARKED_DAY:
      if (moment().format("DD/MM/YYYY") !== action.date) return state.filter(a => a.date !== action.date);
      else return state;
  }
  return state;
};
