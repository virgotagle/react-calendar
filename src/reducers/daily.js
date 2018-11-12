import { FETCH_MARKED_DAYS, REMOVE_MARKED_DAYS } from "../actions";
import moment from "moment";
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MARKED_DAYS:
      return state.filter(a => a.date !== action.date).concat(action);

    case REMOVE_MARKED_DAYS:
      if (moment().format("DD/MM/YYYY") !== action.date) return state.filter(a => a.date !== action.date);
      else return state;
  }
  return state;
};
