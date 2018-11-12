import { combineReducers } from "redux";
import yearlyCalendar from "./yearly";
import markedDays from "./daily";
import modal from "./modal";

const rootReducer = combineReducers({ yearlyCalendar, markedDays, modal });

export default rootReducer;
