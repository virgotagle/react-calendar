import { combineReducers } from "redux";
import yearData from "./year";
import markedDays from "./day";
import modal from "./modal";

const rootReducer = combineReducers({ yearData, markedDays, modal });

export default rootReducer;
