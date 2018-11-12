import { FETCH_YEARLY_CALENDAR } from "../actions";
import { processDates } from "./process_dates";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_YEARLY_CALENDAR:
      return processDates(action.year);
  }
  return state;
};
