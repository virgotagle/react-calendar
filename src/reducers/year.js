import * as types from "./../constants/Calendar";
import { processDates } from "./process_dates";

export default (state = [], action) => {
  switch (action.type) {
    case types.SET_YEAR_DATA:
      return processDates(action.year);
  }
  return state;
};
